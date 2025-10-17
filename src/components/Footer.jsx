import '../assets/css/cssComponents/footer.css'
import logo from '/img/logo3.png'
import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'

export const Footer = () => {

    const { language } = useContext(LanguageContext)
    
    return (
        <footer>
            <div className="contenido-footer">
                <div className="miInfo">
                    <h1>Santiago Montironi</h1>
                    <img className='logoBlanco' src={logo} alt="" />
                    <div className="enlaces-contacto">
                        <a href="https://github.com/santimontironi">
                            <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff" alt="logo-git" />
                        </a>
                        <a href="https://www.linkedin.com/in/santiago-montironi-649652215/">
                            <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="logo-linkedIn" />
                        </a>
                    </div>
                </div>
                <div className="links-rapidos">
                    <h1>{language === 'es' ? 'Links rápidos' : 'Quick links'}</h1>
                    <ul>
                        <li><a href="#home" className="nav-link hvr-bounce-to-bottom">{language === 'es' ? 'Inicio' : 'Home'}</a></li>
                        <li><a href="#aboutme" className="nav-link hvr-bounce-to-bottom">{language === 'es' ? 'Sobre mi' : 'About me'}</a></li>
                        <li><a href="#services" className="nav-link hvr-bounce-to-bottom">{language === 'es' ? 'Servicios' : 'Services'}</a></li>
                        <li><a href="#projects" className="nav-link hvr-bounce-to-bottom">{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
                        <li><a href="#contact" className="nav-link hvr-bounce-to-bottom">{language === 'es' ? 'Contacto' : 'Contact' }</a></li>
                    </ul>
                </div>
            </div>
            <div className="txt-copyright">
                <p>{language === 'es' ? 'Desarrollado por Santiago Montironi' : 'Developed by Santiago Montironi'} <a href="https://github.com/santimontironi">Santiago Montironi</a></p>
            </div>
        </footer>
    )
}
