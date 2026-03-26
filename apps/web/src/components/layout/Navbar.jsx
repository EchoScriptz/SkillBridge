import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';
import { Link, useLocation } from 'react-router-dom';
import { APP_NAME } from '../../utils/constants';
import {
  Sun, Moon, Menu, Bell, LogOut, User, Search, X
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onToggleSidebar }) {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-left">
        <button className="nav-btn" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          <Menu size={20} />
        </button>
        <Link to="/" className="navbar-brand">
          <div className="brand-icon">🚀</div>
          <span className="brand-name">{APP_NAME}</span>
        </Link>
      </div>

      <div className="navbar-center">
        {showSearch ? (
          <div className="nav-search-expanded">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search anything..."
              autoFocus
              className="nav-search-input"
            />
            <button className="nav-btn-sm" onClick={() => setShowSearch(false)}>
              <X size={16} />
            </button>
          </div>
        ) : (
          <button className="nav-search-trigger" onClick={() => setShowSearch(true)}>
            <Search size={16} />
            <span>Search...</span>
            <kbd>⌘K</kbd>
          </button>
        )}
      </div>

      <div className="navbar-right">
        <button className="nav-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button className="nav-btn notification-btn" aria-label="Notifications">
          <Bell size={18} />
          <span className="notification-dot"></span>
        </button>

        {user ? (
          <div className="profile-menu">
            <button
              className="profile-trigger"
              onClick={() => setShowProfile(!showProfile)}
            >
              <div className="avatar">
                {user.name?.charAt(0)?.toUpperCase() || 'U'}
              </div>
            </button>
            {showProfile && (
              <div className="profile-dropdown">
                <div className="profile-info">
                  <div className="avatar avatar-lg">
                    {user.name?.charAt(0)?.toUpperCase() || 'U'}
                  </div>
                  <div>
                    <p className="profile-name">{user.name}</p>
                    <p className="profile-email">{user.email}</p>
                  </div>
                </div>
                <div className="profile-divider"></div>
                <Link to="/profile" className="profile-item" onClick={() => setShowProfile(false)}>
                  <User size={16} />
                  Profile
                </Link>
                <button className="profile-item danger" onClick={logout}>
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="nav-login-btn">Sign In</Link>
        )}
      </div>
    </nav>
  );
}
