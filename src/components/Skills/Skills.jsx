import './Skills.css';

export default function Skills () {
  return (
    <section className='skills' id='skills'>
      <h2 className='skills__title'>Habilidades</h2>
      <div className='skills__container'>
        <div className='skills__group'>
          <h3 className='skills__type-title'>Técnicas</h3>
          <img className='skills__item' src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img className='skills__item' src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
          <img className='skills__item' src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
          <img className='skills__item' src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
          <img className='skills__item' src="https://img.shields.io/badge/ITIL_V4-002E5F?style=for-the-badge&logo=itil&logoColor=white" />
          <img className='skills__item' src="https://img.shields.io/badge/EXPRESS.JS-000000?style=for-the-badge&logo=express&logoColor=white" />
          <img className='skills__item' src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
          <img className='skills__item' src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
          <img className='skills__item' src="https://img.shields.io/badge/GIT-F05032?style=for-the-badge&logo=git&logoColor=white" />
        </div>
        <div className='skills__group'>
          <h3 className='skills__type-title'>Comunicación</h3>
          <img className='skills__item' src="https://img.shields.io/badge/COMUNICACI%C3%93N_ASERTIVA-0077B5?style=for-the-badge&logo=chatra&logoColor=white" />
          <img className='skills__item' src="https://img.shields.io/badge/AGILE_SCRUM-8DC63F?style=for-the-badge&logo=scrumalliance&logoColor=white" />
          <img className='skills__item' src="https://img.shields.io/badge/AN%C3%81LISIS_DE_DATOS-E34F26?style=for-the-badge&logo=googleanalytics&logoColor=white" />
        </div>
      </div>
    </section>
  );
}