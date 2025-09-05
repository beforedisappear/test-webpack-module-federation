import React, { useState } from "react";
import "./Analytics.css";

const Analytics: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  return (
    <div className="analytics">
      <div className="analytics-header">
        <h1>CPM Аналитика</h1>
        <p>Детальная аналитика рекламных кампаний</p>
        <div className="period-selector">
          <button
            className={`period-btn ${selectedPeriod === "7d" ? "active" : ""}`}
            onClick={() => setSelectedPeriod("7d")}
          >
            7 дней
          </button>
          <button
            className={`period-btn ${selectedPeriod === "30d" ? "active" : ""}`}
            onClick={() => setSelectedPeriod("30d")}
          >
            30 дней
          </button>
          <button
            className={`period-btn ${selectedPeriod === "90d" ? "active" : ""}`}
            onClick={() => setSelectedPeriod("90d")}
          >
            90 дней
          </button>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card large">
          <h3>График расходов кампаний</h3>
          <div className="chart-placeholder">
            <div className="chart-bars">
              <div className="bar" style={{ height: "60%" }}></div>
              <div className="bar" style={{ height: "80%" }}></div>
              <div className="bar" style={{ height: "45%" }}></div>
              <div className="bar" style={{ height: "90%" }}></div>
              <div className="bar" style={{ height: "70%" }}></div>
              <div className="bar" style={{ height: "85%" }}></div>
              <div className="bar" style={{ height: "95%" }}></div>
            </div>
            <p>Расходы по кампаниям</p>
          </div>
        </div>

        <div className="analytics-card">
          <h3>CTR</h3>
          <div className="metric-value">1.2%</div>
          <div className="metric-change positive">+0.3%</div>
        </div>

        <div className="analytics-card">
          <h3>CPC</h3>
          <div className="metric-value">$2.50</div>
          <div className="metric-change positive">+$0.20</div>
        </div>

        <div className="analytics-card">
          <h3>CPM</h3>
          <div className="metric-value">$15.80</div>
          <div className="metric-change negative">-$1.20</div>
        </div>

        <div className="analytics-card">
          <h3>ROAS</h3>
          <div className="metric-value">3.2x</div>
          <div className="metric-change positive">+0.5x</div>
        </div>
      </div>

      <div className="analytics-tables">
        <div className="table-card">
          <h3>Топ кампании</h3>
          <div className="table">
            <div className="table-header">
              <div>Кампания</div>
              <div>Показы</div>
              <div>CTR</div>
            </div>
            <div className="table-row">
              <div>Summer Sale 2024</div>
              <div>125,000</div>
              <div>1.8%</div>
            </div>
            <div className="table-row">
              <div>Black Friday</div>
              <div>98,500</div>
              <div>1.5%</div>
            </div>
            <div className="table-row">
              <div>Holiday Campaign</div>
              <div>87,200</div>
              <div>1.2%</div>
            </div>
          </div>
        </div>

        <div className="table-card">
          <h3>Источники трафика</h3>
          <div className="table">
            <div className="table-header">
              <div>Источник</div>
              <div>Клики</div>
              <div>Конверсии</div>
            </div>
            <div className="table-row">
              <div>Google Ads</div>
              <div>8,500</div>
              <div>245</div>
            </div>
            <div className="table-row">
              <div>Facebook</div>
              <div>4,200</div>
              <div>128</div>
            </div>
            <div className="table-row">
              <div>Instagram</div>
              <div>2,300</div>
              <div>77</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
