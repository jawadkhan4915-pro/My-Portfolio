import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const highlights = [
    { icon: '🎯', text: 'Full Stack Development' },
    { icon: '📱', text: 'Mobile App Development' },
    { icon: '⚡', text: 'Performance Optimization' },
    { icon: '🎨', text: 'UI/UX Design' }
  ]

  return (
    <section id="about" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About me
      </motion.h2>
      <div className="about-wrapper">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="about-intro">
            I'm a passionate <strong>Full Stack Web Developer</strong> and <strong>Frontend Developer</strong> with a strong focus on creating fast, responsive, and user-friendly web and mobile applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p className="about-detail">
            With expertise in modern web technologies, I specialize in building scalable applications that deliver exceptional user experiences. My goal is to write clean, efficient code and create digital products that make a difference.
          </p>
        </motion.div>
        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="highlight-icon">{item.icon}</span>
              <span className="highlight-text">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
