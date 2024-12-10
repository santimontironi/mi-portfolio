import '../assets/css/nav.css'

export const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <a href="#inicio">SantiDev</a>
      </div>
      <ul>
        <li><a className='hvr-bounce-to-bottom' href="#inicio">Home</a></li>
        <li><a className='hvr-bounce-to-bottom' href="#aboutMe">About me</a></li>
        <li><a className='hvr-bounce-to-bottom' href="#servicios">My services</a></li>
        <li><a className='hvr-bounce-to-bottom' href="#habilidades">Skills</a></li>
        <li><a className='hvr-bounce-to-bottom' href="#proyectos">Projects</a></li>
        <li><a className='hvr-bounce-to-bottom' href="#contacto">Contact</a></li>
      </ul>
    </nav>
  )
}
