import '../assets/css/cssPages/aboutMe.css'
import { LanguageContext } from '../context/languageContext'
import { useContext } from 'react'

export const AboutMe = () => {

  const { language } = useContext(LanguageContext)

  return (
    <section id='aboutMe'>
      <div className="container">
        {language === 'es' ? <h2 className='titulo-about'>Sobre mi</h2> : <h2 className='titulo-about'>About me</h2>}

        <div className="info" data-aos="zoom-in">
          {language === 'es' ?
            <p>¡Hola! Soy <span>Santiago Montironi</span>, un desarrollador web de Argentina de 23 años.
              Como fundador de <a href="https://fullwebpag.netlify.app/" target="_blank">FullWeb</a>, mi emprendimiento de desarrollo web, me dedico a crear aplicaciones web a medida y de alto rendimiento. Me encanta trabajar en proyectos desafiantes y en equipo. No dudes en contactarme si quieres hablar sobre tu proyecto
            </p>
            :
            <p>H1! I'm <span>Santiago Montironi</span>, a web developer from Argentina, and I'm 23 years old. As founder of <a href="https://fullwebportfolio.com/" target='blank_'>FullWeb</a>, my web development startup, I specialize in create high performance and personalized applications web. I'm open to work in challenging projects and in workteam. Feel free to contact to me for discuss your project.</p>}

          {language === 'es' ?
            <a className='btn-pdf' href="/Santiago-Montironi-CV.pdf" download="Santiago-Montironi-CV.pdf">Descargar CV</a>
            :
            <a className='btn-pdf' href="/Santiago-Montironi-CV.pdf" download="Santiago-Montironi-CV.pdf">Download CV</a>}

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
