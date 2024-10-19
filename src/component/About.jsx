import React from 'react';
import './styles.css';
import xImage from './assets/x.png'; // Path for your x.png image
import oImage from './assets/picture.jpg'; // Path for your o.png image

const About = () => {
  return (
    <main className="l-main">
      {/*===== ABOUT =====*/}
      <section className="about section" id="about">
        <h2 className="section-title">About</h2>

        <div className="about__container bd-grid">
          <div>
            <h2 className="about__subtitle">I'm Shubha</h2>
            <p className="about__text">
              I am an enthusiastic data scientist and AI aficionado with a keen interest in video editing. With a background in computer science, I enjoy exploring the intersections of technology and creativity. My passion lies in leveraging AI to solve complex problems and create compelling visual content.
            </p>
            <p className="about__text">
              In addition to my technical skills, I thrive in collaborative environments where I can contribute innovative ideas and solutions. My experience in video editing allows me to blend storytelling with technology, creating engaging content that resonates with audiences.
            </p>
            <p className="about__text">
              I am constantly learning and adapting to the ever-evolving tech landscape, and I am excited about the future possibilities in AI and data science.
            </p>

            {/* Contact Button */}
            <a href="#contact" className="button">Contact Me</a>
          </div>

          <div className="about__img">
            {/* Curly shape SVG with x.png */}
            <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
              </mask>
              <g mask="url(#mask0)">
                <rect width="100%" height="100%" fill="var(--first-color)" />
                <image className="home__blob-img" x="50" y="-60" href={xImage} alt="Shubha" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
