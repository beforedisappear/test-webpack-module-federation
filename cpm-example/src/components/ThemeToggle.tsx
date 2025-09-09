import React from "react";
import { useTheme } from "../context/ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      style={{
        backgroundColor: colors.primary,
        color: colors.text,
        border: `1px solid ${colors.secondary}`,
      }}
    >
      {theme === "light" ? "🌙" : "☀️"}
      {theme === "light" ? "Темная тема" : "Светлая тема"}
    </button>
  );
};

export default ThemeToggle;
