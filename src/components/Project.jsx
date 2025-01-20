import '../assets/css/project.css'

export const Project = ({ fotoProyecto, tituloProyecto, descripcionProyecto, enlacesProyecto }) => {
  return (
    <div className="project">
      <img src={fotoProyecto} alt={tituloProyecto} />
      <h1>{tituloProyecto}</h1>
      <p>{descripcionProyecto}</p>
      <div>
        {enlacesProyecto.map((enlace, index) => (
          <div key={index} className="enlaces-proyecto">
            <a href={enlace.url} target='_blank' rel="noopener noreferrer">
              <img className='icono-enlace' src={enlace.icono} alt={tituloProyecto} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
