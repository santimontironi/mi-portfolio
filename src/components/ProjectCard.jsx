import '../assets/css/projectCard.css'
import { Project } from './Project'

export const ProjectCard = ({objectProject}) => {
  return (
    <div className="project-card">
      {objectProject.map((project,index) => (
        <Project key={index} fotoProyecto={project.fotoProyecto} tituloProyecto={project.tituloProyecto} descripcionProyecto={project.descripcionProyecto} enlacesProyecto={project.enlacesProyecto}/>
      ))}
    </div>
  )
}
