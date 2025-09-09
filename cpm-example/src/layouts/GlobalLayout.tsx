import { CPMProvider } from "../context/CPMContext";
import { ThemeProvider } from "../context/ThemeContext";
import { Outlet } from "react-router-dom";
import "./GlobalLayout.css";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CPMProvider>
      <ThemeProvider>
        <div className="global-layout">{children || <Outlet />}</div>
      </ThemeProvider>
    </CPMProvider>
  );
};
