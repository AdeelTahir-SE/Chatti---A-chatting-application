import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AboutUs from './Pages/Aboutus/Aboutus';
import FriendList from './Pages/FriendList/FriendList';
import Notifications from './Pages/Notification/Notification';
import UserProfile from './Pages/UserProfile/UserProfile';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Setting from "./Pages/Setting/Setting";
import Chatroom from "./Pages/Chatroom/Chatroom";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/friends" element={<FriendList />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Setting" element={<Setting/>} />
          <Route path="/Chatroom" element={<Chatroom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
