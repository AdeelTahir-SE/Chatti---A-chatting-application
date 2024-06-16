import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import imglogo from '../assets/Chattingwebdevlogo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" className="logo-link">
         <img src={imglogo} alt="error" className='logoimg' />
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/friends" className="nav-link">
                Friends
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/notifications" className="nav-link">
                Notifications
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
