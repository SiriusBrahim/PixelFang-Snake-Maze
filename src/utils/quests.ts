import { STORAGE_KEYS, storage } from './storage.ts';
import { GameOverData } from '../types.ts';
import { TranslationKey } from './translations.ts';

export interface Quest {
  id: string;
  titleKey: TranslationKey;
  target: number;
  current: number;
  completed: boolean;
  type: 'score' | 'food' | 'bonus' | 'games';
}

const QUEST_POOL: Omit<Quest, 'current' | 'completed'>[] = [
  { id: 'q_score_30', titleKey: 'quest_score_30', target: 30, type: 'score' },
  { id: 'q_score_60', titleKey: 'quest_score_60', target: 60, type: 'score' },
  { id: 'q_food_25', titleKey: 'quest_food_25', target: 25, type: 'food' },
  { id: 'q_food_50', titleKey: 'quest_food_50', target: 50, type: 'food' },
  { id: 'q_bonus_3', titleKey: 'quest_bonus_3', target: 3, type: 'bonus' },
  { id: 'q_games_3', titleKey: 'quest_games_3', target: 3, type: 'games' },
];

export interface StoredQuestState {
  date: string; // YYYY-MM-DD
  quests: Quest[];
}

export function getTodayDateString(): string {
  return new Date().toISOString().slice(0, 10);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isValidStoredQuest(value: unknown): value is Quest {
  if (!isRecord(value)) return false;
  const definition = QUEST_POOL.find((quest) => quest.id === value.id);
  if (!definition) return false;

  return (
    value.titleKey === definition.titleKey &&
    value.target === definition.target &&
    value.type === definition.type &&
    typeof value.current === 'number' &&
    Number.isFinite(value.current) &&
    value.current >= 0 &&
    value.current <= definition.target &&
    typeof value.completed === 'boolean' &&
    value.completed === (value.current >= definition.target)
  );
}

function isValidStoredQuestState(value: unknown): value is StoredQuestState {
  if (!isRecord(value) || typeof value.date !== 'string' || !Array.isArray(value.quests)) {
    return false;
  }
  if (value.quests.length !== 3 || !value.quests.every(isValidStoredQuest)) return false;
  return new Set(value.quests.map((quest) => quest.id)).size === 3;
}

export class QuestManager {
  public getDailyQuests(): Quest[] {
    const today = getTodayDateString();
    const stored = storage.getJson<StoredQuestState | null>(STORAGE_KEYS.dailyQuests, null);

    if (isValidStoredQuestState(stored) && stored.date === today) {
      return stored.quests.map((quest) => ({ ...quest }));
    }

    // Seed 3 deterministic quests based on today's date string
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = (hash * 31 + today.charCodeAt(i)) >>> 0;
    }

    const shuffled = [...QUEST_POOL].sort((a, b) => {
      const ha = (hash ^ a.id.charCodeAt(2)) % 100;
      const hb = (hash ^ b.id.charCodeAt(2)) % 100;
      return ha - hb;
    });

    const newQuests: Quest[] = shuffled.slice(0, 3).map((q) => ({
      ...q,
      current: 0,
      completed: false,
    }));

    storage.setItem(
      STORAGE_KEYS.dailyQuests,
      JSON.stringify({ date: today, quests: newQuests })
    );

    return newQuests;
  }

  public processGameSession(
    gameData: GameOverData,
    onQuestCompleted?: (quest: Quest) => void
  ): Quest[] {
    const quests = this.getDailyQuests();
    let updated = false;

    for (const q of quests) {
      if (q.completed) continue;

      let progressToAdd = 0;
      switch (q.type) {
        case 'score':
          if (gameData.score >= q.target) {
            progressToAdd = q.target - q.current;
          } else {
            progressToAdd = Math.max(0, gameData.score - q.current);
          }
          break;
        case 'food':
          progressToAdd = gameData.sessionFoodEaten;
          break;
        case 'bonus':
          progressToAdd = gameData.bonusFoodEatenInGame;
          break;
        case 'games':
          progressToAdd = 1;
          break;
      }

      if (progressToAdd > 0) {
        q.current = Math.min(q.target, q.current + progressToAdd);
        if (q.current >= q.target) {
          q.completed = true;
          updated = true;
          onQuestCompleted?.(q);
        } else {
          updated = true;
        }
      }
    }

    if (updated) {
      storage.setItem(
        STORAGE_KEYS.dailyQuests,
        JSON.stringify({ date: getTodayDateString(), quests })
      );
    }

    return quests;
  }
}

export const questManager = new QuestManager();
