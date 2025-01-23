import '../assets/css/projects.css'
import imgProyectoFulboApp from '../assets/img/proyectoFulboApp.png'
import imgWebFullWeb from '../assets/img/proyectoWebFullWeb.png'
import imgQuizCapitales from '../assets/img/proyectoQuizCapitales.png'
import imgListaDeTareas from '../assets/img/proyectoListaDeTareas.png'
import { Project } from '../components/Project'

export const Projects = () => {

  const proyectoFulboApp = [
    {
      fotoProyecto: imgProyectoFulboApp,
      tituloProyecto: "Organizador de partidos de fútbol.",
      descripcionProyecto: "FulboApp es una herramienta práctica para organizar partidos de fútbol. Ingresá los nombres de los jugadores, seleccioná la cantidad, y se generan equipos aleatorios al instante. Ideal para tus encuentros con amigos y para ahorrar tiempo al armar los equipos.",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/fulboApp',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "Ver en GitHub",
          urlDespliegue: 'https://fulboapp.netlify.app/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Ver en Netlify"
        }
      ]
    }
  ]

  const proyectoWebFullWeb = [
    {
      fotoProyecto: imgWebFullWeb,
      tituloProyecto: "Sitio web de mi emprendimiento.",
      descripcionProyecto: "Sitio oficial de mi emprendimiento, donde ofrezco servicios de desarrollo web y soluciones digitales. Aquí podrás encontrar información sobre los servicios que ofrezco y cómo contactarme para colaborar en futuros proyectos. Mi objetivo es ayudar a las empresas a tener una presencia en línea efectiva y profesional.",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/sitio-web-agencia',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "Ver en GitHub",
          urlDespliegue: 'https://fullwebportfolio.com/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Ver en Netlify"
        }
      ]
    }
  ]

  const quizCapitales = [
    {
      fotoProyecto: imgQuizCapitales,
      tituloProyecto: "Quiz de capitales.",
      descripcionProyecto: "Aplicación interactiva que pone a prueba tus conocimientos sobre las capitales del mundo. Responde preguntas de opción múltiple y mejora tu geografía mientras te diviertes. Ideal para estudiantes, viajeros y cualquier persona interesada en aprender más sobre nuestro planeta.",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/quiz-de-capitales',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "Ver en GitHub",
          urlDespliegue: 'https://quizcapitales.netlify.app/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Ver en Netlify"
        }
      ]
    }
  ]

  const listaDeTareas = [
    {
      fotoProyecto: imgListaDeTareas,
      tituloProyecto: 'Aplicación de tareas.',
      descripcionProyecto: "Aplicación sencilla para gestionar tus tareas diarias. Puedes agregar y eliminar tareas, así como marcarlas como completadas. Desarrollada con ReactJS, esta aplicación te ayuda a mantenerte organizado y productivo en tu día a día.",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/lista-tareas-react',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "Ver en GitHub",
          urlDespliegue: 'https://appdetareasbysm.netlify.app/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Ver en Netlify"
        }
      ]
    }
  ]

  return (

    <section id='projects'>
      <h1 className='tituloProjects'>Projects</h1>
      <div className="contenedor-projects">

        <div className="proyecto">
          {proyectoFulboApp.map((proyecto, index) => (
            <Project key={index} fotoProyecto={proyecto.fotoProyecto} tituloProyecto={proyecto.tituloProyecto} descripcionProyecto={proyecto.descripcionProyecto} enlacesProyecto={proyecto.enlacesProyecto} />
          ))}
        </div>

        <div className="proyecto">
          {proyectoWebFullWeb.map((proyecto, index) => (
            <Project key={index} fotoProyecto={proyecto.fotoProyecto} tituloProyecto={proyecto.tituloProyecto} descripcionProyecto={proyecto.descripcionProyecto} enlacesProyecto={proyecto.enlacesProyecto} />
          ))}
        </div>

        <div className="proyecto">
          {quizCapitales.map((proyecto, index) => (
            <Project key={index} fotoProyecto={proyecto.fotoProyecto} tituloProyecto={proyecto.tituloProyecto} descripcionProyecto={proyecto.descripcionProyecto} enlacesProyecto={proyecto.enlacesProyecto} />
          ))}
        </div>

        <div className="proyecto">
          {listaDeTareas.map((proyecto, index) => (
            <Project key={index} fotoProyecto={proyecto.fotoProyecto} tituloProyecto={proyecto.tituloProyecto} descripcionProyecto={proyecto.descripcionProyecto} enlacesProyecto={proyecto.enlacesProyecto} />
          ))}
        </div>

      </div>
    </section>
  )
}
