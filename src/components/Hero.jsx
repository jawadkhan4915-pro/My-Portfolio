import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <motion.div className="hero-left" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <p className="subtitle">Website & Mobile Application Developer</p>
          <h1>Hi — I’m <span className="name">Jawad Khan</span></h1>
          <p className="lead">I’m a Full Stack Web Developer and Frontend Developer. I love building fast and responsive web and mobile apps.</p>
          <div className="hero-actions">
            <a className="btn" href="#contact">Let’s Talk</a>
            <a className="link" href="#projects">See my work</a>
          </div>
        </motion.div>
        <motion.div 
          className="hero-right" 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6 }}
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
    </section>
  )
}
