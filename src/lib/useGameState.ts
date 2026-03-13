import { useState, useCallback } from "react";
import { getCharacterStage, getNextStage, XP_PER_CORRECT, XP_DAILY_BONUS, type CharacterStage } from "./gameData";

interface GameState {
  xp: number;
  streak: number;
  todayCompleted: boolean;
  correctToday: number;
  totalToday: number;
  lastPlayedDate: string | null;
  completedQuestionIds: string[];
}

const STORAGE_KEY = "rpg-learn-state";

function getTodayStr() {
  return new Date().toDateString();
}

function getYesterdayStr() {
  return new Date(Date.now() - 86400000).toDateString();
}

function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    console.log("📦 Loading game state:", raw ? "Found saved data" : "No saved data");

    if (raw) {
      const state = JSON.parse(raw) as GameState;
      console.log("📊 Loaded state:", { xp: state.xp, streak: state.streak, lastPlayedDate: state.lastPlayedDate });
      const today = getTodayStr();

      // Ensure completedQuestionIds exists (migration)
      if (!Array.isArray(state.completedQuestionIds)) {
        state.completedQuestionIds = [];
      }

      // Calculate streak on load based on lastPlayedDate
      if (state.lastPlayedDate !== today) {
        // New day - reset daily stats
        const isYesterday = state.lastPlayedDate === getYesterdayStr();
        const newStreak = isYesterday ? state.streak : (state.lastPlayedDate ? 0 : state.streak);
        console.log("📅 New day detected. Yesterday?", isYesterday, "New streak:", newStreak);
        return {
          ...state,
          todayCompleted: false,
          correctToday: 0,
          totalToday: 0,
          streak: newStreak,
        };
      }
      return state;
    }
  } catch (error) {
    console.error("❌ Error loading game state:", error);
  }
  console.log("🆕 Starting with fresh state");
  return {
    xp: 0, streak: 0, todayCompleted: false,
    correctToday: 0, totalToday: 0, lastPlayedDate: null,
    completedQuestionIds: [],
  };
}

function saveState(state: GameState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    console.log("💾 Game state saved:", { xp: state.xp, streak: state.streak, completedQuestions: state.completedQuestionIds.length });
  } catch (error) {
    console.error("❌ Error saving game state:", error);
  }
}

export function useGameState() {
  const [state, setState] = useState<GameState>(loadState);

  const addXP = useCallback((correct: boolean, questionId?: string) => {
    setState(prev => {
      const next: GameState = {
        ...prev,
        totalToday: prev.totalToday + 1,
        ...(correct ? { xp: prev.xp + XP_PER_CORRECT, correctToday: prev.correctToday + 1 } : {}),
        completedQuestionIds: questionId && !prev.completedQuestionIds.includes(questionId)
          ? [...prev.completedQuestionIds, questionId]
          : prev.completedQuestionIds,
      };
      saveState(next);
      return next;
    });
  }, []);

  const completeDailyMission = useCallback(() => {
    setState(prev => {
      const today = getTodayStr();

      // Don't increase streak if already completed today
      if (prev.todayCompleted && prev.lastPlayedDate === today) {
        return prev;
      }

      const yesterday = getYesterdayStr();
      const loggedInYesterday = prev.lastPlayedDate === yesterday;
      const alreadyToday = prev.lastPlayedDate === today;

      let newStreak: number;
      if (alreadyToday) {
        // Same day, no streak change
        newStreak = prev.streak;
      } else if (loggedInYesterday) {
        // Consecutive day
        newStreak = prev.streak + 1;
      } else {
        // Missed a day (or first time)
        newStreak = 1;
      }

      const next: GameState = {
        ...prev,
        xp: prev.xp + XP_DAILY_BONUS,
        streak: newStreak,
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
