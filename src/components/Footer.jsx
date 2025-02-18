import '../assets/css/cssComponents/footer.css'

export const Footer = () => {
  return (
    <footer>
        <div className="contenido-footer">
            <div className="miInfo">
                <h1>Santiago <span>Montironi</span></h1>
                <img className='logoBlanco' src="/src/assets/img/logo3.png" alt="" />
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
                <h1>Quick links</h1>
                <ul>
                    <li><a href="#home" className="nav-link hvr-bounce-to-bottom">Home</a></li>
                    <li><a href="#aboutme" className="nav-link hvr-bounce-to-bottom">About me</a></li>
                    <li><a href="#services" className="nav-link hvr-bounce-to-bottom">Services</a></li>
                    <li><a href="#projects" className="nav-link hvr-bounce-to-bottom">Projects</a></li>
                    <li><a href="#contact" className="nav-link hvr-bounce-to-bottom">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="txt-copyright">
            <p>Sitio web desarrollado por <a href="https://github.com/santimontironi">Santiago Montironi</a></p>
        </div>
    </footer>
  )
}
