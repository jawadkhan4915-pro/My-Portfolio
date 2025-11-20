import React, { useEffect, useState } from 'react'

export default function Header(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <div className="brand-wrapper">
          <div className="brand-circle">
            <span className="brand-letter">J</span>
          </div>
          <a href="#hero" className="brand" style={{ textDecoration: 'none' }}>Jawad Khan</a>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="cta">Contact</a>
        </nav>
        <button className="mobile-menu" aria-label="menu">☰</button>
      </div>
    </header>
  )
}
