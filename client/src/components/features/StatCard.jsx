import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatCard.css';

/**
 * Dashboard stat/metric card
 * @param {string} title - metric label
 * @param {string|number} value - metric value
 * @param {string} trend - '+12%' or '-5%'
 * @param {string} trendDir - 'up' | 'down'
 * @param {Component} icon - lucide icon component
 * @param {string} color - accent color
 */
export default function StatCard({
  title,
  value,
  trend,
  trendDir = 'up',
  icon: Icon,
  color = 'var(--color-primary)',
}) {
  return (
    <div className="stat-card">
      <div className="stat-header">
        <span className="stat-title">{title}</span>
        {Icon && (
          <div className="stat-icon" style={{ background: `${color}15`, color }}>
            <Icon size={20} />
          </div>
        )}
      </div>
      <div className="stat-value">{value}</div>
      {trend && (
        <div className={`stat-trend ${trendDir}`}>
          {trendDir === 'up' ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          <span>{trend}</span>
          <span className="trend-label">vs last period</span>
        </div>
      )}
    </div>
  );
}
