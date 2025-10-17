import '../assets/css/cssPages/projects.css'
import { getProjects } from '../services/getAllProjects'
import { Project } from '../components/Project'
import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'

export const Projects = () => {

  const { language } = useContext(LanguageContext)

  const allProjects = getProjects(language)

  return (

    <section id='projects'>
      {language === 'es' ? <h1 className='tituloProjects'>Proyectos</h1> : <h1 className='tituloProjects'>Projects</h1>}
      <div className="contenedor-projects">

        {allProjects.map((project, index) => (
          <div className="proyecto" data-aos="zoom-in-down" key={index}>
            <Project
              fotoProyecto={project.fotoProyecto}
              tituloProyecto={project.tituloProyecto}
              descripcionProyecto={project.descripcionProyecto}
              urlGitHub={project.urlGitHub}
              iconoGitHub={project.iconoGitHub}
              urlDespliegue={project.urlDespliegue}
              iconoDespliegue={project.iconoDespliegue}
              nombreEnlaceDespliegue={project.nombreEnlaceDespliegue}
            />
          </div>
        ))}

        <span className='msg-more-projects'>Próximamente mas proyectos...</span>

      </div>
    </section>
  )
}
