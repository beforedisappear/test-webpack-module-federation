import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouteObject,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import { useCpmRoutes } from "./hooks/useCpmRoutes";
import NotFoundPage from "./pages/NotFoundPage";

const CPMModuleLayout = lazy(() =>
  import("cpm/CPMApp").then((module) => ({ default: module.CPMAppLayout }))
);

const CPMModuleLayoutWithSuspense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CPMModuleLayout />
    </Suspense>
  );
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const routes = useCpmRoutes();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const showAlert = () => {
    alert("ALERT FROM SHELL APP");
  };

  return (
    <Layout>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard showAlert={showAlert} />}
        />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route element={<CPMModuleLayoutWithSuspense />}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
