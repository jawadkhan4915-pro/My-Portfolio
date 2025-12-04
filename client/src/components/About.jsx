import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const highlights = [
    { icon: '🎯', text: 'Full Stack Development' },
    { icon: '📱', text: 'Mobile App Development' },
    { icon: '⚡', text: 'Performance Optimization' },
    { icon: '🎨', text: 'UI/UX Design' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="about-intro" variants={itemVariants}>
              I'm a passionate <strong>Full Stack Web Developer</strong> and <strong>Frontend Developer</strong> with a strong focus on creating fast, responsive, and user-friendly web and mobile applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </motion.p>
            <motion.p className="about-detail" variants={itemVariants}>
              With expertise in modern web technologies, I specialize in building scalable applications that deliver exceptional user experiences. My goal is to write clean, efficient code and create digital products that make a difference.
            </motion.p>
          </motion.div>
          <motion.div
            className="about-highlights"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "var(--accent-light)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-text">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
