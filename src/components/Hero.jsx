import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
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
            <div className="subtitle">
              <span>🚀</span> Website & Mobile Application Developer
            </div>
            <h1>Hi — I’m <span className="name">Jawad Khan</span></h1>
            <p className="lead">
              I’m a Full Stack Web Developer and Frontend Developer. I craft high-performance, beautiful, and responsive web and mobile experiences.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#contact">Let’s Talk</a>
              <a className="btn btn-outline" href="#projects">View Projects</a>
            </div>
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
    </section>
  )
}
