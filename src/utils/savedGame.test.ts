import { describe, expect, it } from 'vitest';
import { STORAGE_KEYS } from './storage.ts';
import { parseSavedGameSnapshot } from './savedGame.ts';

function makeSnapshot(overrides: Record<string, string | null> = {}) {
  const values = new Map<string, string>([
    [STORAGE_KEYS.savedGameRunning, 'true'],
    [STORAGE_KEYS.savedVersion, '2'],
    [STORAGE_KEYS.savedSnake, '10,10;10,11;10,12'],
    [STORAGE_KEYS.savedObstacles, '1,1'],
    [STORAGE_KEYS.savedDirection, 'UP'],
    [STORAGE_KEYS.savedFoodX, '10'],
    [STORAGE_KEYS.savedFoodY, '6'],
    [STORAGE_KEYS.savedScore, '12'],
    [STORAGE_KEYS.savedGameSpeed, '250'],
    [STORAGE_KEYS.savedMode, 'maze'],
    [STORAGE_KEYS.savedFoodType, 'regular'],
    [STORAGE_KEYS.savedDifficultyProfile, 'modern'],
  ]);

  for (const [key, value] of Object.entries(overrides)) {
    if (value === null) values.delete(key);
    else values.set(key, value);
  }
  return (key: string) => values.get(key) ?? null;
}

describe('parseSavedGameSnapshot', () => {
  it('restores legacy v1 saves with safe defaults for fields added in v2', () => {
    const restored = parseSavedGameSnapshot(makeSnapshot({
      [STORAGE_KEYS.savedVersion]: '1',
      [STORAGE_KEYS.savedMode]: null,
      [STORAGE_KEYS.savedFoodType]: null,
      [STORAGE_KEYS.savedDifficultyProfile]: null,
      [STORAGE_KEYS.savedTimeRemaining]: null,
    }));

    expect(restored).not.toBeNull();
    expect(restored?.state.mode).toBe('maze');
    expect(restored?.state.foodType).toBe('regular');
    expect(restored?.state.difficultyProfile).toBe('modern');
    expect(restored?.state.timeRemainingMs).toBeUndefined();
    expect(restored?.bonusRemainingMs).toBe(0);
  });

  it('restores v2 mode, food, difficulty, countdown and bonus timer exactly', () => {
    const restored = parseSavedGameSnapshot(makeSnapshot({
      [STORAGE_KEYS.savedMode]: 'time_attack',
      [STORAGE_KEYS.savedFoodType]: 'ice',
      [STORAGE_KEYS.savedDifficultyProfile]: 'retro',
      [STORAGE_KEYS.savedTimeRemaining]: '34500',
      [STORAGE_KEYS.savedBonusFoodX]: '5',
      [STORAGE_KEYS.savedBonusFoodY]: '5',
      [STORAGE_KEYS.savedBonusFoodRemaining]: '2300',
    }));

    expect(restored?.state.mode).toBe('time_attack');
    expect(restored?.state.foodType).toBe('ice');
    expect(restored?.state.difficultyProfile).toBe('retro');
    expect(restored?.state.timeRemainingMs).toBe(34500);
    expect(restored?.state.bonusFood).toEqual([5, 5]);
    expect(restored?.bonusRemainingMs).toBe(2300);
  });

  it('accepts unversioned legacy saves as v1-compatible data', () => {
    const restored = parseSavedGameSnapshot(makeSnapshot({
      [STORAGE_KEYS.savedVersion]: null,
      [STORAGE_KEYS.savedMode]: null,
    }));
    expect(restored?.state.mode).toBe('maze');
  });

  it.each([
    ['unsupported version', { [STORAGE_KEYS.savedVersion]: '99' }],
    ['invalid direction', { [STORAGE_KEYS.savedDirection]: 'NORTH' }],
    ['out-of-board snake cell', { [STORAGE_KEYS.savedSnake]: '10,10;10,11;20,12' }],
    ['duplicate snake cell', { [STORAGE_KEYS.savedSnake]: '10,10;10,11;10,10' }],
    ['empty food coordinate', { [STORAGE_KEYS.savedFoodX]: '' }],
    ['food overlapping snake', { [STORAGE_KEYS.savedFoodX]: '10', [STORAGE_KEYS.savedFoodY]: '11' }],
    ['obstacle overlapping snake', { [STORAGE_KEYS.savedObstacles]: '10,11' }],
    ['orphaned bonus coordinate', { [STORAGE_KEYS.savedBonusFoodX]: '5' }],
    ['invalid time attack timer', {
      [STORAGE_KEYS.savedMode]: 'time_attack',
      [STORAGE_KEYS.savedTimeRemaining]: 'NaN',
    }],
  ])('rejects %s without returning a partial state', (_label, overrides) => {
    expect(parseSavedGameSnapshot(makeSnapshot(overrides))).toBeNull();
  });

  it('returns null when there is no resumable game', () => {
    expect(parseSavedGameSnapshot(makeSnapshot({
      [STORAGE_KEYS.savedGameRunning]: 'false',
    }))).toBeNull();
  });

  it('restores a v3 atomic checkpoint including session statistics', () => {
    const checkpoint = {
      version: 3,
      state: {
        snake: [[10, 10], [10, 11], [10, 12]],
        obstacles: [[1, 1]],
        direction: 'LEFT',
        food: [8, 10],
        bonusFood: [5, 5],
        score: 28,
        gameSpeed: 220,
        mode: 'time_attack',
        foodType: 'golden',
        difficultyProfile: 'retro',
        timeRemainingMs: 18400,
        eventId: 17,
      },
      bonusRemainingMs: 1700,
      sessionStats: {
        sessionFoodEaten: 14,
        bonusFoodEaten: 2,
        foodTypeCounts: { golden: 3, ice: 1, poison: 0, mystery: 2 },
        playedCustomMaze: true,
        longestSnake: 18,
        foodWithoutWall: 9,
        foodAtMaxSpeed: 1,
        bonusEatenFast: true,
        wallHit: false,
        mazePasses: 4,
        directionsUsed: ['UP', 'LEFT'],
        elapsedSessionMs: 92000,
      },
    };
    const read = (key: string) => key === STORAGE_KEYS.savedCheckpoint
      ? JSON.stringify(checkpoint)
      : null;

    const restored = parseSavedGameSnapshot(read);

    expect(restored?.state.mode).toBe('time_attack');
    expect(restored?.state.direction).toBe('LEFT');
    expect(restored?.state.score).toBe(28);
    expect(restored?.state.timeRemainingMs).toBe(18400);
    expect(restored?.state.bonusFood).toEqual([5, 5]);
    expect(restored?.bonusRemainingMs).toBe(1700);
    expect(restored?.sessionStats?.sessionFoodEaten).toBe(14);
    expect(restored?.sessionStats?.directionsUsed).toEqual(['UP', 'LEFT']);
    expect(restored?.sessionStats?.elapsedSessionMs).toBe(92000);
  });

  it('rejects an unsupported or malformed atomic checkpoint', () => {
    expect(parseSavedGameSnapshot((key) => key === STORAGE_KEYS.savedCheckpoint
      ? JSON.stringify({ version: 99, state: {} })
      : null)).toBeNull();
    expect(parseSavedGameSnapshot((key) => key === STORAGE_KEYS.savedCheckpoint
      ? '{broken'
      : null)).toBeNull();
  });

});
