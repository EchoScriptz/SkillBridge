import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Toast from '../ui/Toast';

export default function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="app-layout">
      <Navbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <main className={`main-content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <div className="page-container animate-fadeIn">
          <Outlet />
        </div>
      </main>
      <Toast />
    </div>
  );
}
