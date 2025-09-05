import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import "./CPMApp.css";

const CPMApp: React.FC<{ showAlert: () => void }> = ({ showAlert }) => {
  return (
    <div className="cpm-app">
      <Navigation />
      <main className="cpm-main">
        <Routes>
          <Route path="/" element={<Dashboard showAlert={showAlert} />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
};

export default CPMApp;
