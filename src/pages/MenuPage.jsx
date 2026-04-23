import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlayerProfile } from "../hooks/usePlayerProfile.js";
import ProgressBar from "../components/quiz/ProgressBar.jsx";

const MODES = [
  {
    id: "novato",
    label: "Novato",
    description:
      "Diga se é ou não é uma falácia. Sem timer. Falácias de dificuldade 1–2.",
    detail: "Binário (sim/não)",
    color: "#4caf7d",
    borderColor: "#1a3d24",
    bg: "#0d1f14",
  },
  {
    id: "aprendiz",
    label: "Aprendiz",
    description:
      "Mistura perguntas binárias e múltipla escolha. 30 segundos por questão.",
    detail: "Misto · 30s",
    color: "#7c9fbf",
    borderColor: "#1a2e3d",
    bg: "#0d1525",
  },
  {
    id: "pensador",
    label: "Pensador",
    description:
      "Mistura perguntas binárias e múltipla escolha. Nas múltiplas escolhas, algumas respostas corretas são 'Não é falácia'. 20 segundos.",
    detail: "Misto · 20s · Mesmo grupo",
    color: "#c8a040",
    borderColor: "#3d2e0d",
    bg: "#1f1800",
  },
  {
    id: "sofista",
    label: "Sofista",
    description:
      "Apenas múltipla escolha, incluindo casos em que a resposta certa é 'Não é falácia'. 15 segundos. Só para os mais treinados.",
    detail: "Múltipla escolha · 15s · Todas as falácias",
    color: "#cf5959",
    borderColor: "#3d1a1a",
    bg: "#1f0d0d",
  },
];

