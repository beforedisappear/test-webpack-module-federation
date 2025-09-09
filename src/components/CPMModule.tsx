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
              <p>Загрузка...</p>
            </div>
          }
        >
          <div className="remote-module-wrapper">
            <RemoteCPM showAlert={showAlert} />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default CPMModule;
