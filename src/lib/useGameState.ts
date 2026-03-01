import { useState, useCallback } from "react";
import { getCharacterStage, getNextStage, XP_PER_CORRECT, XP_DAILY_BONUS, type CharacterStage } from "./gameData";

interface GameState {
  xp: number;
  streak: number;
  todayCompleted: boolean;
  correctToday: number;
  totalToday: number;
  lastPlayedDate: string | null;
}

const STORAGE_KEY = "rpg-learn-state";

function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const state = JSON.parse(raw);
      // Reset daily stats if it's a new day
      const today = new Date().toDateString();
      if (state.lastPlayedDate !== today) {
        return { ...state, todayCompleted: false, correctToday: 0, totalToday: 0 };
      }
      return state;
    }
  } catch { /* ignore */ }
  return { xp: 0, streak: 0, todayCompleted: false, correctToday: 0, totalToday: 0, lastPlayedDate: null };
}

function saveState(state: GameState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useGameState() {
  const [state, setState] = useState<GameState>(loadState);

  const addXP = useCallback((correct: boolean) => {
    setState(prev => {
      const next = {
        ...prev,
        totalToday: prev.totalToday + 1,
        ...(correct ? { xp: prev.xp + XP_PER_CORRECT, correctToday: prev.correctToday + 1 } : {}),
      };
      saveState(next);
      return next;
    });
  }, []);

  const completeDailyMission = useCallback(() => {
    setState(prev => {
      const today = new Date().toDateString();
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      const streakContinues = prev.lastPlayedDate === yesterday || prev.lastPlayedDate === today;
      const next: GameState = {
        ...prev,
        xp: prev.xp + XP_DAILY_BONUS,
        streak: streakContinues ? prev.streak + 1 : 1,
        todayCompleted: true,
        lastPlayedDate: today,
      };
      saveState(next);
      return next;
    });
  }, []);

  const currentStage = getCharacterStage(state.xp);
  const nextStage = getNextStage(state.xp);
  const xpProgress = nextStage
    ? ((state.xp - currentStage.requiredXP) / (nextStage.requiredXP - currentStage.requiredXP)) * 100
    : 100;

  const previousStage = state.xp > 0 ? getCharacterStage(state.xp - XP_PER_CORRECT - XP_DAILY_BONUS) : null;
  const justLeveledUp = previousStage && previousStage.level < currentStage.level;

  return {
    ...state,
    currentStage,
    nextStage,
    xpProgress,
    justLeveledUp,
    addXP,
    completeDailyMission,
  };
}
