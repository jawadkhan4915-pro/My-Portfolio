import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
    { name: 'Email', icon: '📧', url: 'mailto:jawad.khan4915@gmail.com' }
  ]

  return (
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
                    whileHover={{ scale: 1.1, y: -3 }}
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
  )
}
