import {
  getLevelFromXP,
  getXPForLevel,
  getXPForNextLevel,
} from "../../hooks/usePlayerProfile.js";

export default function ProgressBar({ xp }) {
  const level = getLevelFromXP(xp);
  const currentLevelXP = getXPForLevel(level);
  const nextLevelXP = getXPForNextLevel(level);

  const pct =
    nextLevelXP != null
      ? Math.min(
          ((xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100,
          100,
        )
      : 100;

  const LEVEL_TITLES = [
    "",
    "Calouro",
    "Atento",
    "Cético",
    "Analista",
    "Crítico",
    "Dialético",
    "Sofista",
    "Maiêutico",
    "Racionalista",
    "Apodítico",
  ];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ flex: "0 0 auto", textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: "#444",
            letterSpacing: "0.1em",
          }}
        >
          NÍV.
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 20,
            fontWeight: 900,
            color: "#c8a040",
            lineHeight: 1,
          }}
        >
          {level}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 9,
            color: "#555",
            marginBottom: 4,
          }}
        >
          <span>{LEVEL_TITLES[level]}</span>
          {nextLevelXP != null ? (
            <span>
              {xp - currentLevelXP} / {nextLevelXP - currentLevelXP} XP
            </span>
          ) : (
            <span>MÁXIMO</span>
          )}
        </div>
        <div
          style={{
            height: 6,
            background: "#1e1e1e",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: "linear-gradient(90deg, #7c5c2e, #c8a040)",
              borderRadius: 3,
              transition: "width 0.6s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}
