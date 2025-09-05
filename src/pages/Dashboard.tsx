import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC<{ showAlert: () => void }> = ({ showAlert }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Главная панель</h1>
        <p>Добро пожаловать в основное приложение Shell</p>
      </div>

      <button className="dashboard-button" onClick={showAlert}>
        Show Alert
      </button>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Статистика</h3>
          <p>Общая статистика системы</p>
          <div className="card-value">1,234</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">👥</div>
          <h3>Пользователи</h3>
          <p>Активные пользователи</p>
          <div className="card-value">567</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">💰</div>
          <h3>Доходы</h3>
          <p>Общий доход за месяц</p>
          <div className="card-value">$12,345</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">⚡</div>
          <h3>Производительность</h3>
          <p>Скорость загрузки</p>
          <div className="card-value">98.5%</div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Последние действия</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">✅</div>
            <div className="activity-content">
              <p>Пользователь admin вошел в систему</p>
              <span className="activity-time">2 минуты назад</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📈</div>
            <div className="activity-content">
              <p>Обновлена статистика продаж</p>
              <span className="activity-time">15 минут назад</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">🔧</div>
            <div className="activity-content">
              <p>Выполнено техническое обслуживание</p>
              <span className="activity-time">1 час назад</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
