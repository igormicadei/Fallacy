export default function QuestionCard({ question, onAnswer, phase }) {
  const disabled = phase !== "answering";
  const dangerColor = "#cf5959";
  const safeColor = "#4caf7d";

  function renderQuestionLabel() {
    if (question.type === "binary") {
      return (
        <>
          O ARGUMENTO ABAIXO É UMA{" "}
          <span style={{ color: dangerColor }}>FALÁCIA</span>?
        </>
      );
    }

    return "QUAL OPÇÃO IDENTIFICA MELHOR ESTE ARGUMENTO?";
  }

  const btnBase = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.05em",
    borderRadius: 8,
    cursor: disabled ? "default" : "pointer",
    border: "1px solid #333",
    background: "#161616",
    color: "#e0d8cc",
    padding: "14px 20px",
    transition: "background 0.15s, border-color 0.15s",
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <div
      style={{
        background: "#0e0e0e",
        border: "1px solid #1e1e1e",
        borderRadius: 12,
        padding: "28px",
      }}
    >
      {/* Question type label */}
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 9,
          color: "#444",
          letterSpacing: "0.12em",
          marginBottom: 16,
        }}
      >
        {renderQuestionLabel()}
      </div>

      {/* Statement */}
      <blockquote
        style={{
          margin: "0 0 28px",
          padding: "16px 20px",
          borderLeft: "3px solid #333",
          background: "#111",
          borderRadius: "0 8px 8px 0",
          fontFamily: "'Georgia', serif",
          fontSize: 17,
          lineHeight: 1.7,
          color: "#d8cfc5",
          fontStyle: "italic",
        }}
      >
        "{question.statement}"
      </blockquote>

      {/* Answers */}
      {question.type === "binary" ? (
        <div style={{ display: "flex", gap: 12 }}>
          <button
            onClick={() => !disabled && onAnswer("nao")}
            style={{
              ...btnBase,
              flex: 1,
              background: "#0d1f14",
              border: "1px solid #1a3d24",
              color: safeColor,
            }}
            onMouseEnter={(e) => {
              if (!disabled) {
                e.currentTarget.style.background = "#132a1c";
                e.currentTarget.style.borderColor = safeColor;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0d1f14";
              e.currentTarget.style.borderColor = "#1a3d24";
            }}
          >
            ARGUMENTO VÁLIDO 👍
          </button>
          <button
            onClick={() => !disabled && onAnswer("sim")}
            style={{
              ...btnBase,
              flex: 1,
              background: "#1f0d0d",
              border: "1px solid #3d1a1a",
              color: dangerColor,
            }}
            onMouseEnter={(e) => {
              if (!disabled) {
                e.currentTarget.style.background = "#2a1313";
                e.currentTarget.style.borderColor = dangerColor;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1f0d0d";
              e.currentTarget.style.borderColor = "#3d1a1a";
            }}
          >
            É UMA <span style={{ color: dangerColor }}>FALÁCIA</span> 👎
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
          }}
        >
          {question.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => !disabled && onAnswer(opt.value)}
              style={btnBase}
              onMouseEnter={(e) => {
                if (!disabled) {
                  e.currentTarget.style.background = "#1e1e1e";
                  e.currentTarget.style.borderColor = "#444";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#161616";
                e.currentTarget.style.borderColor = "#333";
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
