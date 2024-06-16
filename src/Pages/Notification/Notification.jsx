import React, { useState, useEffect } from 'react';
import './Notification.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Dummy data for initial notifications (replace with actual data fetch)
  useEffect(() => {
    // Simulating initial notifications fetch
    setNotifications([
      { id: 1, message: 'You have a new message from User1.' },
      { id: 2, message: 'User2 mentioned you in a post.' },
    ]);
  }, []);

  return (
    <div className="notifications-container">
      <h2>Notifications</h2>
      <ul className="notifications-list">
        {notifications.map((notification) => (
          <li key={notification.id} className="notification-item">
            <div className="notification-message">{notification.message}</div>
            <div className="notification-actions">
              <button className="action-button">View</button>
              <button className="action-button">Dismiss</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
