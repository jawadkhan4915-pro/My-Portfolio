import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience & Training
      </motion.h2>
      <motion.div
        className="timeline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="timeline-item">
          <div className="time">2025</div>
          <div className="info">
            <h3>Website Development Course</h3>
            <p><strong>IT Center, Rahim Yar Khan</strong></p>
            <p>Completed a comprehensive 3-month course in full stack web development. Learned frontend and backend technologies, built responsive and functional websites, and gained hands-on experience with modern web development frameworks and tools.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="time">2021</div>
          <div className="info">
            <h3>Mobile App Frontend Development</h3>
            <p><strong>Smart Start Institute, Khanpur</strong></p>
            <p>Completed a practical course focused on frontend development for mobile applications. Gained expertise in modern frameworks and learned to create user-friendly mobile interfaces with responsive design principles.</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
