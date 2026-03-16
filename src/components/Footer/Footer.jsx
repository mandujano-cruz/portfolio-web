import { useState } from 'react';
import whatsapp from '../../images/whatsapp.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'

export default function Footer () {

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__logo'>{">"} Mandujano_</p>
        <nav className='footer__nav'>
          <a className="footer__nav-item" href="#about">Sobre mí</a>
          <a className="footer__nav-item" href="#portfolio">Portafolio</a>
          <a className="footer__nav-item" href="#skills">Habilidades</a>
          <a className="footer__nav-item" href="#contact">Contacto</a>
        </nav>
        <div className='footer__icons'>
          <a href="https://wa.me/524111364268">
            <img className='footer__icon' src={whatsapp} alt="whatsapp" />
          </a>
          <a href="https://www.linkedin.com/in/mandujanocruzjesus/">
            <img className='footer__icon' src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/mandujano-cruz">
            <img className='footer__icon' src={github} alt="github" />
          </a>
        </div>
        <p className='footer__copyright'>©2026. Mandujano</p>
      </div>
    </footer>
  );
}