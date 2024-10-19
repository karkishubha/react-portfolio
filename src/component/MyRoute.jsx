import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Project from './Project';
import Blog from './Blog';
import Resume from './Resume';
import Footer from './Footer';
import Home from './Home';

const MyRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer /> {/* Include the Footer here */}
    </>
  );
}

export default MyRoute;
