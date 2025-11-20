import React from 'react'
import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '10+', label: 'Projects Completed', icon: '🚀' },
    { number: '2+', label: 'Years Experience', icon: '💼' },
    { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
    { number: '24/7', label: 'Available', icon: '⚡' }
  ]

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

