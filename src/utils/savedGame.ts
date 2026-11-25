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
    const x = parseNumber(coordinates[0]);
    const y = parseNumber(coordinates[1]);
    if (x === null || y === null || !Number.isInteger(x) || !Number.isInteger(y)) return null;
    points.push([x, y]);
  }
  return points;
}

function parseNumber(raw: string | null): number | null {
  if (raw === null || raw.trim() === '') return null;
  const value = Number(raw);
  return Number.isFinite(value) ? value : null;
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
  const foodX = parseNumber(foodXRaw);
  const foodY = parseNumber(foodYRaw);
  const score = parseNumber(scoreRaw);
  const gameSpeed = parseNumber(speedRaw);
  if (foodX === null || foodY === null || score === null || gameSpeed === null) return null;
  const food: Point = [foodX, foodY];
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

  const snakeKeys = new Set(snake.map(([x, y]) => `${x},${y}`));
  const obstacleKeys = new Set(obstacles.map(([x, y]) => `${x},${y}`));
  if (
    snakeKeys.size !== snake.length ||
    obstacleKeys.size !== obstacles.length ||
    snake.some(([x, y]) => obstacleKeys.has(`${x},${y}`)) ||
    obstacleKeys.has(`${food[0]},${food[1]}`) ||
    snakeKeys.has(`${food[0]},${food[1]}`)
  ) return null;

  const bonusXRaw = readValue(STORAGE_KEYS.savedBonusFoodX);
  const bonusYRaw = readValue(STORAGE_KEYS.savedBonusFoodY);
  const bonusRemainingRaw = readValue(STORAGE_KEYS.savedBonusFoodRemaining);
  if ((bonusXRaw === null) !== (bonusYRaw === null)) return null;

  let bonusFood: Point | null = null;
  let bonusRemainingMs = 0;
  if (bonusXRaw !== null && bonusYRaw !== null) {
    const bonusX = parseNumber(bonusXRaw);
    const bonusY = parseNumber(bonusYRaw);
    const remaining = bonusRemainingRaw === null
      ? GameLogic.BONUS_FOOD_DISPLAY_TIMEOUT_MS
      : parseNumber(bonusRemainingRaw);
    if (bonusX === null || bonusY === null || remaining === null) return null;
    const bonus: Point = [bonusX, bonusY];
    if (
      !isValidPoint(bonus) ||
      obstacleKeys.has(`${bonus[0]},${bonus[1]}`) ||
      snakeKeys.has(`${bonus[0]},${bonus[1]}`) ||
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
      : parseNumber(rawTimeRemaining) ?? Number.NaN;
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
