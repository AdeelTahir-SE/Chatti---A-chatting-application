import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: 'JohnDoe',
    email: 'johndoe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    avatar: 'https://via.placeholder.com/150', // Placeholder image URL
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to update user profile details
    console.log('Form submitted with data:', userData);
  };

  const changeImage=(e)=>{
e.img.src
  }

  return (
    <div className="profile-container">
      <div className="avatar-container">
        <img src={userData.avatar} alt="User Avatar" className="avatar" onClick={changeImage} />
        <div className="username">{userData.username}</div>
      </div>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={userData.bio}
            onChange={handleInputChange}
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
