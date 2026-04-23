import { useSearchParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useQuizEngine } from "../hooks/useQuizEngine.js";
import { usePlayerProfile } from "../hooks/usePlayerProfile.js";
import ScoreHUD from "../components/quiz/ScoreHUD.jsx";
import QuestionCard from "../components/quiz/QuestionCard.jsx";
import AnswerFeedback from "../components/quiz/AnswerFeedback.jsx";
import RoundSummary from "../components/quiz/RoundSummary.jsx";

export default function QuizPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mode = searchParams.get("mode") ?? "novato";
  const { profile, addRoundResult } = usePlayerProfile();

  const xpBeforeRef = useRef(profile.xp);

  function handleRoundComplete({ score, correctCount, total, bestStreak }) {
    addRoundResult({
      xpEarned: score,
      correct: correctCount,
      total,
      streak: bestStreak,
    });
  }

  const engine = useQuizEngine(mode, handleRoundComplete);
  const {
    phase,
    currentQuestion,
    questionIndex,
    totalQuestions,
    selectedAnswer,
    isCorrect,
    score,
    streak,
    multiplier,
    timeLeft,
    timerLimit,
    lastPointsEarned,
    correctCount,
    bestStreak,
    startRound,
    handleAnswer,
    nextQuestion,
  } = engine;

  // Landing state before first round
  if (phase === "idle") {
    const MODE_LABELS = {
      novato: "Novato",
      aprendiz: "Aprendiz",
      pensador: "Pensador",
      sofista: "Sofista",
    };
    const MODE_COLORS = {
      novato: "#4caf7d",
      aprendiz: "#7c9fbf",
      pensador: "#c8a040",
      sofista: "#cf5959",
    };
    const color = MODE_COLORS[mode] ?? "#e0d8cc";

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#080808",
          fontFamily: "'Georgia', serif",
          color: "#e0d8cc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: 480, textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              color: "#444",
              letterSpacing: "0.12em",
              marginBottom: 12,
            }}
          >
            MODO
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 36,
              fontWeight: 900,
              color,
              margin: "0 0 24px",
            }}
          >
            {MODE_LABELS[mode] ?? mode}
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: 14,
              lineHeight: 1.7,
              marginBottom: 36,
            }}
          >
            10 questões. Depois de cada resposta você verá uma explicação
            detalhada da falácia — seja você acertar ou errar.
          </p>
          <button
            onClick={startRound}
            style={{
              width: "100%",
              maxWidth: 300,
              padding: "16px",
              background: `${color}20`,
              border: `1px solid ${color}50`,
              borderRadius: 10,
              color,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.1em",
              cursor: "pointer",
              marginBottom: 16,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = `${color}35`)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = `${color}20`)
            }
          >
            COMEÇAR
          </button>
          <br />
          <button
            onClick={() => navigate("/menu")}
            style={{
              background: "transparent",
              border: "none",
              color: "#444",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              cursor: "pointer",
              letterSpacing: "0.08em",
            }}
          >
            ← VOLTAR AO MENU
          </button>
        </div>
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#080808",
          fontFamily: "'Georgia', serif",
          color: "#e0d8cc",
          padding: "40px 20px",
        }}
      >
        <RoundSummary
          score={score}
          correctCount={correctCount}
          totalQuestions={totalQuestions}
          bestStreak={bestStreak}
          xpEarned={score}
          profileXPBefore={xpBeforeRef.current}
          mode={mode}
          onPlayAgain={() => {
            xpBeforeRef.current = profile.xp;
            startRound();
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        fontFamily: "'Georgia', serif",
        color: "#e0d8cc",
        padding: "28px 20px",
      }}
    >
      <div style={{ maxWidth: 660, margin: "0 auto" }}>
        {/* Back link */}
        <button
          onClick={() => navigate("/menu")}
          style={{
            background: "transparent",
            border: "none",
            color: "#333",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            cursor: "pointer",
            letterSpacing: "0.08em",
            marginBottom: 16,
            padding: 0,
          }}
        >
          ← MENU
        </button>

        <ScoreHUD
          score={score}
          streak={streak}
          multiplier={multiplier}
          timeLeft={timeLeft}
          timerLimit={timerLimit}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
          lastPointsEarned={lastPointsEarned}
        />

        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            phase={phase}
          />
        )}

        {phase === "feedback" && currentQuestion && (
          <AnswerFeedback
            question={currentQuestion}
            isCorrect={isCorrect}
            selectedAnswer={selectedAnswer}
            onNext={nextQuestion}
          />
        )}
      </div>
    </div>
  );
}
