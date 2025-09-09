import React, { useState } from "react";
import "./Settings.css";
import ThemeToggle from "../components/ThemeToggle";

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: false,
    },
    campaign: {
      autoPause: true,
      budgetAlert: 80,
      dailyLimit: 1000,
    },
    integration: {
      googleAnalytics: false,
      facebookPixel: false,
      customTracking: "",
    },
    general: {
      timezone: "Europe/Moscow",
      currency: "USD",
      language: "ru",
    },
  });

  const handleNotificationChange = (key: string, value: boolean) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
  };

  const handleCampaignChange = (key: string, value: string | number) => {
    setSettings((prev) => ({
      ...prev,
      campaign: {
        ...prev.campaign,
        [key]: value,
      },
    }));
  };

  const handleIntegrationChange = (key: string, value: string | boolean) => {
    setSettings((prev) => ({
      ...prev,
      integration: {
        ...prev.integration,
        [key]: value,
      },
    }));
  };

  const handleGeneralChange = (key: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      general: {
        ...prev.general,
        [key]: value,
      },
    }));
  };

  return (
    <div className="settings">
      <div className="settings-header">
        <h1>Настройки CPM</h1>
        <p>Управление параметрами системы и уведомлениями</p>
      </div>

      <ThemeToggle />

      <div className="settings-content">
        <div className="settings-section">
          <h3>Уведомления</h3>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-info">
                <label>Email уведомления</label>
                <p>Получать уведомления на email</p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={(e) =>
                    handleNotificationChange("email", e.target.checked)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label>Push уведомления</label>
                <p>Получать push уведомления в браузере</p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={(e) =>
                    handleNotificationChange("push", e.target.checked)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label>SMS уведомления</label>
                <p>Получать уведомления по SMS</p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={(e) =>
                    handleNotificationChange("sms", e.target.checked)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Кампании</h3>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-info">
                <label>Автопауза при превышении бюджета</label>
                <p>
                  Автоматически приостанавливать кампании при превышении бюджета
                </p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.campaign.autoPause}
                  onChange={(e) =>
                    handleCampaignChange("autoPause", e.target.checked as any)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label>Уведомление при использовании бюджета (%)</label>
                <p>
                  Получать уведомление когда использовано указанный процент
                  бюджета
                </p>
              </div>
              <div className="setting-input">
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={settings.campaign.budgetAlert}
                  onChange={(e) =>
                    handleCampaignChange(
                      "budgetAlert",
                      parseInt(e.target.value)
                    )
                  }
                />
                <span>%</span>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label>Дневной лимит расходов ($)</label>
                <p>Максимальная сумма расходов в день</p>
              </div>
              <div className="setting-input">
                <span>$</span>
                <input
                  type="number"
                  min="0"
                  value={settings.campaign.dailyLimit}
                  onChange={(e) =>
                    handleCampaignChange("dailyLimit", parseInt(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Интеграции</h3>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-info">
                <label>Google Analytics</label>
                <p>Интеграция с Google Analytics для отслеживания конверсий</p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.integration.googleAnalytics}
                  onChange={(e) =>
                    handleIntegrationChange("googleAnalytics", e.target.checked)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label>Facebook Pixel</label>
                <p>Интеграция с Facebook Pixel для отслеживания событий</p>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  checked={settings.integration.facebookPixel}
                  onChange={(e) =>
                    handleIntegrationChange("facebookPixel", e.target.checked)
                  }
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label>Пользовательский код отслеживания</label>
                <p>Добавить собственный код отслеживания</p>
              </div>
              <div className="setting-input">
                <textarea
                  placeholder="Введите код отслеживания..."
                  value={settings.integration.customTracking}
                  onChange={(e) =>
                    handleIntegrationChange("customTracking", e.target.value)
                  }
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Общие настройки</h3>
          <div className="settings-group">
            <div className="setting-item">
              <div className="setting-info">
                <label>Часовой пояс</label>
                <p>Часовой пояс для отображения времени</p>
              </div>
              <div className="setting-input">
                <select
                  value={settings.general.timezone}
                  onChange={(e) =>
                    handleGeneralChange("timezone", e.target.value)
                  }
                >
                  <option value="Europe/Moscow">Москва (UTC+3)</option>
                  <option value="Europe/London">Лондон (UTC+0)</option>
                  <option value="America/New_York">Нью-Йорк (UTC-5)</option>
                  <option value="Asia/Tokyo">Токио (UTC+9)</option>
                </select>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label>Валюта</label>
                <p>Валюта для отображения сумм</p>
              </div>
              <div className="setting-input">
                <select
                  value={settings.general.currency}
                  onChange={(e) =>
                    handleGeneralChange("currency", e.target.value)
                  }
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="RUB">RUB (₽)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <label>Язык интерфейса</label>
                <p>Язык отображения интерфейса</p>
              </div>
              <div className="setting-input">
                <select
                  value={settings.general.language}
                  onChange={(e) =>
                    handleGeneralChange("language", e.target.value)
                  }
                >
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="btn btn-primary">Сохранить настройки</button>
        <button className="btn btn-secondary">Сбросить к умолчанию</button>
      </div>
    </div>
  );
};

export default Settings;
