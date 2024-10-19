import React from 'react';
import './styles.css'; // Ensure you have your CSS styles defined here
import { FaServer, FaVideo, FaRobot } from 'react-icons/fa'; // Import necessary icons from react-icons
import { SiPython } from 'react-icons/si'; // Import Python icon from react-icons

const Skills = () => {
  return (
    <main className="l-main">
      {/*===== SKILLS =====*/}
      <section className="skills section" id="skills">
        

        <div className="skills__container bd-grid">
          <div>
            <h2 className="skills__subtitle">Professional Skills</h2>
            <p className="skills__text">
              I am a versatile and dedicated professional with a strong foundation in various technical and creative domains. My expertise spans across multiple disciplines, ensuring a well-rounded approach to any project I undertake. Here’s a snapshot of my key skills:
            </p>

            {/* Skill Bars */}
            <div className="skills__data">
              <div className="skills__names">
                <SiPython className="skills__icon" />
                <span className="skills__name">Python</span>
              </div>
              <div className="skills__bar skills__html"></div>
              <div>
                <span className="skills__percentage">85%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <FaServer className="skills__icon" />
                <span className="skills__name">Django</span>
              </div>
              <div className="skills__bar skills__css"></div>
              <div>
                <span className="skills__percentage">70%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <FaVideo className="skills__icon" />
                <span className="skills__name">Video Editing</span>
              </div>
              <div className="skills__bar skills__js"></div>
              <div>
                <span className="skills__percentage">70%</span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__names">
                <FaRobot className="skills__icon" />
                <span className="skills__name">Machine Learning</span>
              </div>
              <div className="skills__bar skills__ux"></div>
              <div>
                <span className="skills__percentage">80%</span>
              </div>
            </div>
          </div>

          <div>
            <img src="assets/img/work3.jpg" alt="" className="skills__img" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
