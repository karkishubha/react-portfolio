import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css'; // Ensure to import your styles
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from react-icons

const MyLinks = () => {
  return (
    <div className="my-links">
      
      <div className="links-container">
      <NavLink className="link" to="/home">Home</NavLink>
        <NavLink className="link" to="/">About</NavLink>
        
        <NavLink className="link" to="/skills">Skills</NavLink>
        <NavLink className="link" to="/project">Projects</NavLink>
        <NavLink className="link" to="/blog">Blog</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
        <NavLink className="link" to="/resume">Resume</NavLink>
      </div>
      
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default MyLinks;
