export default function ScoreHUD({
  score,
  streak,
  multiplier,
  timeLeft,
  timerLimit,
  questionIndex,
  totalQuestions,
  lastPointsEarned,
}) {
  const timerPct = timerLimit ? (timeLeft / timerLimit) * 100 : 100;
  const timerColor =
    timerPct > 50 ? "#4caf7d" : timerPct > 25 ? "#e0a040" : "#cf5959";

  const streakTier = streak >= 9 ? 3 : streak >= 6 ? 2 : streak >= 3 ? 1 : 0;
  const streakColors = ["#555", "#7c9fbf", "#c8a040", "#cf5959"];
  const streakColor = streakColors[streakTier];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "12px 20px",
        background: "#111",
        borderRadius: 10,
        border: "1px solid #222",
        marginBottom: 20,
        flexWrap: "wrap",
      }}
    >
      {/* Score */}
      <div style={{ flex: "0 0 auto" }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: "#444",
            letterSpacing: "0.1em",
            marginBottom: 2,
          }}
        >
          PONTOS
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#f5efe6",
          }}
        >
          {score.toLocaleString("pt-BR")}
          {lastPointsEarned > 0 && (
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: "#4caf7d",
                marginLeft: 6,
              }}
            >
              +{lastPointsEarned}
            </span>
          )}
        </div>
      </div>

      {/* Streak */}
      <div style={{ flex: "0 0 auto" }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: "#444",
            letterSpacing: "0.1em",
            marginBottom: 2,
          }}
        >
          SEQUÊNCIA
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 18,
            fontWeight: 700,
            color: streakColor,
          }}
        >
          {streak > 0 ? `×${streak}` : "—"}
          {multiplier > 1 && (
            <span style={{ fontSize: 11, color: "#c8a040", marginLeft: 6 }}>
              {multiplier}×
            </span>
          )}
        </div>
      </div>

      {/* Timer */}
      {timerLimit && (
        <div style={{ flex: "0 0 80px" }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 9,
              color: "#444",
              letterSpacing: "0.1em",
              marginBottom: 4,
            }}
          >
            TEMPO
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 18,
                fontWeight: 700,
                color: timerColor,
                minWidth: 28,
              }}
            >
              {timeLeft ?? timerLimit}
            </span>
            <div
              style={{
                flex: 1,
                height: 4,
                background: "#222",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${timerPct}%`,
                  background: timerColor,
                  transition: "width 1s linear, background 0.5s",
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Progress */}
      <div style={{ flex: "0 0 auto", marginLeft: "auto" }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: "#444",
            letterSpacing: "0.1em",
            marginBottom: 2,
            textAlign: "right",
          }}
        >
          PROGRESSO
        </div>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 16,
            color: "#888",
          }}
        >
          <span style={{ color: "#e0d8cc", fontWeight: 700 }}>
            {questionIndex + 1}
          </span>
          /{totalQuestions}
        </div>
      </div>
    </div>
  );
}
