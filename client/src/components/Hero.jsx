import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: '🐙', label: 'GitHub', url: 'https://github.com' },
    { icon: '📧', label: 'Email', url: 'mailto:jawadkhan@example.com' },
  ];

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-inner">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span>🚀</span> Website & Mobile Application Developer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Hi — I’m <span className="name">Jawad Khan</span>
            </motion.h1>
            <motion.p
              className="lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I’m a Full Stack Web Developer and Frontend Developer. I craft high-performance, beautiful, and responsive web and mobile experiences.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a className="btn" href="#contact">Let’s Talk</a>
              <a className="btn btn-outline" href="/Jawad_Khan_CV.pdf" download>
                Download CV <span style={{ marginLeft: '8px' }}>⬇️</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="social-link-hero"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.label}
                >
                  <span>{link.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="portrait-wrapper">
              <div className="portrait-glow"></div>
              <div className="portrait-decoration portrait-decoration-1"></div>
              <div className="portrait-decoration portrait-decoration-2"></div>
              <div className="portrait-decoration portrait-decoration-3"></div>
              <div className="portrait-frame">
                <div className="portrait">
                  <div className="portrait-inner">
                    <img src="/profile2.JPG" alt="Jawad Khan" />
                    <div className="portrait-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <a href="#about">
          <span className="scroll-text">Scroll Down</span>
          <span className="scroll-arrow">↓</span>
        </a>
      </motion.div>
    </section>
  )
}
