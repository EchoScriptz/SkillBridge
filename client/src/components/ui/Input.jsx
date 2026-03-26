import './Input.css';

/**
 * Styled Input component with label, error, and icon support
 */
export default function Input({
  label,
  error,
  icon: Icon,
  type = 'text',
  id,
  className = '',
  ...props
}) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={`input-group ${error ? 'has-error' : ''} ${className}`}>
      {label && <label htmlFor={inputId} className="input-label">{label}</label>}
      <div className="input-wrapper">
        {Icon && (
          <span className="input-icon">
            <Icon size={18} />
          </span>
        )}
        {type === 'textarea' ? (
          <textarea
            id={inputId}
            className={`input-field textarea ${Icon ? 'has-icon' : ''}`}
            {...props}
          />
        ) : (
          <input
            type={type}
            id={inputId}
            className={`input-field ${Icon ? 'has-icon' : ''}`}
            {...props}
          />
        )}
      </div>
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}
