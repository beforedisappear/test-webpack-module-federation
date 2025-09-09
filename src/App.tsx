import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import GlobalLayout from "./layouts/GlobalLayout";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import CPMModule from "./components/CPMModule";
import NotFoundPage from "./pages/NotFoundPage";
import Loader from "./components/Loader";

const RemoteLayout = lazy(() =>
  import("cpm/CPMApp").then((module) => ({
    default: module.GlobalLayout,
  }))
);

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const showAlert = () => {
    alert("ALERT FROM SHELL APP");
  };

  return (
    <Suspense fallback={<Loader />}>
      <GlobalLayout>
        <RemoteLayout>
          <Routes>
            <Route
              path="/dashboard"
              element={<Dashboard showAlert={showAlert} />}
            />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route
              path="*"
              element={
                process.env.ENABLE_CPM ? (
                  <CPMModule showAlert={showAlert} />
                ) : (
                  <NotFoundPage />
                )
              }
            />
          </Routes>
        </RemoteLayout>
      </GlobalLayout>
    </Suspense>
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
