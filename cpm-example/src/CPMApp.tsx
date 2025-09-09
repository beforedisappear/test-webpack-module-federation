import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFoundPage from "./pages/NotFoundPage";
import "./CPMApp.css";
import { CPMProvider } from "./context/CPMContext";
import { ThemeProvider } from "./context/ThemeContext";

const CPMApp: React.FC<{ showAlert: () => void }> = ({ showAlert }) => {
  return (
    <CPMProvider>
      <ThemeProvider>
        <Routes>
          <Route
            path="/dashboard2"
            element={<Dashboard showAlert={showAlert} />}
          />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/analytics2" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
    </CPMProvider>
  );
};

export default CPMApp;