export default function MenuPage() {
  const navigate = useNavigate();
  const { profile } = usePlayerProfile();
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080808",
        fontFamily: "'Georgia', serif",
        color: "#e0d8cc",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 12,
              marginBottom: 8,
            }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                fontWeight: 900,
                color: "#f5efe6",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              Detector de Falácias
            </h1>
          </div>
          <p
            style={{
              margin: "0 0 24px",
              color: "#5a5048",
              fontSize: 13,
              fontStyle: "italic",
            }}
          >
            Treine seu pensamento crítico. Aprenda a reconhecer manipulação.
          </p>

          {/* Player progress */}
          <div
            style={{
              background: "#0e0e0e",
              border: "1px solid #1e1e1e",
              borderRadius: 10,
              padding: "16px 20px",
            }}
          >
            <ProgressBar xp={profile.xp} />
            <div
              style={{
                display: "flex",
                gap: 20,
                marginTop: 12,
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 10,
                color: "#444",
              }}
            >
              <span>{profile.totalRounds} rodadas</span>
              <span>
                {profile.totalQuestions > 0
                  ? `${Math.round((profile.totalCorrect / profile.totalQuestions) * 100)}% precisão`
                  : "—"}
              </span>
              <span>Maior sequência: ×{profile.bestStreak}</span>
            </div>
          </div>
        </div>

        {/* What is a fallacy — intro blurb */}
        <div
          style={{
            marginBottom: 28,
            padding: "20px 24px",
            background: "#0a0a0a",
            border: "1px solid #1a1a1a",
            borderRadius: 10,
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
              fontFamily: "'Georgia', serif",
              fontSize: 14,
              lineHeight: 1.75,
              color: "#b8afa4",
            }}
          >
            Sabe quando alguém tenta te convencer de algo, mas o argumento não
            faz sentido direito? Isso tem nome:{" "}
            <strong style={{ color: "#e0d8cc" }}>falácia</strong>. É quando a
            pessoa fala uma coisa que parece certa, mas na verdade está
            enganando você — às vezes sem querer, às vezes de propósito.
          </p>
          <p
            style={{
              margin: "0 0 16px",
              fontFamily: "'Georgia', serif",
              fontSize: 14,
              lineHeight: 1.75,
              color: "#7a706a",
            }}
          >
            Políticos, propagandas, influenciadores e até amigos usam falácias o
            tempo todo. Quem sabe identificá-las fica muito mais difícil de ser
            enganado.
          </p>
          <button
            onClick={() => setShowIntro(true)}
            style={{
              background: "transparent",
              border: "1px solid #2a2a2a",
              borderRadius: 7,
              padding: "9px 16px",
              color: "#888",
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              cursor: "pointer",
              letterSpacing: "0.1em",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#c8a040";
              e.currentTarget.style.borderColor = "#c8a040";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#888";
              e.currentTarget.style.borderColor = "#2a2a2a";
            }}
          >
            📖 VER INTRODUÇÃO ÀS FALÁCIAS
          </button>
        </div>

        {/* Mode selection */}
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 10,
            color: "#333",
            letterSpacing: "0.12em",
            marginBottom: 14,
          }}
        >
          ESCOLHA O MODO
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 32,
          }}
        >
          {MODES.map((m) => (
            <button
              key={m.id}
              onClick={() => navigate(`/quiz?mode=${m.id}`)}
              style={{
                background: m.bg,
                border: `1px solid ${m.borderColor}`,
                borderRadius: 10,
                padding: "18px 22px",
                cursor: "pointer",
                textAlign: "left",
                transition: "border-color 0.2s, background 0.2s",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = m.color + "80";
                e.currentTarget.style.background = m.bg
                  .replace("0d", "13")
                  .replace("1f", "29");
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = m.borderColor;
                e.currentTarget.style.background = m.bg;
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: m.color,
                    marginBottom: 4,
                  }}
                >
                  {m.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: 13,
                    color: "#888",
                    lineHeight: 1.5,
                  }}
                >
                  {m.description}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: 9,
                  color: "#333",
                  letterSpacing: "0.08em",
                  textAlign: "right",
                  minWidth: 120,
                  whiteSpace: "nowrap",
                }}
              >
                {m.detail}
              </div>
            </button>
          ))}
        </div>

        {/* Compendium link */}
        <button
          onClick={() => navigate("/compendio")}
          style={{
            width: "100%",
            padding: "14px",
            background: "transparent",
            border: "1px solid #1e1e1e",
            borderRadius: 8,
            color: "#444",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 11,
            cursor: "pointer",
            letterSpacing: "0.1em",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#888";
            e.currentTarget.style.borderColor = "#333";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#444";
            e.currentTarget.style.borderColor = "#1e1e1e";
          }}
        >
          VER COMPÊNDIO DE FALÁCIAS →
        </button>
      </div>

      {/* Intro modal */}
      {showIntro && (
        <div
          onClick={() => setShowIntro(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 1000,
            overflowY: "auto",
            padding: "40px 20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: 640,
              margin: "0 auto",
              background: "#0e0e0e",
              border: "1px solid #222",
              borderRadius: 14,
              padding: "36px 36px 40px",
            }}
          >
            {/* Modal header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 28,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: 9,
                    color: "#444",
                    letterSpacing: "0.14em",
                    marginBottom: 6,
                  }}
                >
                  INTRODUÇÃO
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 26,
                    fontWeight: 900,
                    color: "#f5efe6",
                    margin: 0,
                    letterSpacing: "-0.02em",
                  }}
                >
                  O que são Falácias?
                </h2>
              </div>
              <button
                onClick={() => setShowIntro(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#444",
                  fontSize: 22,
                  cursor: "pointer",
                  lineHeight: 1,
                  padding: "2px 6px",
                }}
                aria-label="Fechar"
              >
                ×
              </button>
            </div>

            {/* Section: Definition */}
            <IntroSection title="O que é uma falácia?">
              Imagina que seu amigo diz:{" "}
              <em>
                "Todo mundo está comprando esse tênis, então ele deve ser muito
                bom."
              </em>{" "}
              Parece razoável, né? Mas espera — o fato de todo mundo comprar não
              prova que é bom. Isso é uma falácia: um argumento com um{" "}
              <em>erro escondido</em> que faz ele parecer mais convincente do
              que realmente é.
              <br />
              <br />
              Às vezes a pessoa erra sem querer. Às vezes faz isso de propósito
              pra te manipular. Nos dois casos, se você não perceber, pode
              acabar acreditando em algo errado.
            </IntroSection>

            {/* Section: Why they matter */}
            <IntroSection title="Por que eu preciso saber disso?">
              <ul style={{ margin: "0 0 0 18px", padding: 0, lineHeight: 2 }}>
                <li>
                  <strong style={{ color: "#e0d8cc" }}>Políticos</strong> usam
                  falácias nos discursos pra te fazer sentir raiva ou medo em
                  vez de pensar direito.
                </li>
                <li>
                  <strong style={{ color: "#e0d8cc" }}>Notícias falsas</strong>{" "}
                  se espalham porque parecem fazer sentido — e falácias são o
                  truque por trás disso.
                </li>
                <li>
                  <strong style={{ color: "#e0d8cc" }}>Publicidade</strong> usa
                  falácias pra te convencer a comprar coisas que você não
                  precisaria.
                </li>
                <li>
                  <strong style={{ color: "#e0d8cc" }}>Pessoas próximas</strong>{" "}
                  podem usar sem querer — ou de propósito — pra ganhar
                  discussões sem ter razão.
                </li>
              </ul>
            </IntroSection>

            {/* Section: Types */}
            <IntroSection title="Principais tipos">
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {INTRO_FALLACY_TYPES.map((t) => (
                  <div
                    key={t.name}
                    style={{
                      background: "#111",
                      border: "1px solid #1e1e1e",
                      borderRadius: 8,
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#c8a040",
                        marginBottom: 4,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: "#7a706a",
                        lineHeight: 1.6,
                      }}
                    >
                      {t.description}
                    </div>
                    <div
                      style={{
                        marginTop: 6,
                        fontSize: 12,
                        fontStyle: "italic",
                        color: "#555",
                      }}
                    >
                      Ex.: "{t.example}"
                    </div>
                  </div>
                ))}
              </div>
            </IntroSection>

            {/* Section: Goal */}
            <IntroSection title="Para que serve este jogo?" last>
              Pra treinar o seu olho. É como uma academia, mas pro seu cérebro.
              Quanto mais você praticar, mais rápido vai perceber quando alguém
              está tentando te enganar — na TV, na internet, na escola, no
              trabalho, em qualquer lugar.
              <br />
              <br />O objetivo não é desconfiar de tudo. É aprender a{" "}
              <strong style={{ color: "#e0d8cc" }}>
                pensar por conta própria
              </strong>{" "}
              e não engolir qualquer argumento só porque soa bem.
            </IntroSection>

            <button
              onClick={() => setShowIntro(false)}
              style={{
                marginTop: 28,
                width: "100%",
                padding: "13px",
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: 8,
                color: "#c8a040",
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: 11,
                cursor: "pointer",
                letterSpacing: "0.1em",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#222";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1a1a1a";
              }}
            >
              ENTENDIDO — ESCOLHER MODO →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── helpers ── */

function IntroSection({ title, children, last }) {
  return (
    <div style={{ marginBottom: last ? 0 : 28 }}>
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 9,
          color: "#555",
          letterSpacing: "0.14em",
          marginBottom: 10,
        }}
      >
        {title.toUpperCase()}
      </div>
      <div
        style={{
          fontFamily: "'Georgia', serif",
          fontSize: 14,
          lineHeight: 1.75,
          color: "#9a9088",
        }}
      >
        {children}
      </div>
    </div>
  );
}

