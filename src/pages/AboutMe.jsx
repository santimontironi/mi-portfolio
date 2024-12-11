import '../assets/css/aboutMe.css'
import miFoto from '../assets/img/foto2.png'

export const AboutMe = () => {
  return (
    <section id='aboutMe'>
      <div className="container">
        <div className="foto">
          <figure>
            <img src={miFoto} alt="Foto personal" />
          </figure>
        </div>
        <div className="info">
          <h2 className='w-25 border-bottom border-3 border-success'>About Me</h2>

          <p>Hi! I am <span>Santiago Montironi</span>, a web developer from Argentina, and I am 22 years old.</p>

          <p>As the founder of <a href="https://fullwebportfolio.com/" target='blank_'>FullWeb</a>, a web development startup, I specialize in creating high-performance and customized web applications.</p>

          <p>I enjoy exploring new technologies and staying updated on the latest trends. I’m always seeking to improve and learn with every project.</p>

          <p>I am open to collaboration and learning together. Feel free to reach out!</p>

          <a className='btn-pdf' href="/Santiago-Montironi-CV.pdf" download="Santiago Montironi CV.pdf">Download CV</a>
        </div>
      </div>
    </section>
  )
}
