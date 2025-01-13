import '../assets/css/project.css'

export const Project = ({fotoProyecto,tituloProyecto,descripcionProyecto,iconosProyecto}) => {
  return (
    <div className="project">
      <img src={fotoProyecto} alt={tituloProyecto} />
      <h1>{tituloProyecto}</h1>
      <p>{descripcionProyecto}</p>
      <div>
        {iconosProyecto.map((icono, index) => (
          <img key={index} src={icono} alt="icono" />
        ))}
      </div>
    </div>
  )
}
