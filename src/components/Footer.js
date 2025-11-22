import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; 2025 Ahmad Faraz. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="mailto:faraz.ahmad@live.in">Email</a>
            <a
              href="https://cloakedsec.netlify.com"
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
