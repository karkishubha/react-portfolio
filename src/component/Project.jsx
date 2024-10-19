import React from 'react';
import { FaPython, FaRobot, FaLaptopCode } from 'react-icons/fa'; // Adjust imports as necessary

const Projects = () => {
  return (
    <div className="projects">
      
      <div className="projects__container">
        <div className="project__item">
          <FaRobot className="project__icon" />
          <h3 className="project__title">Water Quality Prediction</h3>
          <p className="project__description">A machine learning model for predicting water quality.</p>
          <a href="https://github.com/karkishubha/FINAL-ASSIGNMENT/blob/main/water%20quality%20prediction.ipynb" className="button">View Project</a>
        </div>

        <div className="project__item">
          <FaRobot className="project__icon" />
          <h3 className="project__title">Add Revenue Prediction</h3>
          <p className="project__description">A machine learning model for predicting revenue.</p>
          <a href="https://github.com/karkishubha/FINAL-ASSIGNMENT/blob/main/New_Ad%20project%20assignment.ipynb" className="button">View Project</a>
        </div>

        <div className="project__item">
          <FaLaptopCode className="project__icon" />
          <h3 className="project__title">Venue Booking Website</h3>
          <p className="project__description">A Django web application for booking venues.</p>
          <a href="https://github.com/Utkarsh-Khatri/bmv" className="button">View Project</a>
        </div>

        <div className="project__item">
          <FaPython className="project__icon" />
          <h3 className="project__title">Python Tutorial</h3>
          <p className="project__description">A comprehensive Python tutorial repository.</p>
          <a href="https://github.com/karkishubha/Python_900" className="button">View Project</a>
        </div>

        <div className="project__item">
          <FaPython className="project__icon" />
          <h3 className="project__title">DSA Tutorial</h3>
          <p className="project__description">Data Structures and Algorithms tutorial repository.</p>
          <a href="https://github.com/karkishubha/DSA" className="button">View Project</a>
        </div>

        <div className="project__item">
          <FaRobot className="project__icon" />
          <h3 className="project__title">Diabetes Prediction</h3>
          <p className="project__description">Machine learning model for predicting diabetes.</p>
          <a href="https://github.com/karkishubha/FINAL-ASSIGNMENT/blob/main/Diabities.ipynb" className="button">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
