import { features } from '../data/content';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            WHY CHOOSE <span className="accent">FITZONE?</span>
          </h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            We provide everything you need to achieve your fitness goals
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
