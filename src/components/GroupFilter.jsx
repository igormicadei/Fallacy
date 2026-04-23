import { GROUPS, GROUP_COLORS } from "../data/constants.js";

export default function GroupFilter({ activeGroup, onSelect }) {
  return (
    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
      {GROUPS.map((g) => {
        const c = GROUP_COLORS[g];
        const isActive = activeGroup === g;
        return (
          <button
            key={g}
            onClick={() => onSelect(g)}
            style={{
              padding: "5px 11px",
              background: isActive ? "#161616" : "transparent",
              border: `1px solid ${isActive ? (c?.accent ?? "#fbbf24") : "#222"}`,
              color: isActive ? (c?.accent ?? "#fbbf24") : "#555",
              borderRadius: 3,
              cursor: "pointer",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.15s",
            }}
          >
            {g}
          </button>
        );
      })}
    </div>
  );
}
