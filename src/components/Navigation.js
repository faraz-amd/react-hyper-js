import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../hooks/useDarkMode';
import { handleHashNavigation, scrollToSection } from '../utils/scrollUtils';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsMenuOpen(false);
    }
  }, [location]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleHashLink = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    handleHashNavigation(location.pathname, sectionId);
  };

  return (
    <nav
      className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}
      role="navigation"
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          AF
        </Link>
        <button
          className={`nav-toggle ${isMenuOpen ? 'is-active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}
          role="menubar"
        >
          <a href="/#about" onClick={(e) => handleHashLink(e, '#about')}>
            About
          </a>
          <a href="/#skills" onClick={(e) => handleHashLink(e, '#skills')}>
            Skills
          </a>
          <a href="/#projects" onClick={(e) => handleHashLink(e, '#projects')}>
            Experience
          </a>
          <Link to="/components" onClick={closeMenu}>
            Components
          </Link>
          <Link to="/api-test" onClick={closeMenu}>
            API Test
          </Link>
          <Link to="/resume" className="nav-cta" onClick={closeMenu}>
            Resume
          </Link>
        </div>
        <button
          className={`dark-mode-toggle ${isDark ? 'is-dark' : ''}`}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          title="Toggle dark mode"
          onClick={toggleDarkMode}
        >
          <span className="theme-icon">🌙</span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
