export default function SortableHeader({ sortKey, label, sort, onSort }) {
  const isActive = sort.key === sortKey;
  return (
    <th
      onClick={() => onSort(sortKey)}
      style={{
        padding: "10px 12px",
        textAlign: "left",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 10,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: isActive ? "#fbbf24" : "#555",
        cursor: "pointer",
        userSelect: "none",
        whiteSpace: "nowrap",
        borderBottom: "1px solid #1e1e1e",
        background: "#0a0a0a",
        transition: "color 0.15s",
      }}
    >
      {label} {isActive ? (sort.dir === 1 ? "↑" : "↓") : ""}
    </th>
  );
}
