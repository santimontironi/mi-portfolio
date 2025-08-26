import { Typewriter } from 'react-simple-typewriter'
import '../assets/css/cssPages/main.css'
import { Nav } from '../components/Nav'
import miFoto from '../assets/img/foto.png'

export const Main = () => {

    return (
        <section className='contenedor'>
            <Nav />
            <main id="home">
                <div className="contenido" data-aos="zoom-in-down">
                    <img src={miFoto} alt="Foto perfil" />
                    <h1>
                        Hi, I am <span>Santiago</span>
                    </h1>
                    <span className='typeWritter'>
                        <Typewriter
                            words={[
                                "FullStack developer",
                                "Continuous learner",
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