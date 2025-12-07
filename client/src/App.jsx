import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import SectionDivider from './components/SectionDivider.jsx'

export default function App() {
  return (
    <div className="site-root">
      <Header />
      <main className="container">
        <Hero />
        <Stats />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
