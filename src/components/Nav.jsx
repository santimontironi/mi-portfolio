import '../assets/css/cssComponents/nav.css'

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg" id='menu'>
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#inicio"><img src='/img/logo3.png' alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active hvr-bounce-to-bottom" aria-current="page" href="#home">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#aboutMe">Sobre mi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#services">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#skills">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#projects">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
