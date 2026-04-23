import { useState, useMemo } from "react";
import { Fragment } from "react";
import {
  GROUP_COLORS,
  FALLBACK_COLOR,
  GROUPS,
  GROUP_DESCRIPTIONS,
  SUBGROUP_DESCRIPTIONS,
} from "../data/constants.js";
import Tooltip from "./Tooltip.jsx";
import Pips from "./Pips.jsx";

function GroupedRow({ f, c, isOpen, onToggle, index }) {
  return (
    <Fragment>
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
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.background = "#111";
        }}
        onMouseLeave={(e) => {
          if (!isOpen)
            e.currentTarget.style.background =
              index % 2 === 0 ? "#0c0c0c" : "#0e0e0e";
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

      {isOpen && (
        <tr style={{ background: c.bg, borderLeft: `2px solid ${c.accent}` }}>
          <td
            colSpan={3}
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
                      style={{
                        padding: "9px 14px",
                        background: `${c.bg}bb`,
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

export default function FallacyCardsView({ fallacies }) {
  const [expandedFallacy, setExpandedFallacy] = useState(null);

  const grouped = useMemo(() => {
    const groupOrder = GROUPS.filter((g) => g !== "Todos");
    const map = {};
    fallacies.forEach((f) => {
      if (!map[f.group]) map[f.group] = {};
      if (!map[f.group][f.subgroup]) map[f.group][f.subgroup] = [];
      map[f.group][f.subgroup].push(f);
    });
    return groupOrder
      .filter((g) => map[g])
      .map((g) => ({
        group: g,
        subgroups: Object.entries(map[g]).map(([sg, items]) => ({
          subgroup: sg,
          fallacies: items,
        })),
      }));
  }, [fallacies]);

  function toggleFallacy(name) {
    setExpandedFallacy((prev) => (prev === name ? null : name));
  }

  if (grouped.length === 0) {
    return (
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: 40,
          textAlign: "center",
          color: "#444",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 12,
        }}
      >
        Nenhuma falácia encontrada.
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
    >
      {grouped.map(({ group, subgroups }) => {
        const c = GROUP_COLORS[group] ?? FALLBACK_COLOR;
        const total = subgroups.reduce((s, sg) => s + sg.fallacies.length, 0);

        return (
          <div key={group}>
            {/* Group heading */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 12,
                marginBottom: 20,
                paddingBottom: 10,
                borderBottom: `1px solid ${c.border}`,
              }}
            >
              <Tooltip content={GROUP_DESCRIPTIONS[group]}>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 24,
                    fontWeight: 900,
                    color: c.accent,
                    margin: 0,
                    letterSpacing: "-0.01em",
                    cursor: "help",
                  }}
                >
                  {group}
                </h2>
              </Tooltip>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 10,
                  color: "#3a3a3a",
                }}
              >
                {total} {total === 1 ? "falácia" : "falácias"}
              </span>
            </div>

            {/* Subgroups */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {subgroups.map(({ subgroup, fallacies: sgFallacies }) => (
                <div key={subgroup}>
                  {/* Subgroup heading */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 8,
                      marginBottom: 8,
                      paddingLeft: 14,
                      borderLeft: `2px solid ${c.accent}44`,
                    }}
                  >
                    <Tooltip content={SUBGROUP_DESCRIPTIONS[group]?.[subgroup]}>
                      <h3
                        style={{
                          fontFamily: "'IBM Plex Mono', monospace",
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#777",
                          margin: 0,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          cursor: "help",
                          borderBottom: "1px dotted #333",
                        }}
                      >
                        {subgroup}
                      </h3>
                    </Tooltip>
                    <span
                      style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: 10,
                        color: "#2e2e2e",
                      }}
                    >
                      {sgFallacies.length}
                    </span>
                  </div>

                  {/* Mini table */}
                  <div
                    style={{
                      borderRadius: 4,
                      overflow: "hidden",
                      border: "1px solid #1a1a1a",
                    }}
                  >
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr>
                          {[
                            { label: "Nome", width: undefined },
                            { label: "Frequência", width: 140 },
                            { label: "Dificuldade", width: 140 },
                          ].map(({ label, width }) => (
                            <th
                              key={label}
                              style={{
                                padding: "7px 12px",
                                background: "#0a0a0a",
                                borderBottom: "1px solid #1a1a1a",
                                fontFamily: "'IBM Plex Mono', monospace",
                                fontSize: 9,
                                color: "#3a3a3a",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                textAlign: "left",
                                fontWeight: 600,
                                width,
                              }}
                            >
                              {label}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sgFallacies.map((f, i) => (
                          <GroupedRow
                            key={f.name}
                            f={f}
                            c={c}
                            index={i}
                            isOpen={expandedFallacy === f.name}
                            onToggle={() => toggleFallacy(f.name)}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
