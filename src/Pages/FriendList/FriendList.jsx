import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FriendList.css';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  // Dummy data for initial friends list (replace with actual data fetch)
  useEffect(() => {
    // Simulating initial friends fetch
    setFriends([
      { id: 1, username: 'User1', avatar: 'https://via.placeholder.com/150' },
      { id: 2, username: 'User2', avatar: 'https://via.placeholder.com/150' },
      { id: 3, username: 'User3', avatar: 'https://via.placeholder.com/150' },
    ]);
  }, []);

  return (
    <div className="friend-list-container">
      <h2>Friends List</h2>
      <ul className="friends-list">
        {friends.map((friend) => (
          <li key={friend.id} className="friend-item">
            <Link to={`/profile/${friend.id}`} className="friend-link">
              <img src={friend.avatar} alt={`${friend.username}'s Avatar`} className="friend-avatar" />
              <div className="friend-username">{friend.username}</div>
            </Link>
            <button className="message-button">Message</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
