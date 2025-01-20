import '../assets/css/project.css'

export const Project = ({ fotoProyecto, tituloProyecto, descripcionProyecto, enlacesProyecto }) => {
  return (
    <div className="project">
      <img src={fotoProyecto} alt={tituloProyecto} />
      <h1>{tituloProyecto}</h1>
      <p>{descripcionProyecto}</p>
      {enlacesProyecto.map((enlace, index) => (
          <div key={index} className="enlaces-proyecto">
            <a href={enlace.urlGithub} target='_blank' rel="noopener noreferrer">
              <img className='icono-enlace' src={enlace.iconoGitHub} alt={tituloProyecto} />
            </a>
            <a href={enlace.urlDespliegue}>
              <img className='icono-enlace' src={enlace.iconoDespliegue} alt={tituloProyecto} />
            </a>
          </div>
        ))}
    </div>
  )
}
