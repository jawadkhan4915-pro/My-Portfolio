import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please make sure the server is running.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Let's Have a Talk
      </motion.h2>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            name="name"
            placeholder="Your name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            name="email"
            placeholder="Your email" 
            type="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Message" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          <button className="btn" type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: jawad.khan4915@gmail.com</p>
          <p>Phone: +92 3044707155</p>
        </div>
      </div>
    </section>
  )
}
