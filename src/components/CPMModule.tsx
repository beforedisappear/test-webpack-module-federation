import React, { Suspense, lazy } from "react";
import "./CPMModule.css";

// Ленивая загрузка remote модуля
const RemoteCPM = lazy(() => import("cpm/CPMApp"));

const CPMModule: React.FC<{ showAlert: () => void }> = ({ showAlert }) => {
  return (
    <div className="cpm-module">
      <div className="cpm-content">
        <Suspense
          fallback={
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p>Загрузка CPM модуля...</p>
            </div>
          }
        >
          <div className="remote-module-wrapper">
            <RemoteCPM showAlert={showAlert} />
          </div>
        </Suspense>
      </div>

      <div className="cpm-info">
        <h3>Информация о модуле</h3>
        <div className="info-grid">
          <div className="info-item">
            <strong>Тип:</strong> Remote Module
          </div>
          <div className="info-item">
            <strong>URL:</strong> http://localhost:3001/remoteEntry.js
          </div>
          <div className="info-item">
            <strong>Статус:</strong>{" "}
            <span className="status-active">Активен</span>
          </div>
          <div className="info-item">
            <strong>Версия:</strong> 1.0.0
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPMModule;
