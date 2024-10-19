import React from "react";
import "./styles.css";  // Assuming you're storing the CSS in Home.css

const Home = () => {
  return (
    <div className="home">
      <div className="home__intro">
        <h1 className="home__title">Hello, I'm Shubha Raj Karki</h1>
        <p className="home__subtitle">
          Welcome to my portfolio! Explore my journey as a passionate learner in data science and AI.
        </p>
      </div>

      <div className="home__cta">
        <a href="/projects" className="home__cta-button">Explore My Projects</a>
      </div>

      <footer className="home__footer">
        <p>© 2024 Shubha Raj Karki | <a href="https://www.linkedin.com/in/shubharajkarki">LinkedIn</a> | <a href="https://github.com/karkishubha">GitHub</a></p>
      </footer>
    </div>
  );
};

export default Home;
