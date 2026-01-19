import '../assets/css/cssComponents/nav.css'
import { LanguageContext } from '../context/languageContext'
import { useContext } from 'react';


export const Nav = () => {

  const{language,setLanguage} = useContext(LanguageContext);


  return (
    <nav className="navbar navbar-expand-lg" id='menu'>
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#inicio">
          <img src='/img/logo3.png' alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                <span className="nav-text">{language === 'es' ? 'Inicio' : 'Home'}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">
                <span className="nav-text">{language === 'es' ? 'Sobre mi' : 'About me'}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                <span className="nav-text">{language === 'es' ? 'Servicios' : 'Services'}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                <span className="nav-text">{language === 'es' ? 'Habilidades' : 'Skills'}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                <span className="nav-text">{language === 'es' ? 'Proyectos' : 'Projects'}</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <span className="nav-text">{language === 'es' ? 'Contacto' : 'Contact'}</span>
              </a>
            </li>
            <li className="nav-item changeLanguage-item">
              <button 
                onClick={() => setLanguage('es')} 
                className={language === 'es' ? 'active' : ''}
                aria-label="Cambiar a Español"
              >
                <img src="https://img.icons8.com/?size=100&id=17967&format=png&color=000000" alt='ES'/>
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'active' : ''}
                aria-label="Change to English"
              >
                <img src="https://img.icons8.com/?size=100&id=15534&format=png&color=000000" alt='EN'/>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}