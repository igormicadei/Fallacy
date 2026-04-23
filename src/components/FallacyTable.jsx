import SortableHeader from "./SortableHeader.jsx";
import FallacyRow from "./FallacyRow.jsx";

export default function FallacyTable({
  fallacies,
  sort,
  onSort,
  expanded,
  onToggle,
  search,
}) {
  return (
    <div
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        borderRadius: 6,
        overflow: "hidden",
        border: "1px solid #1a1a1a",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <SortableHeader
              sortKey="name"
              label="Nome"
              sort={sort}
              onSort={onSort}
            />
            <SortableHeader
              sortKey="group"
              label="Grupo"
              sort={sort}
              onSort={onSort}
            />
            <SortableHeader
              sortKey="subgroup"
              label="Sub-grupo"
              sort={sort}
              onSort={onSort}
            />
            <SortableHeader
              sortKey="frequency"
              label="Frequência"
              sort={sort}
              onSort={onSort}
            />
            <SortableHeader
              sortKey="difficulty"
              label="Dificuldade"
              sort={sort}
              onSort={onSort}
            />
          </tr>
        </thead>
        <tbody>
          {fallacies.map((f, i) => (
            <FallacyRow
              key={f.name}
              fallacy={f}
              index={i}
              isOpen={expanded === f.name}
              onToggle={() => onToggle(f.name)}
            />
          ))}
        </tbody>
      </table>

      {fallacies.length === 0 && (
        <div
          style={{
            padding: 40,
            textAlign: "center",
            color: "#444",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 12,
          }}
        >
          Nenhuma falácia encontrada para "{search}"
        </div>
      )}
    </div>
  );
}
