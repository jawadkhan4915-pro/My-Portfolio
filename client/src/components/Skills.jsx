import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../data/skills.js'

export default function Skills() {
  const skillCategories = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'React.js'],
    'Backend': ['node.js', 'express.js'],
    'Database': ['MongoDB'],
    'Mobile': ['flutter', 'Dart']
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {Object.entries(skillCategories).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              variants={categoryVariants}
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
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      color: "var(--accent)",
                      borderColor: "var(--accent)",
                      boxShadow: "0 0 15px var(--accent-light)"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
