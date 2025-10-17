import '../assets/css/cssComponents/nav.css'
import { LanguageContext } from '../context/languageContext'
import { useContext } from 'react';


export const Nav = () => {

  const{language,setLanguage} = useContext(LanguageContext);


  return (
    <nav className="navbar navbar-expand-lg" id='menu'>
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#inicio"><img src='/img/logo3.png' alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active hvr-bounce-to-bottom" aria-current="page" href="#home"> {language === 'es' ? 'Inicio' : 'Home'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#aboutMe"> {language === 'es' ? 'Sobre mi' : 'About me'} </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#services"> {language === 'es' ? 'Servicios' : 'Services'} </a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#skills">{language === 'es' ? 'Habilidades' : 'Skills'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#projects">{language === 'es' ? 'Proyectos' : 'Projects'}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#contact">{language === 'es' ? 'Contacto' : 'Contact'}</a>
            </li>
            <li className="nav-item changeLanguage-item">
              <button onClick={() => setLanguage('es')}><img src="https://img.icons8.com/?size=100&id=17967&format=png&color=000000" alt='imgLanguageES'/></button>
              <button onClick={() => setLanguage('en')}><img src="https://img.icons8.com/?size=100&id=15534&format=png&color=000000" alt='imgLanguageEN'/></button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
