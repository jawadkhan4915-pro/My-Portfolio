import React from 'react'
import { motion } from 'framer-motion'

export default function Education() {
  return (
    <section id="education" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <motion.div
        className="education-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p><strong style={{ color: '#fff' }}>BSc. Software Engineering</strong> — Currently studying at Khawaja Fareed University.</p>
        <p><strong style={{ color: '#fff' }}>Intermediate (2023)</strong> — Completed from Kips College RYK with Computer Science Major.</p>
        <p><strong style={{ color: '#fff' }}>Matriculation (2020)</strong> — Completed from Central Public H/S School Khanpur with Computer Science Major.</p>
      </motion.div>
    </section>
  )
}
