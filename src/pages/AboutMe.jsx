import '../assets/css/cssPages/aboutMe.css'

export const AboutMe = () => {

  return (
    <section id='aboutMe'>
      <div className="container">
        <h2 className='titulo-about'>Sobre mi</h2>
        <div className="info" data-aos="zoom-in">

          <p>Hola! Yo soy <span>Santiago Montironi</span>, un desarrollador web de Argentina, y tengo 23 años.
            Como fundador de <a href="https://fullwebportfolio.com/" target='blank_'>FullWeb</a>, mi emprendimiento de desarrollo web, me especializo en crear aplicaciones web personalizadas y de alto rendimiento. Estoy dispuesto a trabajar en proyectos desafiantes y en equipo. Siéntete libre de contactarme para discutir tu proyecto.
          </p>

          <a className='btn-pdf' href="/Santiago-Montironi-CV.pdf" download="Santiago-Montironi-CV.pdf">Download CV</a>
        </div>
        <div className="foto">
          <figure data-aos="zoom-in-right">
            <img src='/img/foto2.png' alt="Foto personal" />
          </figure>
        </div>
      </div>
    </section>
  )
}
