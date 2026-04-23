export default function SearchBar({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Buscar por nome, grupo, descrição, exemplo..."
      style={{
        flex: 1,
        minWidth: 220,
        background: "#111",
        border: "1px solid #222",
        color: "#e0d8cc",
        padding: "8px 14px",
        borderRadius: 4,
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 12,
        outline: "none",
      }}
    />
  );
}
