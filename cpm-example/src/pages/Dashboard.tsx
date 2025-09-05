import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC<{ showAlert: () => void }> = ({ showAlert }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>CPM Панель управления</h1>
        <p>Добро пожаловать в систему управления рекламными кампаниями</p>
      </div>

      <button className="dashboard-button" onClick={showAlert}>
        Show Alert
      </button>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">🎯</div>
          <h3>Активные кампании</h3>
          <p>Кампании в работе</p>
          <div className="card-value">8</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">💰</div>
          <h3>Общий бюджет</h3>
          <p>Бюджет всех кампаний</p>
          <div className="card-value">$45,200</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Потрачено</h3>
          <p>Потраченные средства</p>
          <div className="card-value">$32,100</div>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📈</div>
          <h3>ROI</h3>
          <p>Возврат инвестиций</p>
          <div className="card-value">12.5%</div>
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Последние кампании</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">✅</div>
            <div className="activity-content">
              <p>Кампания "Summer Sale 2024" запущена</p>
              <span className="activity-time">2 часа назад</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📈</div>
            <div className="activity-content">
              <p>Кампания "Black Friday" достигла 85% бюджета</p>
              <span className="activity-time">4 часа назад</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">🎯</div>
            <div className="activity-content">
              <p>Новая кампания "Holiday Campaign" создана</p>
              <span className="activity-time">1 день назад</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
