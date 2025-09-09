import React from "react";

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.35)",
  backdropFilter: "blur(2px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const boxStyle: React.CSSProperties = {
  background: "white",
  borderRadius: 12,
  padding: "20px 24px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
  display: "flex",
  alignItems: "center",
  gap: 14,
  minWidth: 220,
};

const spinnerStyle: React.CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: "50%",
  border: "3px solid #e5e7eb",
  borderTopColor: "#667eea",
  animation: "spin 0.9s linear infinite",
};

const textStyle: React.CSSProperties = {
  margin: 0,
  color: "#333",
  fontSize: 15,
  fontWeight: 600,
};

const keyframes = `
@keyframes spin {
  to { transform: rotate(360deg); }
}
`;

const Loader: React.FC<{ text?: string }> = ({ text = "Загрузка..." }) => {
  return (
    <>
      <style>{keyframes}</style>
      <div
        style={overlayStyle}
        role="status"
        aria-live="polite"
        aria-busy="true"
      >
        <div style={boxStyle}>
          <div style={spinnerStyle} />
          <p style={textStyle}>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Loader;
