import '../assets/css/projects.css'
import imgProyectoFulboApp from '../assets/img/proyectoFulboApp.png'
import { ProjectCard } from '../components/ProjectCard'

export const Projects = () => {

  const proyectoFulboApp = [
    {
      fotoProyecto: imgProyectoFulboApp, tituloProyecto: "Generador de equipos de fútbol",
      descripcionProyecto: "En esta aplicación se generan dos equipos aleatorios con los nombres de los jugadores ingresados en el formulario, los dos equipos varían dependiendo de la cantidad de jugadores que jueguen.",
      enlacesProyecto: [
        {url: 'https://github.com/santimontironi/fulboApp', icono: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff"}
      ]
    }
  ]

  return (

    <section id='projects'>
      <h1 className='tituloProjects'>Projects</h1>
      <div className="contenedor-projects">
        <ProjectCard objectProject={proyectoFulboApp}/>
      </div>
    </section>
  )
}
