import './Portfolio.css';
import './Card.css';
import { useEffect, useState } from 'react';

export default function Portfolio () {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const NINE_BLUES = [
    '#0A192F',
    '#001F3F',
    '#003366',
    '#004080',
    '#0059B3',
    '#0073E6',
    '#0080FF',
    '#3399FF'
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/mandujano-cruz/repos?sort=updated')
      .then((res) => res.json())
      .then((data) => {
        const filteredRepos = data 
          .filter(repo => repo.topics.includes('portfolio-web'))
          .map(repo => ({
            ...repo,
            displayTopics: repo.topics.filter(topic => topic !== 'portfolio-web')
          }));
        setRepos(filteredRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando Github repos: ", err);
        setLoading(false);
      });
  }, []);

  const getBlueByTag = (tag) => {
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
      hash = tag.charCodeAt(i) + ((hash << 5) - hash);
    }

    const salt = 13; 
    const improvedIndex = Math.abs(hash * salt) % NINE_BLUES.length;
    
    return NINE_BLUES[improvedIndex];
  };

  if(loading) return <p className='portfolio__loading'>Cargando proyectos...</p>;

  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio__title'>Portafolio</h2>
      <div className='portfolio__container'>
        {repos.map((repo) => (
          <div className='card' key={repo.id}>
            <h3 className='card__title'>{repo.name.replace(/-/g, ' ')}</h3>
            <div className='card__detail'>
              <img className='card__image' src={`https://api.microlink.io/?url=${repo.homepage}&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=3000`} alt={repo.name} onError={(e) => e.tarjet.src = '/assets/default-project.jpg'} />
              <div className='card__buttons'>
                <a href={repo.html_url} target='_blank' className='card__button card__button_code'>Ver código</a>
                {repo.homepage && (
                  <a href={repo.homepage} target='_blank' className='card__button card__button_demo'>Ver demo</a>
                )}
              </div>
            </div>
            <div className='card__footer'>
              <p className='card__description'>{repo.description || "Descripción del proyecto"}</p>
              <div className='card__tags'>
                {repo.displayTopics.map(topic => (
                  <span className='card__tag-item' key={topic} style={{backgroundColor: getBlueByTag(topic)}}>#{topic}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
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