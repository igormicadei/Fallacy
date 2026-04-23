const GROUP_COLORS = {
  Apelos: "#7c5c2e",
  Relevância: "#5c2e2e",
  Presunção: "#2e4a5c",
  Causalidade: "#2e5c3a",
  Generalização: "#4a2e5c",
  Ambiguidade: "#5c4a2e",
  Formal: "#2e3a5c",
  Cognitiva: "#5c2e4a",
  Meta: "#3a5c2e",
};

export default function AnswerFeedback({ question, isCorrect, onNext }) {
  const { fallacy, exampleObj, correctAnswer } = question;
  const notFallacy = correctAnswer === "Não é falácia";

  const accentColor = isCorrect ? "#4caf7d" : "#cf5959";
  const bgColor = isCorrect ? "rgba(76,175,125,0.08)" : "rgba(207,89,89,0.08)";
  const groupColor = fallacy
    ? (GROUP_COLORS[fallacy.group] ?? "#3a3a3a")
    : "#3a3a3a";

  return (
    <div
      style={{
        background: bgColor,
        border: `1px solid ${accentColor}30`,
        borderRadius: 12,
        padding: "24px 28px",
        marginTop: 16,
      }}
    >
      {/* ── Result indicator ────────────────────────── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <span style={{ fontSize: 28 }}>{isCorrect ? "✓" : "✗"}</span>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            fontWeight: 700,
            color: accentColor,
            letterSpacing: "0.05em",
          }}
        >
          {isCorrect ? "CORRETO" : "INCORRETO"}
        </span>
        {fallacy && (
          <span
            style={{
              marginLeft: "auto",
              background: groupColor,
              color: "#e0d8cc",
              fontSize: 10,
              fontFamily: "'IBM Plex Mono', monospace",
              letterSpacing: "0.08em",
              padding: "3px 9px",
              borderRadius: 4,
              textTransform: "uppercase",
            }}
          >
            {fallacy.group}
          </span>
        )}
      </div>

      {/* ── Fallacy name ─────────────────────────────── */}
      {fallacy && (
        <>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              color: "#cf5959",
              letterSpacing: "0.1em",
              marginBottom: 4,
            }}
          >
            {isCorrect ? "FALÁCIA IDENTIFICADA" : "RESPOSTA CORRETA"}
          </div>
          <div style={{ marginBottom: 16 }}>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#f5efe6",
              }}
            >
              {fallacy.name_pt}
            </span>
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                color: "#555",
                marginLeft: 10,
              }}
            >
              {fallacy.name}
            </span>
          </div>

          {/* ── About the fallacy ─────────────────────── */}
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              color: "#cf5959",
              letterSpacing: "0.1em",
              marginBottom: 6,
            }}
          >
            SOBRE ESTA FALÁCIA
          </div>
          <p
            style={{
              margin: "0 0 20px",
              color: "#c8b8a8",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            {fallacy.description}
          </p>
        </>
      )}

      {!fallacy && notFallacy && (
        <>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              color: "#4caf7d",
              letterSpacing: "0.1em",
              marginBottom: 4,
            }}
          >
            ARGUMENTO VÁLIDO
          </div>
          <div style={{ marginBottom: 16 }}>
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#4caf7d",
              }}
            >
              Não há falácia aqui
            </span>
          </div>
        </>
      )}

      {/* ── Example explanation ───────────────────────── */}
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10,
          color: question.isFallacy ? "#cf5959" : "#4caf7d",
          letterSpacing: "0.1em",
          marginBottom: 6,
        }}
      >
        {question.isFallacy
          ? "POR QUE ESTE EXEMPLO É UMA FALÁCIA"
          : "POR QUE ESTE É UM ARGUMENTO VÁLIDO"}
      </div>
      <p
        style={{
          margin: "0 0 24px",
          color: "#c8b8a8",
          fontSize: 14,
          lineHeight: 1.7,
          fontStyle: "italic",
        }}
      >
        {exampleObj?.explicacao}
      </p>

      {/* ── Next button ──────────────────────────────── */}
      <button
        onClick={onNext}
        style={{
          width: "100%",
          padding: "14px",
          background: isCorrect
            ? "rgba(76,175,125,0.15)"
            : "rgba(207,89,89,0.15)",
          border: `1px solid ${accentColor}50`,
          borderRadius: 8,
          color: accentColor,
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.1em",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.target.style.background = isCorrect
            ? "rgba(76,175,125,0.25)"
            : "rgba(207,89,89,0.25)")
        }
        onMouseLeave={(e) =>
          (e.target.style.background = isCorrect
            ? "rgba(76,175,125,0.15)"
            : "rgba(207,89,89,0.15)")
        }
      >
        PRÓXIMA QUESTÃO →
      </button>
    </div>
  );
}
