import React, { useState } from "react";
import "./Campaigns.css";

interface Campaign {
  id: number;
  name: string;
  budget: number;
  spent: number;
  status: string;
  startDate: string;
  endDate: string;
}

const Campaigns: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    {
      id: 1,
      name: "Summer Sale 2024",
      budget: 5000,
      spent: 3200,
      status: "active",
      startDate: "2024-06-01",
      endDate: "2024-08-31",
    },
    {
      id: 2,
      name: "Black Friday",
      budget: 10000,
      spent: 8500,
      status: "active",
      startDate: "2024-11-01",
      endDate: "2024-11-30",
    },
    {
      id: 3,
      name: "Holiday Campaign",
      budget: 7500,
      spent: 7500,
      status: "completed",
      startDate: "2024-12-01",
      endDate: "2024-12-31",
    },
    {
      id: 4,
      name: "New Year Promotion",
      budget: 3000,
      spent: 0,
      status: "draft",
      startDate: "2025-01-01",
      endDate: "2025-01-31",
    },
  ]);

  const [filter, setFilter] = useState("all");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "#28a745";
      case "completed":
        return "#6c757d";
      case "paused":
        return "#ffc107";
      case "draft":
        return "#17a2b8";
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
      case "draft":
        return "Черновик";
      default:
        return "Ошибка";
    }
  };

  const filteredCampaigns = campaigns.filter((campaign) => {
    if (filter === "all") return true;
    return campaign.status === filter;
  });

  return (
    <div className="campaigns">
      <div className="campaigns-header">
        <h1>Управление кампаниями</h1>
        <p>Создание и управление рекламными кампаниями</p>
        <div className="campaigns-actions">
          <button className="btn btn-primary">Создать кампанию</button>
          <button className="btn btn-secondary">Импорт</button>
        </div>
      </div>

      <div className="campaigns-filters">
        <div className="filter-tabs">
          <button
            className={`filter-tab ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            Все ({campaigns.length})
          </button>
          <button
            className={`filter-tab ${filter === "active" ? "active" : ""}`}
            onClick={() => setFilter("active")}
          >
            Активные ({campaigns.filter((c) => c.status === "active").length})
          </button>
          <button
            className={`filter-tab ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Завершенные (
            {campaigns.filter((c) => c.status === "completed").length})
          </button>
          <button
            className={`filter-tab ${filter === "draft" ? "active" : ""}`}
            onClick={() => setFilter("draft")}
          >
            Черновики ({campaigns.filter((c) => c.status === "draft").length})
          </button>
        </div>
      </div>

      <div className="campaigns-list">
        {filteredCampaigns.map((campaign) => (
          <div key={campaign.id} className="campaign-item">
            <div className="campaign-main">
              <div className="campaign-info">
                <h3>{campaign.name}</h3>
                <div className="campaign-dates">
                  <span>
                    Начало: {new Date(campaign.startDate).toLocaleDateString()}
                  </span>
                  <span>
                    Окончание: {new Date(campaign.endDate).toLocaleDateString()}
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

            <div className="campaign-budget">
              <div className="budget-info">
                <div className="budget-item">
                  <span className="budget-label">Бюджет:</span>
                  <span className="budget-value">
                    ${campaign.budget.toLocaleString()}
                  </span>
                </div>
                <div className="budget-item">
                  <span className="budget-label">Потрачено:</span>
                  <span className="budget-value">
                    ${campaign.spent.toLocaleString()}
                  </span>
                </div>
                <div className="budget-item">
                  <span className="budget-label">Остаток:</span>
                  <span className="budget-value">
                    ${(campaign.budget - campaign.spent).toLocaleString()}
                  </span>
                </div>
              </div>
              <div className="budget-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${Math.min(
                        (campaign.spent / campaign.budget) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
                <span className="progress-text">
                  {((campaign.spent / campaign.budget) * 100).toFixed(1)}%
                </span>
              </div>
            </div>

            <div className="campaign-actions">
              <button className="btn btn-sm btn-outline">Редактировать</button>
              <button className="btn btn-sm btn-outline">Детали</button>
              <button className="btn btn-sm btn-outline">Дублировать</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
