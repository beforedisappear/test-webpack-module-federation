import React from "react";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-icon">🔍</div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Страница не найдена</h2>
        <p className="not-found-description">
          К сожалению, запрашиваемая страница не существует или была перемещена.
        </p>
        <div className="not-found-actions">
          <button
            className="not-found-button primary"
            onClick={() => window.history.back()}
          >
            ← Назад
          </button>
          <button
            className="not-found-button secondary"
            onClick={() => (window.location.href = "/")}
          >
            🏠 На главную
          </button>
        </div>
      </div>

      <div className="not-found-suggestions">
        <h3>Возможно, вы искали:</h3>
        <div className="suggestion-links">
          <a href="/" className="suggestion-link">
            <div className="suggestion-icon">📊</div>
            <span>Главная панель</span>
          </a>
          <a href="/analytics" className="suggestion-link">
            <div className="suggestion-icon">📈</div>
            <span>Аналитика</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
