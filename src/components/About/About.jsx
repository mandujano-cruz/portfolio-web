import './About.css';
import ReactPlayer from 'react-player';

export default function About () {
  return (
    <section className='about' id='about'>
      <div className='about__container'>
        <h2 className='about__title'>Sobre mí</h2>
        <p className='about__description'>Soy ingeniero y desarrollador web en México con una sólida base en operaciones tecnológicas y resolución de problemas críticos. Tras completar un bootcamp intensivo de desarrollo Full Stack, cuento con experiencia práctica en la creación de aplicaciones robustas utilizando MongoDB, Express, React, Node.js.</p>
        <p className="about__description">Durante más de tres años me desempeñé como Analista en un Centro de Monitoreo, donde perfeccioné habilidades clave en análisis de datos, gestión de incidencias en tiempo real y atención al detalle bajo entornos de alta presión. Esta trayectoria operativa, combinada con mi formación técnica, me permite abordar el desarrollo de software con un enfoque orientado a la escalabilidad, la seguridad y la eficiencia.</p>
        <ReactPlayer className='about__video' src={"https://www.youtube.com/watch?v=6XXL4-I686A"} muted={true} width={"100%"} height={"500px"} />
      </div>
    </section>
  );
}