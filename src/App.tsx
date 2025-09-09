import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Layout from "./components/Layout";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import NotFoundPage from "./pages/NotFoundPage";
import { useCpmRoutes } from "./hooks/useCpmRoutes";
import { module } from "./hooks/useCpmRoutes";

const CPMModuleLayout = lazy(() =>
  module.then((module) => ({ default: module.CPMAppLayout }))
);

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const cpmAppRoutes = useCpmRoutes();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      loader: async () => {
        await module;
        return null;
      },
      children: [
        {
          index: true,
          element: <Navigate to="/dashboard" replace />,
        },
        {
          path: "/dashboard",
          element: <Dashboard showAlert={() => {}} />,
        },
        {
          path: "/analytics",
          element: <Analytics />,
        },
        {
          element: <CPMModuleLayout />,
          children: cpmAppRoutes,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
