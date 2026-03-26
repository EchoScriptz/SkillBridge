import './Card.css';

/**
 * Reusable Card component
 * @param {string} variant - 'default' | 'bordered' | 'elevated'
 * @param {boolean} hoverable - add hover effect
 * @param {boolean} padding - add padding (default true)
 */
export default function Card({
  children,
  title,
  subtitle,
  headerAction,
  variant = 'default',
  hoverable = false,
  padding = true,
  className = '',
  onClick,
  ...props
}) {
  return (
    <div
      className={`card card-${variant} ${hoverable ? 'card-hoverable' : ''} ${onClick ? 'card-clickable' : ''} ${className}`}
      onClick={onClick}
      {...props}
    >
      {(title || headerAction) && (
        <div className="card-header">
          <div>
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
          </div>
          {headerAction && <div className="card-action">{headerAction}</div>}
        </div>
      )}
      <div className={`card-body ${padding ? '' : 'no-padding'}`}>
        {children}
      </div>
    </div>
  );
}
