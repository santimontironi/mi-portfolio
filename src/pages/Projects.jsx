import '../assets/css/projects.css'
import imgProyectoFulboApp from '../assets/img/proyectoFulboApp.png'
import { Project } from '../components/Project'

export const Projects = () => {

  const proyectoFulboApp = [
    {
      fotoProyecto: imgProyectoFulboApp, tituloProyecto: "Organizador de partidos de fútbol",
      descripcionProyecto: "FulboApp es una herramienta práctica para organizar partidos de fútbol. Ingresá los nombres de los jugadores, seleccioná la cantidad, y se generan equipos aleatorios al instante. Ideal para tus encuentros con amigos y para ahorrar tiempo al armar los equipos.",
      enlacesProyecto: [
        { urlGitHub: 'https://github.com/santimontironi/fulboApp', 
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff", 
        nombreEnlaceGitHub: "Ver en GitHub",
        urlDespliegue: 'https://fulboapp.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceNetlify: "Ver en Netlify" }
      ]
    }
  ]

  return (

    <section id='projects'>
      <h1 className='tituloProjects'>Projects</h1>
      <div className="contenedor-projects">
        {proyectoFulboApp.map((proyecto,index) => (
          <Project key={index} fotoProyecto={proyecto.fotoProyecto} tituloProyecto={proyecto.tituloProyecto} descripcionProyecto={proyecto.descripcionProyecto} enlacesProyecto={proyecto.enlacesProyecto}/>
        ))}
      </div>
    </section>
  )
}
