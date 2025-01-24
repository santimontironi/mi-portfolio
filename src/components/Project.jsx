import '../assets/css/project.css'

export const Project = ({ fotoProyecto, tituloProyecto, descripcionProyecto, enlacesProyecto }) => {

  return (
    <div className="project">
      <img className='imagen-proyecto' src={fotoProyecto} alt={tituloProyecto} />
      <h1>{tituloProyecto}</h1>
      <p>{descripcionProyecto}</p>
      {enlacesProyecto.map((enlace, index) => (
          <div key={index} className="enlaces-proyecto">
            <a href={enlace.urlGitHub} target='_blank'>
              <img className='icono-enlace' src={enlace.iconoGitHub} alt={tituloProyecto} />
              <p className='nombre-enlace'>{enlace.nombreEnlaceGitHub}</p>
            </a>
            <a href={enlace.urlDespliegue} target='_blank'>
              <img className='icono-enlace' src={enlace.iconoDespliegue} alt={tituloProyecto} />
              <p className='nombre-enlace'>{enlace.nombreEnlaceNetlify}</p>
            </a>
          </div>
        ))}
    </div>
  )
}
