import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import './SearchBar.css';

/**
 * Search bar with debounce
 * @param {function} onSearch - callback with search value
 * @param {number} debounceMs - debounce delay
 */
export default function SearchBar({
  onSearch,
  placeholder = 'Search...',
  debounceMs = 300,
  className = '',
}) {
  const [value, setValue] = useState('');
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      onSearch?.(value);
    }, debounceMs);
    return () => clearTimeout(timerRef.current);
  }, [value, debounceMs]);

  return (
    <div className={`search-bar ${className}`}>
      <Search size={18} className="search-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      {value && (
        <button className="search-clear" onClick={() => setValue('')}>
          <X size={16} />
        </button>
      )}
    </div>
  );
}
