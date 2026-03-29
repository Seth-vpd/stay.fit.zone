import { navigation, siteConfig } from '../data/content';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <span className="logo-f">F</span>
                <span className="logo-z">Z</span>
              </div>
              <span className="logo-text">FITZONE</span>
            </div>
            <p className="footer-tagline">
              Transform your life with the ultimate fitness experience
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">📘</a>
              <a href="#" className="social-link" aria-label="Instagram">📷</a>
              <a href="#" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#" className="social-link" aria-label="YouTube">📺</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">QUICK LINKS</h3>
            <ul className="footer-links">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">SERVICES</h3>
            <ul className="footer-links">
              <li><a href="#programs">Personal Training</a></li>
              <li><a href="#programs">Group Classes</a></li>
              <li><a href="#programs">Nutrition Coaching</a></li>
              <li><a href="#programs">Online Training</a></li>
              <li><a href="#pricing">Membership Plans</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3 className="footer-title">GET IN TOUCH</h3>
            <ul className="footer-contact">
              <li>📍 123 Fitness Street</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ info@fitzone.com</li>
            </ul>
            <div className="newsletter">
              <p className="newsletter-text">Subscribe to our newsletter</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email"
                  required
                />
                <button type="submit" className="btn btn-primary">→</button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} FitZone. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
