import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../utils/constants';
import {
  Home, LayoutDashboard, Settings, Users, FileText,
  BarChart3, ShoppingBag, ChevronLeft, ChevronRight
} from 'lucide-react';
import './Sidebar.css';

const iconMap = {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  BarChart3,
  ShoppingBag,
};

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation();

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`} id="sidebar">
      <div className="sidebar-header">
        {!collapsed && <span className="sidebar-title">Navigation</span>}
        <button className="sidebar-toggle" onClick={onToggle}>
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="sidebar-nav">
        {NAV_LINKS.map(link => {
          const Icon = iconMap[link.icon] || Home;
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? 'active' : ''}`
              }
              title={collapsed ? link.label : undefined}
            >
              <Icon size={20} />
              {!collapsed && <span>{link.label}</span>}
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/settings" className="sidebar-link" title="Settings">
          <Settings size={20} />
          {!collapsed && <span>Settings</span>}
        </NavLink>
      </div>
    </aside>
  );
}
