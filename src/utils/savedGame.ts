import { GameLogic } from '../constants/gameConstants.ts';
import { DifficultyProfile, Direction, FoodType, GameMode, Point } from '../types.ts';
import { createInitialGameState, GameEngineState } from './gameReducer.ts';
import { STORAGE_KEYS } from './storage.ts';

export interface RestoredGameSnapshot {
  state: GameEngineState;
  bonusRemainingMs: number;
}

const VALID_DIRECTIONS: Direction[] = ['UP', 'DOWN', 'LEFT', 'RIGHT'];
const VALID_MODES: GameMode[] = ['classic', 'maze', 'time_attack', 'survival'];
const VALID_FOOD_TYPES: FoodType[] = ['regular', 'bonus', 'golden', 'ice', 'poison', 'mystery'];

function parsePointList(raw: string): Point[] | null {
  if (!raw) return [];
  const points: Point[] = [];
  for (const entry of raw.split(';')) {
    const coordinates = entry.split(',');
    if (coordinates.length !== 2) return null;
    const x = Number(coordinates[0]);
    const y = Number(coordinates[1]);
    if (!Number.isInteger(x) || !Number.isInteger(y)) return null;
    points.push([x, y]);
  }
  return points;
}

function isValidPoint([x, y]: Point): boolean {
  return (
    Number.isInteger(x) &&
    Number.isInteger(y) &&
    x >= 0 &&
    x < GameLogic.DEFAULT_GRID_SIZE &&
    y >= 0 &&
    y < GameLogic.DEFAULT_GRID_HEIGHT
  );
}

export function parseSavedGameSnapshot(
  readValue: (key: string) => string | null,
  fallbackDifficulty: DifficultyProfile = 'modern'
): RestoredGameSnapshot | null {
  if (readValue(STORAGE_KEYS.savedGameRunning) !== 'true') return null;

  const version = readValue(STORAGE_KEYS.savedVersion);
  if (version !== null && version !== '1' && version !== '2') return null;

  const snakeRaw = readValue(STORAGE_KEYS.savedSnake);
  const directionRaw = readValue(STORAGE_KEYS.savedDirection);
  const foodXRaw = readValue(STORAGE_KEYS.savedFoodX);
  const foodYRaw = readValue(STORAGE_KEYS.savedFoodY);
  const scoreRaw = readValue(STORAGE_KEYS.savedScore);
  const speedRaw = readValue(STORAGE_KEYS.savedGameSpeed);
  if (
    snakeRaw === null ||
    directionRaw === null ||
    foodXRaw === null ||
    foodYRaw === null ||
    scoreRaw === null ||
    speedRaw === null
  ) return null;

  const snake = parsePointList(snakeRaw);
  const obstacles = parsePointList(readValue(STORAGE_KEYS.savedObstacles) ?? '');
  if (!snake || !obstacles || snake.length < 3) return null;

  const direction = directionRaw as Direction;
  const food: Point = [Number(foodXRaw), Number(foodYRaw)];
  const score = Number(scoreRaw);
  const gameSpeed = Number(speedRaw);
  if (
    !VALID_DIRECTIONS.includes(direction) ||
    snake.some((point) => !isValidPoint(point)) ||
    obstacles.some((point) => !isValidPoint(point)) ||
    !isValidPoint(food) ||
    !Number.isFinite(score) ||
    score < 0 ||
    !Number.isFinite(gameSpeed) ||
    gameSpeed < GameLogic.MIN_SPEED ||
    gameSpeed > GameLogic.INITIAL_SPEED
  ) return null;

  const obstacleKeys = new Set(obstacles.map(([x, y]) => `${x},${y}`));
  if (
    obstacleKeys.size !== obstacles.length ||
    snake.some(([x, y]) => obstacleKeys.has(`${x},${y}`)) ||
    obstacleKeys.has(`${food[0]},${food[1]}`) ||
    snake.some(([x, y]) => x === food[0] && y === food[1])
  ) return null;

  const bonusXRaw = readValue(STORAGE_KEYS.savedBonusFoodX);
  const bonusYRaw = readValue(STORAGE_KEYS.savedBonusFoodY);
  const bonusRemainingRaw = readValue(STORAGE_KEYS.savedBonusFoodRemaining);
  if ((bonusXRaw === null) !== (bonusYRaw === null)) return null;

  let bonusFood: Point | null = null;
  let bonusRemainingMs = 0;
  if (bonusXRaw !== null && bonusYRaw !== null) {
    const bonus: Point = [Number(bonusXRaw), Number(bonusYRaw)];
    const remaining = Number(bonusRemainingRaw ?? GameLogic.BONUS_FOOD_DISPLAY_TIMEOUT_MS);
    if (
      !isValidPoint(bonus) ||
      !Number.isFinite(remaining) ||
      obstacleKeys.has(`${bonus[0]},${bonus[1]}`) ||
      snake.some(([x, y]) => x === bonus[0] && y === bonus[1]) ||
      (bonus[0] === food[0] && bonus[1] === food[1])
    ) return null;
    bonusFood = bonus;
    bonusRemainingMs = Math.max(
      0,
      Math.min(GameLogic.BONUS_FOOD_DISPLAY_TIMEOUT_MS, remaining)
    );
  } else if (bonusRemainingRaw !== null) {
    return null;
  }

  const rawMode = readValue(STORAGE_KEYS.savedMode);
  const mode: GameMode = VALID_MODES.includes(rawMode as GameMode)
    ? rawMode as GameMode
    : 'maze';
  const rawDifficulty = readValue(STORAGE_KEYS.savedDifficultyProfile);
  const difficultyProfile: DifficultyProfile =
    rawDifficulty === 'retro' || rawDifficulty === 'modern'
      ? rawDifficulty
      : fallbackDifficulty;
  const rawFoodType = readValue(STORAGE_KEYS.savedFoodType);
  const foodType: FoodType = VALID_FOOD_TYPES.includes(rawFoodType as FoodType)
    ? rawFoodType as FoodType
    : 'regular';

  const initialState = createInitialGameState(mode, obstacles, difficultyProfile);
  const rawTimeRemaining = readValue(STORAGE_KEYS.savedTimeRemaining);
  const timeRemaining = initialState.timeRemainingMs === undefined
    ? undefined
    : rawTimeRemaining === null
      ? initialState.timeRemainingMs
      : Number(rawTimeRemaining);
  if (
    timeRemaining !== undefined &&
    (!Number.isFinite(timeRemaining) || timeRemaining < 0)
  ) return null;

  return {
    state: {
      ...initialState,
      snake,
      obstacles,
      direction,
      food,
      bonusFood,
      score,
      gameSpeed,
      mode,
      timeRemainingMs: timeRemaining === undefined
        ? undefined
        : Math.min(timeRemaining, initialState.timeRemainingMs ?? timeRemaining),
      foodType,
    },
    bonusRemainingMs,
  };
}
