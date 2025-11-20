import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/skills.js'

export default function Skills(){
  const skillCategories = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React.js'],
    'Backend': ['node.js', 'express.js'],
    'Database': ['MongoDB'],
    'Mobile': ['flutter', 'Dart']
  }

  return (
    <section id="skills" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills & Technologies
      </motion.h2>
      <div className="skills-container">
        {Object.entries(skillCategories).map(([category, categorySkills], catIndex) => (
          <motion.div
            key={category}
            className="skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
          >
            <h3 className="category-title">{category}</h3>
            <div className="skills-list">
              {categorySkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="skill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + catIndex * 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
