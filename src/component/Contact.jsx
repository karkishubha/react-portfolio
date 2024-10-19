import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css"; // Assuming you're storing the CSS in Contact.css

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required!");
      return;
    }

    // Simulate form submission
    toast.success("Form Submitted! Thank you for reaching out.");
    
    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="contact">
      <ToastContainer />
      <h1 className="contact__title">Get in Touch</h1>
      <p className="contact__subtitle">Feel free to reach out for any inquiries or collaborations!</p>
      
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
          />
        </div>

        <button type="submit" className="contact__submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
