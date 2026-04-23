export default function Badge({ label, color, border }) {
  return (
    <span
      style={{
        fontSize: 10,
        fontFamily: "'IBM Plex Mono', monospace",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "2px 7px",
        borderRadius: 3,
        border: `1px solid ${border}`,
        color,
        background: "transparent",
      }}
    >
      {label}
    </span>
  );
}
