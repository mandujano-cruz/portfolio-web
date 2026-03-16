import github from '../../images/github.png'
import satelite from '../../images/satelite.png'
import status from '../../images/play.png'
import whatsapp from '../../images/whatsapp.png'
import linkedin from '../../images/linkedin.png'
import cv from '../../images/download.png'
import location from '../../images/location.png'
import terminal from '../../images/terminal.png'
import email from '../../images/email.png'

export default function Contact () {
  return (
    <section className='contact' id='contact'>
      <h2 className='contact__title'>Contacto</h2>
      <div className='contact__container'>
        <a href='https://github.com/mandujano-cruz' className='contact__item contact__item_github' target='_blank'>
          <img className='contact__icon' src={github} alt="Github" />
          <span className='contact__text'>Github</span>
        </a>
        <div className='contact__item contact__item_satelite contact__item_static'><img className='contact__icon contact__icon_static' src={satelite} alt="Satelite" /></div>
        <div className='contact__item contact__item_status contact__item_static'>Disponible para proyectos</div>
        <a href='https://wa.me/524111364268' className='contact__item contact__item_whatsapp' target='_blank'><img className='contact__icon' src={whatsapp} alt="WhatsApp" /></a>
        <a href='https://www.linkedin.com/in/mandujanocruzjesus/' className='contact__item contact__item_linkedin' target='_blank'>
          <img className='contact__icon' src={linkedin} alt="" />
          <span className='contact__text'>LinkedIn</span>
        </a>
        <a href='https://drive.google.com/file/d/1xl0xtQSeq6VibL8MIAMD7BtxjHW_1Fe5/view?usp=sharing' className='contact__item contact__item_cv' target='_blank'>
          <img className='contact__icon' src={cv} alt="" />
          <span className='contact__text'>Descargar CV</span>
        </a>
        <div className='contact__item contact__item_location contact__item_static'>Disponible para reubicación</div>
        <div className='contact__item contact__item_terminal contact__item_static'><img className='contact__icon contact__icon_static' src={terminal} alt="Terminal" /></div>
        <a href='mailto:jesus.mandujano.cruz@outlook.com' className='contact__item contact__item_email' target='_blank'>
          <img className='contact__icon' src={email} alt="" />
          <span className='contact__text'>Correo electrónico</span>
        </a>
      </div>
    </section>
  );
}