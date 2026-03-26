/**
 * App-wide constants
 * Update these on hackathon day!
 */

export const APP_NAME = 'HackStarter';

export const STATUS_OPTIONS = [
  { value: 'active', label: 'Active', color: '#10b981' },
  { value: 'pending', label: 'Pending', color: '#f59e0b' },
  { value: 'completed', label: 'Completed', color: '#6366f1' },
  { value: 'cancelled', label: 'Cancelled', color: '#ef4444' },
];

export const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low', color: '#10b981' },
  { value: 'medium', label: 'Medium', color: '#f59e0b' },
  { value: 'high', label: 'High', color: '#ef4444' },
];

export const CHART_COLORS = [
  '#6366f1', '#8b5cf6', '#06b6d4', '#10b981',
  '#f59e0b', '#ef4444', '#ec4899', '#14b8a6',
];

export const NAV_LINKS = [
  { path: '/', label: 'Home', icon: 'Home' },
  { path: '/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  // Add more routes on hackathon day
];

export const ITEMS_PER_PAGE = 10;
