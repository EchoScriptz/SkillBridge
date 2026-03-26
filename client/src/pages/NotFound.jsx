import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - var(--navbar-height) - 48px)',
      textAlign: 'center',
      padding: '20px',
    }}>
      <h1 style={{
        fontSize: '6rem',
        fontWeight: 800,
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '8px',
      }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
        Page not found
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '28px', maxWidth: '400px' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button icon={Home}>Back to Home</Button>
      </Link>
    </div>
  );
}
