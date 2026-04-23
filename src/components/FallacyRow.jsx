import { Fragment } from "react";
import Pips from "./Pips.jsx";
import Badge from "./Badge.jsx";
import Tooltip from "./Tooltip.jsx";
import { GROUP_COLORS, FALLBACK_COLOR, GROUP_DESCRIPTIONS, SUBGROUP_DESCRIPTIONS } from "../data/constants.js";

export default function FallacyRow({ fallacy: f, index, isOpen, onToggle }) {
  const c = GROUP_COLORS[f.group] ?? FALLBACK_COLOR;

  return (
    <Fragment>
      {/* ── Main row ── */}
      <tr
        onClick={onToggle}
        style={{
          background: isOpen ? c.bg : index % 2 === 0 ? "#0c0c0c" : "#0e0e0e",
          cursor: "pointer",
          borderLeft: isOpen
            ? `2px solid ${c.accent}`
            : "2px solid transparent",
          transition: "background 0.15s",
        }}
      >
        <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616" }}>
          <div
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 12,
              color: "#ddd",
            }}
          >
            {f.name_pt}
          </div>
          <div
            style={{
              fontSize: 11,
              color: "#6a6058",
              marginTop: 1,
              fontStyle: "italic",
            }}
          >
            {f.name}
          </div>
        </td>
        <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616" }}>
          <Tooltip content={GROUP_DESCRIPTIONS[f.group]}>
            <Badge label={f.group} color={c.accent} border={c.border} />
          </Tooltip>
        </td>
        <td
          style={{
            padding: "10px 12px",
            borderBottom: "1px solid #161616",
            fontSize: 11,
            color: "#585050",
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          <Tooltip content={SUBGROUP_DESCRIPTIONS[f.group]?.[f.subgroup]}>
            <span style={{ cursor: "help", borderBottom: "1px dotted #3a3a3a" }}>{f.subgroup}</span>
          </Tooltip>
        </td>
        <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <Pips value={f.frequency} color="#fbbf24" />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                color: "#444",
              }}
            >
              {f.frequency}
            </span>
          </div>
        </td>
        <td style={{ padding: "10px 12px", borderBottom: "1px solid #161616" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <Pips value={f.difficulty} color="#f87171" />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                color: "#444",
              }}
            >
              {f.difficulty}
            </span>
          </div>
        </td>
      </tr>

      {/* ── Expanded row ── */}
      {isOpen && (
        <tr style={{ background: c.bg, borderLeft: `2px solid ${c.accent}` }}>
          <td
            colSpan={5}
            style={{
              padding: "16px 20px 20px",
              borderBottom: "1px solid #1e1e1e",
            }}
          >
            <p
              style={{
                margin: "0 0 12px",
                fontSize: 11,
                color: "#666",
                fontFamily: "'IBM Plex Mono', monospace",
                letterSpacing: "0.04em",
              }}
            >
              ↳ {f.note}
            </p>

            {/* Description */}
            <div
              style={{
                margin: "0 0 18px",
                padding: "12px 16px",
                background: "#080808",
                borderRadius: 4,
                borderLeft: `3px solid ${c.accent}44`,
              }}
            >
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 9,
                  color: c.accent,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                O que é?
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: "#c0b8aa",
                  lineHeight: 1.75,
                }}
              >
                {f.description}
              </p>
            </div>

            {/* Examples */}
            <div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 9,
                  color: c.accent,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Exemplos
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {f.examples.map((ex, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: "#080808",
                      border: "1px solid #1a1a1a",
                      borderRadius: 4,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        padding: "10px 14px",
                        borderBottom: "1px solid #141414",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 9,
                          color: "#444",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: 5,
                        }}
                      >
                        Exemplo {idx + 1}
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 13,
                          color: "#d8d0c4",
                          lineHeight: 1.65,
                          fontStyle: "italic",
                        }}
                      >
                        "{ex.exemplo}"
                      </p>
                    </div>
                    <div
                      style={{ padding: "9px 14px", background: `${c.bg}bb` }}
                    >
                      <div
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 9,
                          color: "#444",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: 5,
                        }}
                      >
                        Por que é falácia?
                      </div>
                      <p
                        style={{
                          margin: 0,
                          fontSize: 12,
                          color: "#7a7268",
                          lineHeight: 1.65,
                        }}
                      >
                        {ex.explicacao}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </td>
        </tr>
      )}
    </Fragment>
  );
}
