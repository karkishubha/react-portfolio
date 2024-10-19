import React from 'react';
import './styles.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Shubha. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
