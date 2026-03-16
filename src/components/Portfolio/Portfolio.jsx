import Card from "../Card/Card";

export default function Portfolio () {
    return (
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio__title'>Portafolio</h2>
      <div className='portfolio__container'>
        <Card/>
        {/* <div className='card'>
          <h3 className='card__title'>Nombre del proyecto</h3>
          <div className='card__detail'>
            <img className='card__image' src="" alt="" />
            <div className='card__buttons'>
              <a href="#" target='_blank' className='card__button card__button_code'>Ver código</a>
            </div>
          </div>
          <div className='card__footer'>
            <p className='card__description'>Descripción del proyecto</p>
            <div className='card__tags'>
              <span className='card__tag-item' style={{backgroundColor: getBlueByTag("react")}}>react</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}