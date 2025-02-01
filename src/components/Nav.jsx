import '../assets/css/cssComponents/nav.css'
import logo from '../assets/img/logo3.png'

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg" id='menu'>
      <div className="container-fluid">
        <a className="navbar-brand logo" href="#inicio"><img src={logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active hvr-bounce-to-bottom" aria-current="page" href="#inicio">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#aboutMe">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hvr-bounce-to-bottom" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
