import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { fallacies } from "../data/fallacies.js";
import SearchBar from "../components/SearchBar.jsx";
import GroupFilter from "../components/GroupFilter.jsx";
import FallacyTable from "../components/FallacyTable.jsx";
import FallacyCardsView from "../components/FallacyCardsView.jsx";

export default function CompendioPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("Todos");
  const [sort, setSort] = useState({ key: "name", dir: 1 });
  const [expanded, setExpanded] = useState(null);
  const [grouped, setGrouped] = useState(false);

  const filtered = useMemo(() => {
    let list = fallacies;

    if (group !== "Todos") {
      list = list.filter((f) => f.group === group);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.name_pt.toLowerCase().includes(q) ||
          f.subgroup.toLowerCase().includes(q) ||
          f.note.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q) ||
          f.examples.some(
            (e) =>
              e.exemplo.toLowerCase().includes(q) ||
              e.explicacao.toLowerCase().includes(q),
          ),
      );
    }

    return [...list].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (typeof av === "string") return sort.dir * av.localeCompare(bv);
      return sort.dir * (av - bv);
    });
  }, [search, group, sort]);

  function handleSort(key) {
    setSort((s) => (s.key === key ? { key, dir: -s.dir } : { key, dir: 1 }));
  }

  function handleToggle(name) {
    setExpanded((prev) => (prev === name ? null : name));
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        fontFamily: "'Georgia', serif",
        color: "#e0d8cc",
        padding: "32px 20px",
      }}
    >
      {/* ── Header ── */}
      <div style={{ maxWidth: 1100, margin: "0 auto 28px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 12,
            marginBottom: 6,
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 34,
              fontWeight: 900,
              color: "#f5efe6",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Compêndio de Falácias
          </h1>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              color: "#444",
              letterSpacing: "0.1em",
            }}
          >
            v2.0 — {fallacies.length} entradas
          </span>
          <button
            onClick={() => navigate("/menu")}
            style={{
              marginLeft: "auto",
              padding: "7px 16px",
              background: "rgba(76,175,125,0.1)",
              border: "1px solid rgba(76,175,125,0.25)",
              borderRadius: 6,
              color: "#4caf7d",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.08em",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(76,175,125,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(76,175,125,0.1)")
            }
          >
            JOGAR →
          </button>
        </div>
        <p
          style={{
            margin: 0,
            color: "#5a5048",
            fontSize: 12,
            fontStyle: "italic",
          }}
        >
          Frequência: quão comum no cotidiano/mídia (1–5) · Dificuldade: quão
          difícil de identificar (1–5) · Clique numa linha para expandir
        </p>
      </div>

      {/* ── Controls ── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto 18px",
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <SearchBar value={search} onChange={setSearch} />
        <GroupFilter activeGroup={group} onSelect={setGroup} />
        {/* Agrupar toggle */}
        <button
          onClick={() => setGrouped((g) => !g)}
          style={{
            marginLeft: "auto",
            flexShrink: 0,
            padding: "5px 12px",
            background: grouped ? "#161616" : "transparent",
            border: `1px solid ${grouped ? "#555" : "#222"}`,
            color: grouped ? "#e0d8cc" : "#444",
            borderRadius: 3,
            cursor: "pointer",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            display: "flex",
            alignItems: "center",
            gap: 6,
            transition: "all 0.15s",
          }}
        >
          <span style={{ color: grouped ? "#4ade80" : "#333", fontSize: 8 }}>●</span>
          AGRUPAR
        </button>
      </div>

      {/* ── Content ── */}
      {!grouped ? (
        <FallacyTable
          fallacies={filtered}
          sort={sort}
          onSort={handleSort}
          expanded={expanded}
          onToggle={handleToggle}
          search={search}
        />
      ) : (
        <FallacyCardsView fallacies={filtered} />
      )}

      {/* ── Footer ── */}
      <div
        style={{
          maxWidth: 1100,
          margin: "14px auto 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            color: "#2a2a2a",
          }}
        >
          {filtered.length} de {fallacies.length} entradas
        </span>
      </div>
    </div>
  );
}