const INTRO_FALLACY_TYPES = [
  {
    name: "Ad Hominem",
    description:
      "Em vez de responder ao argumento, a pessoa ataca quem falou. É como perder uma partida de xadrez e chutar o tabuleiro — não resolve nada.",
    example: "Você não pode falar de economia, nem terminou a faculdade.",
  },
  {
    name: "Espantalho",
    description:
      "A pessoa inventa uma versão distorcida do que você disse e depois ataca essa versão inventada. É desonesto porque ela não está respondendo o que você realmente falou.",
    example:
      "Você quer cortar gastos militares? Então quer deixar o país indefeso!",
  },
  {
    name: "Falsa Dicotomia",
    description:
      "A pessoa finge que só existem duas opções — 'ou isso ou aquilo' — quando na vida real existem várias outras saídas no meio.",
    example: "Ou você está com a gente, ou está contra a gente.",
  },
  {
    name: "Apelo à Autoridade",
    description:
      "Usar o nome de alguém famoso ou importante como se isso fosse uma prova. Mas até especialistas erram — a opinião deles não substitui evidências de verdade.",
    example: "Esse jogador famoso usa o suplemento — então deve funcionar.",
  },
  {
    name: "Apelo à Emoção",
    description:
      "Em vez de dar razões reais, a pessoa tenta te fazer sentir medo, culpa ou pena pra te convencer. O sentimento serve pra esconder a falta de argumento.",
    example: "Pense nas crianças! Como você pode ser contra essa lei?",
  },
  {
    name: "Generalização Apressada",
    description:
      "Conheceu uma ou duas pessoas e agora acha que todo mundo é assim. Uma amostra pequena não serve pra tirar conclusões sobre o mundo inteiro.",
    example: "Fui mal atendido lá duas vezes. Todo mundo de lá é mal-educado.",
  },
  {
    name: "Plano Inclinado",
    description:
      "A pessoa diz que se você fizer A, vai inevitavelmente acontecer B, C e D — uma catástrofe. Mas ela não mostra por que um passo levaria necessariamente ao outro.",
    example:
      "Se permitir isso, amanhã vão liberar tudo e a sociedade vai virar um caos.",
  },
  {
    name: "Apelo à Tradição",
    description:
      "'Sempre foi assim' não significa que é certo. Muita coisa que considerávamos normal no passado depois descobrimos que estava errada.",
    example: "Não precisa mudar — do jeito que está funciona há anos.",
  },
];
