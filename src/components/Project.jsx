import '../assets/css/cssComponents/project.css'

export const Project = ({ fotoProyecto, tituloProyecto, descripcionProyecto, urlDespliegue, urlGitHub, iconoGitHub, iconoDespliegue, nombreEnlaceDespliegue }) => {

  return (
    <div className="project">
      <img className='imagen-proyecto' src={fotoProyecto} alt={tituloProyecto} />
      <h1>{tituloProyecto}</h1>
      <p>{descripcionProyecto}</p>

      <div className="enlaces-proyecto">
        <a href={urlGitHub} target='_blank'>
          <img className='icono-enlace' src={iconoGitHub} alt={tituloProyecto} />
          <p className='nombre-enlace'>GitHub</p>
        </a>
        <a href={urlDespliegue} target='_blank'>
          <img className='icono-enlace' src={iconoDespliegue} alt={tituloProyecto} />
          <p className='nombre-enlace'>{nombreEnlaceDespliegue}</p>
        </a>
      </div>

    </div>
  )
}
