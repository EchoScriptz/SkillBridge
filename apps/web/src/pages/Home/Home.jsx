import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import { ArrowRight, Zap, Shield, BarChart3, Sparkles } from 'lucide-react';
import './Home.css';

const features = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Built for speed and performance' },
  { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security built-in' },
  { icon: BarChart3, title: 'Analytics', desc: 'Real-time insights and dashboards' },
  { icon: Sparkles, title: 'AI-Powered', desc: 'Smart recommendations and automation' },
];

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-badge">🚀 Welcome to the Future</div>
        <h1 className="hero-title">
          Build Something
          <span className="hero-gradient"> Amazing</span>
        </h1>
        <p className="hero-desc">
          A powerful platform designed to help you achieve more.
          Fast, secure, and beautifully crafted.
        </p>
        <div className="hero-actions">
          {user ? (
            <Link to="/dashboard">
              <Button icon={ArrowRight} size="lg">Go to Dashboard</Button>
            </Link>
          ) : (
            <>
              <Link to="/signup">
                <Button icon={ArrowRight} size="lg">Get Started Free</Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" size="lg">Sign In</Button>
              </Link>
            </>
          )}
        </div>
      </section>

      <section className="features-section">
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="feature-icon">
                <f.icon size={24} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
