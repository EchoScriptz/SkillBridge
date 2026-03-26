import './Button.css';

/**
 * Reusable Button component
 * @param {string} variant - 'primary' | 'secondary' | 'danger' | 'ghost' | 'success'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} loading - show loading spinner
 * @param {boolean} fullWidth - stretch to full width
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon: Icon,
  onClick,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="btn-spinner"></span>
      ) : (
        <>
          {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />}
          {children}
        </>
      )}
    </button>
  );
}
