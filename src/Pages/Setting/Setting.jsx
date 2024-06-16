import React from 'react';
import './Setting.css';

const Setting = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="setting-item">
        <label>Theme:</label>
        <select>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="setting-item">
        <label>Notifications:</label>
        <input type="checkbox" id="notifications" />
        <label htmlFor="notifications">Enable notifications</label>
      </div>

      <div className="setting-item">
        <label>Language:</label>
        <select>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <div className="setting-item">
        <button className="save-button">Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
