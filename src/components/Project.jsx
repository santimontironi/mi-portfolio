import '../assets/css/cssComponents/project.css'

export const Project = ({ fotoProyecto, tituloProyecto, descripcionProyecto, urlDespliegue, urlGitHub, iconoGitHub, iconoDespliegue, nombreEnlaceDespliegue, demo, videoDemo, showDemo }) => {

  return (
    <div className="project">
      <div className="project-content">
        <div className="imagen-proyecto-wrapper">
          <img className='imagen-proyecto' src={fotoProyecto} alt={tituloProyecto} />
        </div>

        <h1>{tituloProyecto}</h1>
        <p>{descripcionProyecto}</p>

        <div className="project-divider"></div>

        <div className="enlaces-proyecto">
          <a href={urlGitHub} target='_blank' rel="noopener noreferrer">
            <img className='icono-enlace' src={iconoGitHub} alt="GitHub" />
            <p className='nombre-enlace'>GitHub</p>
          </a>
          <a href={urlDespliegue} target='_blank' rel="noopener noreferrer">
            <img className='icono-enlace' src={iconoDespliegue} alt={nombreEnlaceDespliegue} />
            <p className='nombre-enlace'>{nombreEnlaceDespliegue}</p>
          </a>
        </div>

        {demo && (
          <>
            <button className='btn-videoDemo' onClick={() => showDemo(videoDemo)}>
              Ver demo
            </button>

            <button className='btn-videoDemo-mobile'>
              <a href={videoDemo} target='_blank' rel="noopener noreferrer">Ver demo</a>
            </button>
          </>
        )}
      </div>
    </div>
  )
}