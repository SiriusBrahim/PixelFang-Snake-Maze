import { describe, expect, it } from 'vitest';
import { GAME_MODES } from '../constants/gameModes.ts';
import { GAME_MODE_IDS, isGameMode, resolveNewGameRequest } from './gameSession.ts';

describe('game session mode resolution', () => {
  it('rejects DOM click events passed as the game mode', () => {
    // React calls `onClick={startNewGame}` with a SyntheticEvent, which is a
    // plain object with a `nativeEvent` field at this layer.
    const clickEvent = { type: 'click', nativeEvent: { isTrusted: true } };

    expect(isGameMode(clickEvent)).toBe(false);
    expect(resolveNewGameRequest(clickEvent, clickEvent, 'time_attack', 'maze-1')).toEqual({
      mode: 'time_attack',
      mazeId: 'maze-1',
    });
  });

  it('accepts every real mode id and keeps an explicit request', () => {
    for (const mode of GAME_MODE_IDS) {
      expect(isGameMode(mode)).toBe(true);
      expect(resolveNewGameRequest(mode, 'custom-1', 'maze', '')).toEqual({
        mode,
        mazeId: 'custom-1',
      });
    }
  });

  it('rejects values that only look like modes', () => {
    for (const value of ['', 'MAZE', 'sandbox', '__proto__', 'toString', null, undefined, 42, []]) {
      expect(isGameMode(value)).toBe(false);
    }
  });

  it('keeps a valid fallback maze id when the maze argument is not a string', () => {
    expect(resolveNewGameRequest(undefined, undefined, 'classic', 'saved-maze')).toEqual({
      mode: 'classic',
      mazeId: 'saved-maze',
    });
  });

  it('guarantees a configuration for every accepted mode', () => {
    // GameOverScreen dereferences GAME_MODES[mode].nameKey, so this invariant is
    // what keeps the Game Over screen renderable.
    for (const mode of GAME_MODE_IDS) {
      expect(GAME_MODES[mode]).toBeDefined();
      expect(GAME_MODES[mode].nameKey).toBeTruthy();
    }
  });
});
