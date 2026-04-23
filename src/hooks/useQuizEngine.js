import { useState, useEffect, useRef, useCallback } from "react";
import { generateRound } from "../utils/questionGenerator.js";

const TIMER_LIMITS = { novato: null, aprendiz: 30, pensador: 20, sofista: 15 };
const STREAK_MILESTONES = [3, 6, 9];
const STREAK_MULTIPLIERS = [1, 1.5, 2, 2.5, 3];

function getStreakMultiplier(streak) {
  let tier = 0;
  for (let i = 0; i < STREAK_MILESTONES.length; i++) {
    if (streak >= STREAK_MILESTONES[i]) tier = i + 1;
  }
  return STREAK_MULTIPLIERS[Math.min(tier, STREAK_MULTIPLIERS.length - 1)];
}

function calcBasePoints(difficulty) {
  return 10 * (difficulty ?? 1);
}

function calcSpeedBonus(elapsed, timerLimit) {
  if (!timerLimit) return 1;
  if (elapsed <= 5) return 1.5;
  if (elapsed <= 10) return 1.25;
  return 1;
}

export function useQuizEngine(mode, onRoundComplete) {
  const timerLimit = TIMER_LIMITS[mode] ?? null;

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [phase, setPhase] = useState("idle"); // idle | answering | feedback | done
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(timerLimit);
  const [elapsedOnAnswer, setElapsedOnAnswer] = useState(0);
  const [lastPointsEarned, setLastPointsEarned] = useState(0);

  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  // Start a new round
  const startRound = useCallback(() => {
    const qs = generateRound(mode, 10);
    setQuestions(qs);
    setQuestionIndex(0);
    setPhase("answering");
    setSelectedAnswer(null);
    setIsCorrect(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectCount(0);
    setTimeLeft(timerLimit);
    setLastPointsEarned(0);
    startTimeRef.current = Date.now();
  }, [mode, timerLimit]);

  // Timer countdown
  useEffect(() => {
    if (phase !== "answering" || !timerLimit) return;
    clearInterval(timerRef.current);
    startTimeRef.current = Date.now();
    setTimeLeft(timerLimit);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          // Time's up → treat as wrong answer
          handleAnswer("__timeout__");
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [phase, questionIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAnswer = useCallback(
    (answer) => {
      if (phase !== "answering") return;
      clearInterval(timerRef.current);

      const elapsed = timerLimit ? timerLimit - (timeLeft ?? timerLimit) : 0;
      setElapsedOnAnswer(elapsed);

      const question = questions[questionIndex];
      const correct = answer === question.correctAnswer;
      setSelectedAnswer(answer);
      setIsCorrect(correct);

      let points = 0;
      if (correct) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        setBestStreak((prev) => Math.max(prev, newStreak));
        setCorrectCount((c) => c + 1);

        const base = calcBasePoints(question.difficulty);
        const multi = getStreakMultiplier(newStreak);
        const speed = calcSpeedBonus(elapsed, timerLimit);
        points = Math.round(base * multi * speed);
        setScore((s) => s + points);
      } else {
        setStreak(0);
      }
      setLastPointsEarned(points);
      setPhase("feedback");
    },
    [phase, questions, questionIndex, streak, timeLeft, timerLimit],
  );

  const nextQuestion = useCallback(() => {
    const nextIndex = questionIndex + 1;
    if (nextIndex >= questions.length) {
      setPhase("done");
      onRoundComplete?.({
        score,
        correctCount: correctCount + (isCorrect ? 0 : 0), // already updated in state
        total: questions.length,
        bestStreak,
      });
    } else {
      setQuestionIndex(nextIndex);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setTimeLeft(timerLimit);
      setLastPointsEarned(0);
      setPhase("answering");
    }
  }, [
    questionIndex,
    questions.length,
    onRoundComplete,
    score,
    correctCount,
    isCorrect,
    bestStreak,
    timerLimit,
  ]);

  const currentQuestion = questions[questionIndex] ?? null;
  const multiplier = getStreakMultiplier(streak);

  return {
    phase,
    currentQuestion,
    questionIndex,
    totalQuestions: questions.length,
    selectedAnswer,
    isCorrect,
    score,
    streak,
    multiplier,
    bestStreak,
    correctCount,
    timeLeft,
    timerLimit,
    lastPointsEarned,
    startRound,
    handleAnswer,
    nextQuestion,
  };
}
