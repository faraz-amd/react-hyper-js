import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../constants/siteConfig';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href={`mailto:${siteConfig.email}`}>Email</a>
            <a
              href={siteConfig.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
            <Link to="/resume">Resume</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
