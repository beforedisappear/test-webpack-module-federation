import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const getPath = (path: string) => {
  if (path === "/") {
    return "/cpm";
  }

  return `/cpm${path}`;
};

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>CPM Manager</h2>
      </div>
      <div className="navbar-menu">
        <Link
          to={getPath("/")}
          className={`nav-link ${isActive("/") ? "active" : ""}`}
        >
          Панель управления
        </Link>
        <Link
          to={getPath("/campaigns")}
          className={`nav-link ${
            isActive(getPath("/campaigns")) ? "active" : ""
          }`}
        >
          Кампании
        </Link>
        <Link
          to={getPath("/analytics")}
          className={`nav-link ${
            isActive(getPath("/analytics")) ? "active" : ""
          }`}
        >
          Аналитика
        </Link>
        <Link
          to={getPath("/settings")}
          className={`nav-link ${
            isActive(getPath("/settings")) ? "active" : ""
          }`}
        >
          Настройки
        </Link>
      </div>
      <div className="navbar-user">
        <span className="user-info">CPM Администратор</span>
      </div>
    </nav>
  );
};

export default Navigation;
