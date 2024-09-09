// src/pages/Contact.jsx
import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate email sending services like EmailJS or backend service here
    console.log('Form Submitted:', formData);
    alert('Thank you for your message, we will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div 
      className="container my-5" 
      style={{ 
        maxWidth: '1000px', 
        margin: '0 auto', 
        backgroundImage: 'url(/path/to/your/image.jpg)', // Background image
        backgroundSize: 'cover', // Ensure image covers the div
        backgroundPosition: 'center', // Center the image
        padding: '20px', 
        borderRadius: '8px' // Rounded corners
      }}
    >
      <h1 className="text-center" style={{ color: '#fff' }}>Contact Us</h1>
      <p className="text-center mb-4" style={{ color: '#fff' }}>We'd love to hear from you! Send us a message below.</p>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label" style={{ color: '#fff' }}>Name</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: '#fff' }}>Email</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: '#fff' }}>Message</label>
          <textarea 
            className="form-control" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows="5" 
            required 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
