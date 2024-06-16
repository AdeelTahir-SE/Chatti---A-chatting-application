import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FriendList.css';

const FriendList = () => {
  const [friends, setFriends] = useState([]);

  // Dummy data for initial friends list (replace with actual data fetch)
  useEffect(() => {
 fetchData();
  }, []);

  const fetchData=()=>{
    fetch('http://localhost:3001/friends')
    .then(response => response.json())
    .then(data => setFriends(data));
  }
  
  
  const sendMessage=(friend)=>{
    console.log(friend)
    let data = fetch("http://localhost:3001/friendsmsg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:(JSON.stringify(friend))
    })
}
  return (
    <div className="friend-list-container">
      <h2>Friends List</h2>
      <ul className="friends-list">
        {friends.map((friend) => (
          !(localStorage.getItem("Email")===friend.Email)&&
          <li key={friend._id} className="friend-item">
            <Link to={`/profile/${friend.id}`} className="friend-link">
              <img src={friend.Imgurl} alt={`${friend.Name}'s Avatar`} className="friend-avatar" />
              <div className="friend-username">{friend.Name}</div>
            </Link>
            <button className="message-button" onClick={()=>{sendMessage(friend)}}>Message</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default FriendList;
