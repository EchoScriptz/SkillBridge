import './Loader.css';

/**
 * Loader component - spinner or skeleton
 * @param {string} type - 'spinner' | 'skeleton'
 * @param {string} size - 'sm' | 'md' | 'lg'
 */
export function Spinner({ size = 'md', className = '' }) {
  return (
    <div className={`spinner spinner-${size} ${className}`}>
      <div className="spinner-ring"></div>
    </div>
  );
}

export function Skeleton({ width = '100%', height = '20px', borderRadius = '8px', className = '' }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{ width, height, borderRadius }}
    />
  );
}

export function PageLoader() {
  return (
    <div className="page-loader">
      <Spinner size="lg" />
      <p>Loading...</p>
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="card-skeleton">
      <Skeleton height="140px" borderRadius="12px" />
      <Skeleton width="60%" height="16px" />
      <Skeleton width="80%" height="14px" />
      <Skeleton width="40%" height="14px" />
    </div>
  );
}
