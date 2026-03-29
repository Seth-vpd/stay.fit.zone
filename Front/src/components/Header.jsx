import { useState, useEffect } from 'react';
import { navigation } from '../data/content';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">
              <span className="logo-f">F</span>
              <span className="logo-z">Z</span>
            </div>
            <span className="logo-text">FITZONE</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="header-actions">
            <button className="btn-text">Sign In</button>
            <button className="btn btn-primary">Join Now</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="nav-mobile">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="mobile-auth-buttons">
              <button className="btn-text">Sign In</button>
              <button className="btn btn-primary">Join Now</button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
