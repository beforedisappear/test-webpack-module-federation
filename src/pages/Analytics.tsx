import React from "react";
import "./Analytics.css";

const Analytics: React.FC = () => {
  return (
    <div className="analytics">
      <div className="analytics-header">
        <h1>Аналитика</h1>
        <p>Детальная аналитика и отчеты</p>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card large">
          <h3>График продаж</h3>
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
            <p>Продажи по месяцам</p>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Конверсия</h3>
          <div className="metric-value">3.2%</div>
          <div className="metric-change positive">+0.5%</div>
        </div>

        <div className="analytics-card">
          <h3>Средний чек</h3>
          <div className="metric-value">$127</div>
          <div className="metric-change positive">+$12</div>
        </div>

        <div className="analytics-card">
          <h3>Отказы</h3>
          <div className="metric-value">2.1%</div>
          <div className="metric-change negative">-0.3%</div>
        </div>

        <div className="analytics-card">
          <h3>Время на сайте</h3>
          <div className="metric-value">4:32</div>
          <div className="metric-change positive">+0:45</div>
        </div>
      </div>

      <div className="analytics-tables">
        <div className="table-card">
          <h3>Топ страницы</h3>
          <div className="table">
            <div className="table-header">
              <div>Страница</div>
              <div>Просмотры</div>
              <div>Конверсия</div>
            </div>
            <div className="table-row">
              <div>/dashboard</div>
              <div>12,345</div>
              <div>4.2%</div>
            </div>
            <div className="table-row">
              <div>/analytics</div>
              <div>8,765</div>
              <div>3.8%</div>
            </div>
            <div className="table-row">
              <div>/cpm</div>
              <div>5,432</div>
              <div>2.9%</div>
            </div>
          </div>
        </div>

        <div className="table-card">
          <h3>Источники трафика</h3>
          <div className="table">
            <div className="table-header">
              <div>Источник</div>
              <div>Посетители</div>
              <div>Доля</div>
            </div>
            <div className="table-row">
              <div>Google</div>
              <div>45,678</div>
              <div>52%</div>
            </div>
            <div className="table-row">
              <div>Прямые переходы</div>
              <div>23,456</div>
              <div>27%</div>
            </div>
            <div className="table-row">
              <div>Социальные сети</div>
              <div>18,234</div>
              <div>21%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
