import '../assets/css/projects.css'
import imgProyectoFulboApp from '../assets/img/proyectoFulboApp.png'
import imgWebFullWeb from '../assets/img/proyectoWebFullWeb.png'
import imgQuizCapitales from '../assets/img/proyectoQuizCapitales.png'
import imgListaDeTareas from '../assets/img/proyectoListaDeTareas.png'
import imgProyectoWordle from '../assets/img/proyectoWordle.png'
import { Project } from '../components/Project'

export const Projects = () => {

  const proyectoFulboApp = [
    {
      fotoProyecto: imgProyectoFulboApp,
      tituloProyecto: "Football match organizer.",
      descripcionProyecto: "FulboApp is a practical tool for organize football matchs. Input players' names, select the quantity, and random teams are generated instantly. Ideal for yout meetings with friends and to save time before the match.",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/fulboApp',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "GitHub",
          urlDespliegue: 'https://fulboapp.netlify.app/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Netlify"
        }
      ]
    }
  ]

  const proyectoWebFullWeb = [
    {
      fotoProyecto: imgWebFullWeb,
      tituloProyecto: "My startup's website.",
      descripcionProyecto: "Official site of my business, where I offer web development services and digital solutions. Here you can find information about the services I offer and how to contact me to collaborate on future projects. My goal is to help businesses have an effective and professional online presence.",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/sitio-web-agencia',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "GitHub",
          urlDespliegue: 'https://fullwebportfolio.com/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Netlify"
        }
      ]
    }
  ]

  const quizCapitales = [
    {
      fotoProyecto: imgQuizCapitales,
      tituloProyecto: "Capital quiz.",
      descripcionProyecto: "Interactive app that puts on test your knowledge about the capitals on the world. Answers questions of multiple choice and updgrade your geography while you fun. Ideal for estudients, travelers and any person interested on learn more about our planet.",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/quiz-de-capitales',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "GitHub",
          urlDespliegue: 'https://quizcapitales.netlify.app/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Netlify"
        }
      ]
    }
  ]

  const listaDeTareas = [
    {
      fotoProyecto: imgListaDeTareas,
      tituloProyecto: 'Tasks applicaction.',
      descripcionProyecto: "Simple app for manage your diary tasks. You can add and delete taks, ass well ass check them how completed. Developed whit ReactJS, this application helps you to keeping organized and productiv in your day to day.",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/lista-tareas-react',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "GitHub",
          urlDespliegue: 'https://appdetareasbysm.netlify.app/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Netlify"
        }
      ]
    }
  ]

  const proyectoWordle = [
    {
      fotoProyecto: imgProyectoWordle,
      tituloProyecto: "Wordle game",
      descripcionProyecto: "This game it's a clon of the famous game Wordle. This game is about guess a word, when your send the word you will see clues as to some letters are correct or not. You have 5 attempts for guess the word. Try it!",
      enlacesProyecto: [
        {
          urlGitHub: 'https://github.com/santimontironi/wordle-game',
          iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
          nombreEnlaceGitHub: "GitHub",
          urlDespliegue: 'https://wordlegamebysm.netlify.app/',
          iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
          nombreEnlaceNetlify: "Netlify"
        }
      ]
    }
  ]

  return (

    <section id='projects'>
      <h1 className='tituloProjects'>Projects</h1>
      <div className="contenedor-projects">

        <div className="proyecto" data-aos="zoom-in-down">
          {proyectoFulboApp.map((proyecto, index) => (
            <Project key={index}
              fotoProyecto={proyecto.fotoProyecto}
              tituloProyecto={proyecto.tituloProyecto}
              descripcionProyecto={proyecto.descripcionProyecto}
              enlacesProyecto={proyecto.enlacesProyecto}
            />
          ))}
        </div>

        <div className="proyecto" data-aos="zoom-in-down">
          {proyectoWebFullWeb.map((proyecto, index) => (
            <Project key={index}
              fotoProyecto={proyecto.fotoProyecto}
              tituloProyecto={proyecto.tituloProyecto}
              descripcionProyecto={proyecto.descripcionProyecto}
              enlacesProyecto={proyecto.enlacesProyecto}
            />
          ))}
        </div>

        <div className="proyecto" data-aos="zoom-in-down">
          {quizCapitales.map((proyecto, index) => (
            <Project key={index}
              fotoProyecto={proyecto.fotoProyecto}
              tituloProyecto={proyecto.tituloProyecto}
              descripcionProyecto={proyecto.descripcionProyecto}
              enlacesProyecto={proyecto.enlacesProyecto}
            />
          ))}
        </div>

        <div className="proyecto" data-aos="zoom-in-down">
          {listaDeTareas.map((proyecto, index) => (
            <Project key={index}
              fotoProyecto={proyecto.fotoProyecto}
              tituloProyecto={proyecto.tituloProyecto}
              descripcionProyecto={proyecto.descripcionProyecto}
              enlacesProyecto={proyecto.enlacesProyecto}
            />
          ))}
        </div>

        <div className="proyecto" data-aos="zoom-in-down">
          {proyectoWordle.map((proyecto,index) => (
            <Project
              key={index}
              fotoProyecto={proyecto.fotoProyecto}
              tituloProyecto={proyecto.tituloProyecto}
              descripcionProyecto={proyecto.descripcionProyecto}
              enlacesProyecto={proyecto.enlacesProyecto}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
