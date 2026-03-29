import { pricingPlans } from '../data/content';
import './Pricing.css';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="section-header text-center">
          <h2>
            MEMBERSHIP <span className="accent">PLANS</span>
          </h2>
          <div className="accent-line"></div>
          <p className="section-subtitle">
            Choose the perfect plan to match your fitness journey
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">MOST POPULAR</div>
              )}
              
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-tagline">{plan.tagline}</p>
              </div>

              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">{plan.price}</span>
                <span className="period">/month</span>
              </div>

              <div className="pricing-divider"></div>

              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'}`}>
                CHOOSE {plan.name}
              </button>
            </div>
          ))}
        </div>

        <p className="pricing-note">
          ALL PLANS INCLUDE A 7-DAY FREE TRIAL · NO CREDIT CARD REQUIRED
        </p>
      </div>
    </section>
  );
};

export default Pricing;
