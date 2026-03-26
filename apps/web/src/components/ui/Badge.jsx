import './Badge.css';

/**
 * Status badge component
 * @param {string} variant - 'success' | 'warning' | 'danger' | 'info' | 'default'
 * @param {string} size - 'sm' | 'md'
 */
export default function Badge({ children, variant = 'default', size = 'md', dot = false }) {
  return (
    <span className={`badge badge-${variant} badge-${size}`}>
      {dot && <span className="badge-dot"></span>}
      {children}
    </span>
  );
}
