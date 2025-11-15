import '../assets/css/cssPages/projects.css'
import { getProjects } from '../services/getAllProjects'
import { Project } from '../components/Project'
import { useContext, useState } from 'react'
import { LanguageContext } from '../context/languageContext'

export const Projects = () => {

  const { language } = useContext(LanguageContext)

  const [videoSelected, setVideoSelected] = useState(null)

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
              demo={project.demo}
              videoDemo={project.urlVideoDemo}
              showDemo={(videoURL) => setVideoSelected(videoURL)}
            />
          </div>
        ))}

        {videoSelected && (
          <div className='videoDemo-container'>
            <div className="videoDemo-container-content">
              <button className='videoDemo-container-content-close' onClick={() => setVideoSelected(null)}>
                <i className="bi bi-x-lg"></i>
              </button>
              <video src={videoSelected} controls></video>
            </div>
          </div>
        )}

        <span className='msg-more-projects'> {language === 'es' ? 'Próximamente mas proyectos...' : 'Coming soon more projects...'} </span>

      </div>
    </section>
  )
}
