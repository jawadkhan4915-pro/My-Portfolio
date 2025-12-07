import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Email', icon: '📧', url: 'mailto:jawad.khan4915@gmail.com' }
  ]

  return (
    <>
      <footer className="footer">
        <div className="container">
          <motion.div
            className="footer-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-main">
              <div className="footer-brand">
                <h3>Jawad Khan</h3>
                <p>Full Stack Web & Mobile Developer</p>
              </div>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <div className="footer-nav">
                  <a href="#about">About</a>
                  <a href="#projects">Projects</a>
                  <a href="#skills">Skills</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
              <div className="footer-social">
                <h4>Connect</h4>
                <div className="social-links">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="social-icon">{link.icon}</span>
                      <span className="social-name">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} <strong>Jawad Khan</strong>. All rights reserved.</p>
              <p className="footer-tech">Built with React + Vite + Node.js</p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 20,
          visibility: showBackToTop ? 'visible' : 'hidden'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ↑
      </motion.button>
    </>
  )
}
