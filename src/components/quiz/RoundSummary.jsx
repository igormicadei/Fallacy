import { useNavigate } from "react-router-dom";
import { getLevelFromXP } from "../../hooks/usePlayerProfile.js";

export default function RoundSummary({
  score,
  correctCount,
  totalQuestions,
  bestStreak,
  xpEarned,
  profileXPBefore,
  mode,
  onPlayAgain,
}) {
  const navigate = useNavigate();
  const accuracy = Math.round((correctCount / totalQuestions) * 100);
  const levelBefore = getLevelFromXP(profileXPBefore);
  const levelAfter = getLevelFromXP(profileXPBefore + xpEarned);
  const leveledUp = levelAfter > levelBefore;

  const MODE_LABELS = {
    novato: "Novato",
    aprendiz: "Aprendiz",
    pensador: "Pensador",
    sofista: "Sofista",
  };

  const accuracyColor =
    accuracy >= 80 ? "#4caf7d" : accuracy >= 50 ? "#c8a040" : "#cf5959";

  const statBox = (label, value, color = "#e0d8cc") => (
    <div
      style={{
        background: "#111",
        border: "1px solid #222",
        borderRadius: 8,
        padding: "16px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 9,
          color: "#444",
          letterSpacing: "0.1em",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 26,
          fontWeight: 900,
          color,
        }}
      >
        {value}
      </div>
    </div>
  );

  return (
    <div
      style={{
        maxWidth: 560,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Title */}
      {leveledUp && (
        <div
          style={{
            marginBottom: 16,
            padding: "10px 20px",
            background: "rgba(200,160,64,0.12)",
            border: "1px solid rgba(200,160,64,0.3)",
            borderRadius: 8,
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
            color: "#c8a040",
            letterSpacing: "0.1em",
          }}
        >
          ★ LEVEL UP! NÍVEL {levelAfter} DESBLOQUEADO ★
        </div>
      )}

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 28,
          fontWeight: 900,
          color: "#f5efe6",
          margin: "0 0 6px",
        }}
      >
        Rodada Concluída
      </h2>
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          color: "#444",
          marginBottom: 28,
          letterSpacing: "0.05em",
        }}
      >
        Modo {MODE_LABELS[mode] ?? mode}
      </div>

      {/* Stats grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 10,
          marginBottom: 20,
        }}
      >
        {statBox("PONTUAÇÃO", score.toLocaleString("pt-BR"))}
        {statBox("PRECISÃO", `${accuracy}%`, accuracyColor)}
        {statBox("MELHOR SEQUÊNCIA", `×${bestStreak}`, "#c8a040")}
        {statBox("XP GANHO", `+${xpEarned}`, "#7c9fbf")}
      </div>

      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 11,
          color: "#555",
          marginBottom: 28,
        }}
      >
        {correctCount} de {totalQuestions} acertos
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
        <button
          onClick={onPlayAgain}
          style={{
            width: "100%",
            padding: "15px",
            background: "rgba(76,175,125,0.12)",
            border: "1px solid rgba(76,175,125,0.3)",
            borderRadius: 8,
            color: "#4caf7d",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.1em",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(76,175,125,0.22)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "rgba(76,175,125,0.12)")
          }
        >
          JOGAR NOVAMENTE
        </button>
        <button
          onClick={() => navigate("/menu")}
          style={{
            width: "100%",
            padding: "15px",
            background: "#111",
            border: "1px solid #222",
            borderRadius: 8,
            color: "#888",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.1em",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1a1a1a")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
        >
          MENU PRINCIPAL
        </button>
        <button
          onClick={() => navigate("/compendio")}
          style={{
            width: "100%",
            padding: "15px",
            background: "transparent",
            border: "none",
            color: "#444",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            cursor: "pointer",
            letterSpacing: "0.08em",
          }}
        >
          VER COMPÊNDIO DE FALÁCIAS →
        </button>
      </div>
    </div>
  );
}
