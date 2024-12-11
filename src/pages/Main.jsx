import { Typewriter } from 'react-simple-typewriter'
import '../assets/css/main.css'
import { Nav } from '../components/Nav'
import miFoto from '../assets/img/foto.png'


export const Main = () => {
    return (
        <div className='contenedor'>
            <Nav />
            <main id="inicio">
                <div className="contenido">
                    <img src={miFoto} alt="foto-perfil" />
                    <h1>
                        Hi, I am <span>Santiago</span>
                    </h1>
                    <span className='typeWritter'>
                        <Typewriter
                            words={[
                                "Frontend and Backend Web Developer",
                                "From imagination to Software",
                                "Effective digital solutions"
                            ]}
                            loop
                            cursor
                            typeSpeed={50}
                            deleteSpeed={40}
                            delaySpeed={700}
                        />
                    </span>
                    <a href="/Santiago-Montironi-CV.pdf" download="Santiago Montironi CV.pdf">Descargar PDF</a>
                </div>
            </main>
        </div>
    );
};