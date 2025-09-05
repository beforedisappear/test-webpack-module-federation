import React, { useState, useEffect } from "react";
import "./CPMApp.css";

const CPMApp: React.FC = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Summer Sale 2024",
      budget: 5000,
      spent: 3200,
      status: "active",
    },
    {
      id: 2,
      name: "Black Friday",
      budget: 10000,
      spent: 8500,
      status: "active",
    },
    {
      id: 3,
      name: "Holiday Campaign",
      budget: 7500,
      spent: 7500,
      status: "completed",
    },
  ]);

  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    const budget = campaigns.reduce(
      (sum, campaign) => sum + campaign.budget,
      0
    );
    const spent = campaigns.reduce((sum, campaign) => sum + campaign.spent, 0);
    setTotalBudget(budget);
    setTotalSpent(spent);
  }, [campaigns]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "#28a745";
      case "completed":
        return "#6c757d";
      case "paused":
        return "#ffc107";
      default:
        return "#dc3545";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Активна";
      case "completed":
        return "Завершена";
      case "paused":
        return "Приостановлена";
      default:
        return "Ошибка";
    }
  };

  return (
    <div className="cpm-app">
      <div className="cpm-header">
        <h2>CPM Campaign Manager</h2>
        <p>Управление рекламными кампаниями</p>
      </div>

      <div className="cpm-stats">
        <div className="stat-card">
          <div className="stat-value">${totalBudget.toLocaleString()}</div>
          <div className="stat-label">Общий бюджет</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">${totalSpent.toLocaleString()}</div>
          <div className="stat-label">Потрачено</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {((totalSpent / totalBudget) * 100).toFixed(1)}%
          </div>
          <div className="stat-label">Использовано</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">
            {campaigns.filter((c) => c.status === "active").length}
          </div>
          <div className="stat-label">Активных кампаний</div>
        </div>
      </div>

      <div className="cpm-campaigns">
        <h3>Кампании</h3>
        <div className="campaigns-list">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <div className="campaign-info">
                <h4>{campaign.name}</h4>
                <div className="campaign-budget">
                  <span>Бюджет: ${campaign.budget.toLocaleString()}</span>
                  <span>Потрачено: ${campaign.spent.toLocaleString()}</span>
                </div>
                <div className="campaign-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${(campaign.spent / campaign.budget) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span>
                    {((campaign.spent / campaign.budget) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
              <div className="campaign-status">
                <span
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(campaign.status) }}
                >
                  {getStatusText(campaign.status)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cpm-actions">
        <button className="action-button primary">Создать кампанию</button>
        <button className="action-button secondary">Экспорт данных</button>
        <button className="action-button secondary">Настройки</button>
      </div>
    </div>
  );
};

export default CPMApp;
