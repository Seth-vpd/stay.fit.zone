import { siteConfig } from '../data/content';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-background"></div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">{siteConfig.tagline}</div>
          
          <h1 className="hero-title">
            PUSH YOUR <span className="accent">LIMITS</span>
          </h1>
          
          <p className="hero-subtitle">
            {siteConfig.heroSubtitle}
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">
              START FREE TRIAL →
            </button>
            <button className="btn btn-outline">
              LEARN MORE
            </button>
          </div>
          
          {/* Stats */}
          <div className="hero-stats">
            {siteConfig.stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
