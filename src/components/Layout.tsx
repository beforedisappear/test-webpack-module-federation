import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Shell App</h2>
        </div>
        <div className="navbar-menu">
          <Link
            to="/dashboard"
            className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
          >
            Главная
          </Link>

          <Link
            to="/analytics"
            className={`nav-link ${isActive("/analytics") ? "active" : ""}`}
          >
            Аналитика
          </Link>

          {process.env.ENABLE_CPM && (
            <Link
              to="/dashboard2"
              className={`nav-link ${isActive("/dashboard2") ? "active" : ""}`}
            >
              CPM dashboard
            </Link>
          )}

          {process.env.ENABLE_CPM && (
            <Link
              to="/settings"
              className={`nav-link ${isActive("/settings") ? "active" : ""}`}
            >
              CPM settings
            </Link>
          )}

          {process.env.ENABLE_CPM && (
            <Link
              to="/campaigns"
              className={`nav-link ${isActive("/campaigns") ? "active" : ""}`}
            >
              CPM campaigns
            </Link>
          )}

          {process.env.ENABLE_CPM && (
            <Link
              to="/analytics2"
              className={`nav-link ${isActive("/analytics2") ? "active" : ""}`}
            >
              CPM analytics
            </Link>
          )}
        </div>
        <div className="navbar-user">
          <span className="user-info">Привет, {user?.username}!</span>
          <button onClick={handleLogout} className="logout-button">
            Выйти
          </button>
        </div>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
