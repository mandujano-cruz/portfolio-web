import "./Navbar.css"
import { useState, useEffect } from "react";

export default function Navbar () {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="navbar">
      <p className="navbar__logo">{">"} Mandujano_</p>
      <nav className="navbar__menu">
        <a className={`navbar__item ${activeSection === 'about' ? 'navbar__item_selected' : ''}`} href="#about">Sobre mí</a>
        <a className={`navbar__item ${activeSection === 'portfolio' ? 'navbar__item_selected' : ''}`} href="#portfolio">Portafolio</a>
        <a className={`navbar__item ${activeSection === 'skills' ? 'navbar__item_selected' : ''}`} href="#skills">Habilidades</a>
        <a className={`navbar__item ${activeSection === 'contact' ? 'navbar__item_selected' : ''}`} href="#contact">Contacto</a>
      </nav>
    </div>
  );
}