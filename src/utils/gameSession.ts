import { GameMode } from '../types.ts';
import { GAME_MODES } from '../constants/gameModes.ts';

/**
 * Every game mode must have a configuration entry. GameOverScreen reads
 * `GAME_MODES[mode]`, so an unknown mode has to be rejected before it can
 * reach rendering.
 */
export const GAME_MODE_IDS = Object.keys(GAME_MODES) as GameMode[];

export function isGameMode(value: unknown): value is GameMode {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(GAME_MODES, value);
}

export interface NewGameRequest {
  mode: GameMode;
  mazeId: string;
}

/**
 * Resolve the arguments of `startNewGame`.
 *
 * React DOM handlers call `onClick={handler}` with the click event, so a
 * SyntheticEvent can arrive where a `GameMode` is expected. Accepting it used to
 * corrupt `selectedMode` (and the persisted value), silently starting a Maze
 * game and leaving Game Over reading `GAME_MODES[event].nameKey`, which crashed
 * the render and left the player on a frozen screen. Only a genuine mode id is
 * accepted here; everything else falls back to the current selection.
 */
export function resolveNewGameRequest(
  modeArg: unknown,
  mazeIdArg: unknown,
  fallbackMode: GameMode,
  fallbackMazeId: string
): NewGameRequest {
  return {
    mode: isGameMode(modeArg) ? modeArg : fallbackMode,
    mazeId: typeof mazeIdArg === 'string' ? mazeIdArg : fallbackMazeId,
  };
}
