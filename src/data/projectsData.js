import imgProyectoFulboApp from '../assets/img/proyectoFulboApp.png'
import imgWebFullWeb from '../assets/img/proyectoWebFullWeb.png'
import imgQuizCapitales from '../assets/img/proyectoQuizCapitales.png'
import imgListaDeTareas from '../assets/img/proyectoListaDeTareas.png'
import imgProyectoWordle from '../assets/img/proyectoWordle.png'
import imgProyectoCrudDjango from '../assets/img/proyectoCrudDjango.png'
import imgProyectoClonWhatsapp from '../assets/img/proyectoClonWhatsapp.png'

const projectsData = (language) => {
  if (language === 'es') {
    return [
      {
        fotoProyecto: imgProyectoFulboApp,
        tituloProyecto: "Organizador de partidos de fútbol",
        descripcionProyecto: "FulboApp es una herramienta práctica para organizar partidos de fútbol. Ingresa los nombres de los jugadores, selecciona la cantidad y los equipos se generan aleatoriamente al instante. Ideal para tus encuentros con amigos y ahorrar tiempo antes del partido.",
        urlGitHub: 'https://github.com/santimontironi/fulboApp',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://fulboapp.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgWebFullWeb,
        tituloProyecto: "Mi emprendimiento",
        descripcionProyecto: "Sitio oficial de mi negocio, donde ofrezco servicios de desarrollo web y soluciones digitales. Aquí puedes encontrar información sobre los servicios que brindo y cómo contactarme para colaborar en futuros proyectos. Mi objetivo es ayudar a los negocios a tener una presencia online efectiva y profesional.",
        urlGitHub: 'https://github.com/santimontironi/sitio-web-agencia',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://fullwebportfolio.com/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgQuizCapitales,
        tituloProyecto: "Quiz de capitales",
        descripcionProyecto: "Aplicación interactiva que pone a prueba tus conocimientos sobre las capitales del mundo. Responde preguntas de opción múltiple y mejora tu geografía mientras te diviertes. Ideal para estudiantes, viajeros y cualquier persona interesada en aprender más sobre nuestro planeta.",
        urlGitHub: 'https://github.com/santimontironi/quiz-de-capitales',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://quizcapitales.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgListaDeTareas,
        tituloProyecto: 'Aplicación de tareas',
        descripcionProyecto: "Aplicación sencilla para gestionar tus tareas diarias. Puedes agregar y eliminar tareas, así como marcarlas como completadas. Desarrollada con ReactJS, esta aplicación te ayuda a mantenerte organizado y productivo en tu día a día.",
        urlGitHub: 'https://github.com/santimontironi/lista-tareas-react',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://appdetareasbysm.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgProyectoWordle,
        tituloProyecto: "Juego Wordle",
        descripcionProyecto: "Este juego es un clon del famoso Wordle. Consiste en adivinar una palabra; al enviar tu intento, recibirás pistas sobre qué letras están correctas o no. Tienes 5 intentos para adivinar la palabra. ¡Pruébalo!",
        urlGitHub: 'https://github.com/santimontironi/wordle-game',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://wordlegamebysm.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgProyectoCrudDjango,
        tituloProyecto: "CRUD de tareas",
        descripcionProyecto: "Aplicación que consiste en un CRUD de tareas, donde puedes registrarte o iniciar sesión y luego agregar, editar, marcar como completadas y ver todas las tareas. En este proyecto utilicé Django y base de datos SQL, y el diseño con HTML, CSS y Bootstrap.",
        urlGitHub: "https://github.com/santimontironi/CRUD-Django",
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://mysite-9s4w.onrender.com/',
        iconoDespliegue: 'https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg',
        nombreEnlaceDespliegue: 'Render'
      },
      {
        fotoProyecto: imgProyectoClonWhatsapp,
        tituloProyecto: "Clon de Whatsapp",
        descripcionProyecto: "Aplicación clon de WhatsApp que forma parte del proyecto final de Frontend en UTN BS AS. Cuenta con página de inicio y luego de cada chat. Se pueden buscar contactos como asi también agregarlos.",
        urlGitHub: 'https://github.com/santimontironi/clon-whatsapp',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://clon-whatsapp-sm.vercel.app/',
        iconoDespliegue: 'https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=ffffff',
        nombreEnlaceDespliegue: "Vercel"
      }
    ]

  } else {
    return [
      {
        fotoProyecto: imgProyectoFulboApp,
        tituloProyecto: "Soccer Match Organizer",
        descripcionProyecto: "FulboApp is a practical tool to organize soccer matches. Enter the players' names, select the number of participants, and teams are generated randomly in an instant. Perfect for friendly games and saving time before playing.",
        urlGitHub: 'https://github.com/santimontironi/fulboApp',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://fulboapp.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgWebFullWeb,
        tituloProyecto: "My Startup Website",
        descripcionProyecto: "Official website of my business, where I offer web development and digital solutions. Here you can find information about the services I provide and how to contact me for future collaborations. My goal is to help businesses build a professional and effective online presence.",
        urlGitHub: 'https://github.com/santimontironi/sitio-web-agencia',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://fullwebportfolio.com/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgQuizCapitales,
        tituloProyecto: "World Capitals Quiz",
        descripcionProyecto: "Interactive app that tests your knowledge of world capitals. Answer multiple-choice questions and improve your geography skills while having fun. Perfect for students, travelers, and anyone interested in learning more about our planet.",
        urlGitHub: 'https://github.com/santimontironi/quiz-de-capitales',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://quizcapitales.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgListaDeTareas,
        tituloProyecto: 'Task Manager App',
        descripcionProyecto: "A simple app to manage your daily tasks. You can add, remove, and mark tasks as completed. Built with ReactJS, this app helps you stay organized and productive every day.",
        urlGitHub: 'https://github.com/santimontironi/lista-tareas-react',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://appdetareasbysm.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgProyectoWordle,
        tituloProyecto: "Wordle Game",
        descripcionProyecto: "This game is a clone of the famous Wordle. The goal is to guess a word — after each attempt, you'll get hints about which letters are correct or not. You have 5 tries to find the word. Give it a shot!",
        urlGitHub: 'https://github.com/santimontironi/wordle-game',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://wordlegamebysm.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgProyectoCrudDjango,
        tituloProyecto: "Task CRUD App",
        descripcionProyecto: "A CRUD app where you can register or log in, and then add, edit, mark as completed, and view all your tasks. Built with Django, SQL database, and styled using HTML, CSS, and Bootstrap.",
        urlGitHub: "https://github.com/santimontironi/CRUD-Django",
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://mysite-9s4w.onrender.com/',
        iconoDespliegue: 'https://pbs.twimg.com/profile_images/1735429515541938176/zOO1N7Su_400x400.jpg',
        nombreEnlaceDespliegue: 'Render'
      },
      {
        fotoProyecto: imgProyectoClonWhatsapp,
        tituloProyecto: "WhatsApp Clone",
        descripcionProyecto: "A clone of the popular messaging app WhatsApp. It includes a login page, chat, and profile section. Built using ReactJS and Firebase.",
        urlGitHub: 'https://github.com/santimontironi/clon-whatsapp',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://clon-whatsapp-sm.vercel.app/',
        iconoDespliegue: 'https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=ffffff',
        nombreEnlaceDespliegue: "Vercel"
      }
    ]
  }
}

export default projectsData
