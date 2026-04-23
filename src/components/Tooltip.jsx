import { useState, useCallback } from "react";

export default function Tooltip({ children, content }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
  }, []);

  if (!content) return children;

  return (
    <span
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {children}
      {visible && (
        <div
          style={{
            position: "fixed",
            left: pos.x + 14,
            top: pos.y + 14,
            zIndex: 9999,
            maxWidth: 280,
            padding: "9px 13px",
            background: "#131313",
            border: "1px solid #2a2a2a",
            borderRadius: 5,
            boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
            pointerEvents: "none",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 12,
              color: "#b0a898",
              lineHeight: 1.65,
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
            }}
          >
            {content}
          </p>
        </div>
      )}
    </span>
  );
}
