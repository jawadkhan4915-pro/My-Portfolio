import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects.js'

export default function Projects(){
  return (
    <section id="projects" className="section">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <motion.article
            key={p.id}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
            <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
