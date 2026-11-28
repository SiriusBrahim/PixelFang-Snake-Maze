import { describe, expect, it } from 'vitest';
import { GameLogic } from '../constants/gameConstants.ts';
import { createInitialGameState, gameReducer, type GameEngineState } from './gameReducer.ts';

// Head at [5,5] moving up into its own segment at [5,4]: the next tick is a
// guaranteed self-collision regardless of game mode.
const collidingState = (): GameEngineState => ({
  ...createInitialGameState('classic'),
  snake: [[5, 5], [6, 5], [6, 4], [5, 4], [4, 4]] as [number, number][],
  direction: 'UP' as const,
  food: [10, 10] as [number, number],
  obstacles: [] as [number, number][],
});

describe('game over flow invariants', () => {
  it('ignores further ticks after a terminal collision event', () => {
    const collided = gameReducer(collidingState(), { type: 'TICK', randomSeed: 3 });

    expect(collided.event?.type).toBe('collision');

    // The interval may fire once more before React switches screens. That tick
    // must neither move the snake nor raise a second terminal event.
    const afterTick = gameReducer(collided, { type: 'TICK', randomSeed: 4 });
    const afterClearBonus = gameReducer(collided, { type: 'CLEAR_BONUS' });

    expect(afterTick).toBe(collided);
    expect(afterClearBonus).toBe(collided);
    expect(afterTick.eventId).toBe(collided.eventId);
  });

  it('keeps the event id monotonic across a restart', () => {
    let state = gameReducer(collidingState(), { type: 'TICK', randomSeed: 3 });
    const terminalEventId = state.eventId;

    state = gameReducer(state, {
      type: 'RESET',
      state: createInitialGameState('classic'),
      randomSeed: 7,
    });

    expect(state.event).toBeNull();
    // App.tsx deduplicates reduced events by id. A restart that rewound the id
    // would make every event of the new game look stale.
    expect(state.eventId).toBeGreaterThanOrEqual(terminalEventId);

    const turned = gameReducer(state, { type: 'QUEUE_DIRECTION', direction: 'RIGHT' });
    const moved = gameReducer(turned, { type: 'TICK', randomSeed: 8 });
    expect(moved.event?.type).toBe('move');
    expect(moved.eventId).toBeGreaterThan(terminalEventId);
    expect(moved.snake[0]).not.toEqual(state.snake[0]);
  });

  it('moves again immediately after a restart', () => {
    const dead = gameReducer(collidingState(), { type: 'TICK', randomSeed: 3 });
    const restarted = gameReducer(dead, {
      type: 'RESET',
      state: createInitialGameState('survival'),
      randomSeed: 11,
      mode: 'survival',
    });

    expect(restarted.mode).toBe('survival');
    expect(restarted.modeConfig.id).toBe('survival');
    expect(restarted.snake).toHaveLength(3);

    const next = gameReducer(restarted, { type: 'TICK', randomSeed: 12 });
    expect(next.snake[0]).toEqual([10, restarted.snake[0][1] - 1]);
  });

  it('never emits a terminal event twice for one death', () => {
    let state: GameEngineState = collidingState();
    const terminalEventIds = new Set<number>();

    for (let i = 0; i < 5; i += 1) {
      const previousEventId = state.eventId;
      state = gameReducer(state, { type: 'TICK', randomSeed: 20 + i });
      const isTerminal =
        state.event?.type === 'collision' ||
        state.event?.type === 'victory' ||
        state.event?.type === 'time_up';
      // Only a newly raised terminal event counts; the reducer keeps the last
      // event in state, and a repeated tick must not advance its id.
      if (isTerminal && state.eventId !== previousEventId) {
        terminalEventIds.add(state.eventId);
      }
    }

    expect(terminalEventIds.size).toBe(1);
  });

  it('still advances a healthy game built from every mode', () => {
    for (const mode of ['maze', 'classic', 'time_attack', 'survival'] as const) {
      const state = createInitialGameState(mode);
      const next = gameReducer(state, { type: 'TICK', randomSeed: 5 });

      expect(next.event?.type).not.toBe('collision');
      expect(next.snake).toHaveLength(3);
      expect(next.snake[0][1]).toBe(state.snake[0][1] - 1);
      expect(next.snake[0][0]).toBeLessThan(GameLogic.DEFAULT_GRID_SIZE);
    }
  });
});
