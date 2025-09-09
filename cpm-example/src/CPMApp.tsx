import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Campaigns from "./pages/Campaigns";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFoundPage from "./pages/NotFoundPage";
import "./CPMApp.css";
import { CPMProvider } from "./context/CPMContext";
import { ThemeProvider } from "./context/ThemeContext";

export const CPMAppLayout = () => {
  return (
    <CPMProvider>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </CPMProvider>
  );
};

export const cpmAppRoutes = [
  {
    path: "/dashboard2",
    element: <Dashboard showAlert={() => {}} />,
  },
  {
    path: "/campaigns",
    element: <Campaigns />,
  },
  {
    path: "/analytics2",
    element: <Analytics />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
];

export default cpmAppRoutes;
