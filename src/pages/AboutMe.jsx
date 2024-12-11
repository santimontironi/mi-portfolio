import '../assets/css/aboutMe.css'
import miFoto from '../assets/img/foto2.png'

export const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <div className="container">
        <div className="foto">
          <img src={miFoto} alt="" />
        </div>
        <div className="info">
          <h2>About Me</h2>
          <p>Hi! I am Santiago Montironi, from Argentina, and I am 22 years old. As a developer passionate about technology, I have a web development startup called FullWeb, focused on creating high-perfomance and customized web applicactions.</p>
          <p>My projects range from client management systems to interactive e-commerce plataforms, where I prorize optimization and clean code to ensure an excellent user experience.</p>
          <p>I enjoy exploring new technologies and stay updated in tendences, always in search to improve and learn more with each project.</p>
          <p>I am open to collaborating and learning together.</p>
        </div>
      </div>
    </section>
  )
}
