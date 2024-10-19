
import React from 'react';

const Resume = () => {
    return (
        <div className="resume">
            <h1 className="resume__title">Shubha Raj Karki</h1>
            <p className="resume__contact">+977 9849630999 · karkishubha985@gmail.com</p>
            <p className="resume__location">Balkot-3, Suryabinayak, Bhaktapur, Nepal</p>
            
            <h2 className="resume__section-title">Summary</h2>
            <p className="resume__text">
                I am a motivated student currently in my first year. I have a strong foundation in data manipulation, statistical analysis, and programming, with hands-on experience in Python and SQL. My skills include data literacy, data generation and collection, and analytical thinking. Adept at leveraging technical skills and analytical prowess to deliver high-quality, data-driven solutions. Seeking to combine my passion for coding and data analysis in a dynamic role as a Data Scientist and Data Analyst.
            </p>

            <h2 className="resume__section-title">Skills</h2>
            <ul className="resume__skills">
                <li>Data Collection</li>
                <li>Data Manipulation</li>
                <li>Data Visualization</li>
                <li>Report Writing and Presenting</li>
                <li>Critical Thinking Skills</li>
                <li>Excellent Communication Skills</li>
                <li>Strong Interpersonal Skills</li>
                <li>Proactive and Self-Motivated</li>
                <li>Exceptional Organisational Skills</li>
            </ul>

            <h2 className="resume__section-title">Projects</h2>
            <ul className="resume__projects">
                <li>Researched and analyzed multiple datasets to create predictive and diagnosis models using Scikit-learn, pandas, NumPy, and Matplotlib.</li>
                <li>Developed a hospital management system using Python for managing patient and doctor records.</li>
                <li>Collaborated on a group project to create a fully functional Venue Booking website using Django, JavaScript, HTML, SQL, and Bootstrap.</li>
                <li>Designed a Google Sheets program for visualizing employee work summaries and profits for the CEO.</li>
                <li>Created a fully responsive Harry Potter website using only HTML and CSS.</li>
            </ul>

            <h2 className="resume__section-title">Certifications</h2>
            <p className="resume__text">
                - Data Science with Python<br />
                - Data Visualization<br />
                - Enterprise Design Thinking Practitioner<br />
                - Machine Learning Algorithms<br />
                - Responsive Web Design
            </p>

            <h2 className="resume__section-title">Education</h2>
            <p className="resume__text">
                Currently in my 2nd Semester at Sunway College (2023-2027), GPA: 3.84<br />
                +2 (Science Major) (2021-2023) at D.A.V, Lalitpur
            </p>

            <h2 className="resume__section-title">Connections</h2>
            <p className="resume__text">
                LinkedIn: <a href="https://www.linkedin.com/in/shubharajkarki" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a><br />
                GitHub: <a href="https://github.com/karkishubha" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </p>

            <p className="resume__disclaimer">
                “I hereby declare that all the details mentioned in this CV are correct, and if any misinformation is found, I shall bear the legal punishment.”
            </p>

            <a href="/path/to/your/resume.pdf" download className="resume__download-button">Download Resume</a>
        </div>
    );
};

export default Resume;
