import { useState, useCallback } from "react";

const XP_THRESHOLDS = [0, 100, 250, 450, 700, 1000, 1400, 1900, 2500, 3200];

export function getLevelFromXP(xp) {
  let level = 1;
  for (let i = XP_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= XP_THRESHOLDS[i]) {
      level = i + 1;
      break;
    }
  }
  return Math.min(level, 10);
}

export function getXPForLevel(level) {
  return XP_THRESHOLDS[Math.min(level - 1, XP_THRESHOLDS.length - 1)];
}

export function getXPForNextLevel(level) {
  return XP_THRESHOLDS[Math.min(level, XP_THRESHOLDS.length - 1)] ?? null;
}

const STORAGE_KEY = "fallacy_quiz_profile";

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function defaultProfile() {
  return {
    xp: 0,
    level: 1,
    totalRounds: 0,
    totalCorrect: 0,
    totalQuestions: 0,
    bestStreak: 0,
    history: [], // last 20 rounds
  };
}

export function usePlayerProfile() {
  const [profile, setProfile] = useState(
    () => loadProfile() ?? defaultProfile(),
  );

  const saveProfile = useCallback((updated) => {
    setProfile(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // storage full or unavailable — silently continue
    }
  }, []);

  const addRoundResult = useCallback(({ xpEarned, correct, total, streak }) => {
    setProfile((prev) => {
      const newXP = prev.xp + xpEarned;
      const newLevel = getLevelFromXP(newXP);
      const updated = {
        ...prev,
        xp: newXP,
        level: newLevel,
        totalRounds: prev.totalRounds + 1,
        totalCorrect: prev.totalCorrect + correct,
        totalQuestions: prev.totalQuestions + total,
        bestStreak: Math.max(prev.bestStreak, streak),
        history: [
          { xpEarned, correct, total, streak, date: Date.now() },
          ...prev.history,
        ].slice(0, 20),
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  }, []);

  const resetProfile = useCallback(() => {
    const fresh = defaultProfile();
    saveProfile(fresh);
  }, [saveProfile]);

  return { profile, addRoundResult, resetProfile, XP_THRESHOLDS };
}
