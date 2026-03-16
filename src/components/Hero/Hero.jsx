import './Hero.css';
import me from '../../images/me.jpg';

export default function Hero () {
  return(
    <section className="hero" id='hero'>
      <img className='hero__image' src={me} alt="" />
      <div className='hero__title'>
        <p className='hero__title_text'>¡Hola! Soy</p>
        <h1 className='hero__title_name'>Jesús{"\n"}Mandujano</h1>
      </div>
      <p className='hero__subtitle'>Desarrollador Web Full Stack | React · Node.js · MongoDB</p>
      <hr className='hero__line' />
      <p className='hero__description'>Especializado en crear soluciones web robustas con integración de APIs y gestión de datos.</p>
    </section>
  );
}