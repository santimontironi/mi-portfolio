import { Typewriter } from 'react-simple-typewriter'
import '../assets/css/main.css'
import { Nav } from '../components/Nav'
import miFoto from '../assets/img/foto.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Main = () => {

    useEffect(() => {
        Aos.init({duration:4000})
    },[])

    return (
        <section className='contenedor'>
            <Nav />
            <main id="inicio">
                <div className="contenido" data-aos="zoom-in-down">
                    <img src={miFoto} alt="Foto perfil" />
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
                </div>
            </main>
        </section>
    );
};