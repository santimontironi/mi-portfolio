import { Typewriter } from 'react-simple-typewriter'
import '../assets/css/cssPages/main.css'
import { Nav } from '../components/Nav'
import miFoto from '../assets/img/foto.png'
import { LanguageContext } from '../context/languageContext'
import { useContext } from 'react'

export const Main = () => {

    const { language } = useContext(LanguageContext);

    return (
        <section className='contenedor'>
            <Nav />
            <main id="home">
                <div className="contenido" data-aos="zoom-in-down">
                    <img src={miFoto} alt="Foto perfil" />
                    {language === 'es' ? <h1>Hola, soy <span>Santiago</span></h1> : <h1>Hello, I'm <span>Santiago</span></h1>}
                    <span className='typeWritter'>
                        <Typewriter
                            words={
                                language === 'es'
                                    ? [
                                        "Desarrollador Fullstack",
                                        "Aprendiz continuo",
                                        "Soluciones digitales"
                                    ]
                                    : [
                                        "Fullstack Developer",
                                        "Continuos learner",
                                        "Building digital solutions"
                                    ]
                            }
                            loop
                            cursor
                            typeSpeed={50}
                            deleteSpeed={40}
                            delaySpeed={700}
                        />
                    </span>
                </div>
            </main>
        </section>
    );
};