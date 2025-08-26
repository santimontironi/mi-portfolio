import '../assets/css/cssPages/aboutMe.css'

export const AboutMe = () => {

  return (
    <section id='aboutMe'>
      <div className="container">
        <h2 className='titulo-about'>About Me</h2>
        <div className="info" data-aos="zoom-in">

          <p>Hi! I am <span>Santiago Montironi</span>, a web developer from Argentina, and I am 23 years old.
            As the founder of <a href="https://fullwebportfolio.com/" target='blank_'>FullWeb</a> , a web development startup, I specialize in creating high-performance and customized web applications. I am open to collaboration and learning together. Feel free to reach out!
          </p>

          <a className='btn-pdf' href="/Santiago-Montironi-CV.pdf" download="Santiago-Montironi-CV.pdf">Download CV</a>
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
