export default function Pips({ value, max = 5, color }) {
  return (
    <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: i < value ? color : "#252525",
            boxShadow: i < value ? `0 0 5px ${color}66` : "none",
          }}
        />
      ))}
    </div>
  );
}
