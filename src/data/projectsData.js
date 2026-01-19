import imgProyectoFulboApp from '../assets/img/proyectoFulboApp.png'
import imgWebFullWeb from '../assets/img/proyectoWebFullWeb.png'
import imgQuizCapitales from '../assets/img/proyectoQuizCapitales.png'
import imgProyectoWordle from '../assets/img/proyectoWordle.png'
import imgProyectoClonWhatsapp from '../assets/img/proyectoClonWhatsapp.png'
import imgProyectoNunoDeportes from '../assets/img/proyectoNunoDeportes.png'
import imgProyectoGarsonic from '../assets/img/proyectoGarsonic.png'
import imgProyectoMorfiBot from '../assets/img/proyectoMorfiBot.png'
import imgCrudNext from '../assets/img/proyectoCRUDtareas.png'

const projectsData = (language) => {
  if (language === 'es') {
    return [
      {
        fotoProyecto: imgProyectoNunoDeportes,
        tituloProyecto: "Nuno Deportes",
        descripcionProyecto: "Sitio web para una tienda de artículos deportivos llamada Nuno Deportes. El sitio ofrece una landing page, catálogo de productos formulario de contacto y un panel de administrador donde se gestionan los productos. Fue desarrollado utilizando el stack MERN para brindar una experiencia de usuario atractiva y funcional. También se implementó la API de MercadoPago para facilitar los pagos en línea.",
        urlGitHub: 'https://github.com/santimontironi/ecommerce-express',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://nunodeportes.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify",
        demo: true,
        urlVideoDemo: 'https://res.cloudinary.com/dbugzwzhn/video/upload/v1763169140/grabacionNunoDeportes_fbxpzj.mp4'
      },
      {
        fotoProyecto: imgProyectoGarsonic,
        tituloProyecto: "Garsonic (Aplicación de música)",
        descripcionProyecto: "Aplicacion web estilo Spotify. El sitio ofrece una landing page, roles de Artista y Usuario donde se gestionan canciones, playlists y reproducción de canciones. Fue desarrollado utilizando el stack MERN para brindar una experiencia de usuario atractiva y funcional. También se implementó TailwindCSS",
        urlGitHub: 'https://github.com/santimontironi/ecommerce-express',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://garsonic.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgProyectoMorfiBot,
        tituloProyecto: 'MorfiBot - Generador de recetas',
        descripcionProyecto: "Aplicación que te permite crear recetas de comida con ingredientes que te proporciona la API de OpenAI. En este proyecto utilicé el stack MERN, OpenAI API y TailwindCSS.",
        urlGitHub: 'https://github.com/santimontironi/aplicacion-recetas-IA',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://morfibot.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgProyectoClonWhatsapp,
        tituloProyecto: "Clon de Whatsapp",
        descripcionProyecto: "Aplicación clon de WhatsApp que forma parte del proyecto final de Frontend en UTN BS AS. Cuenta con página de inicio y luego de cada chat. Se pueden buscar contactos como asi también agregarlos. Fue desarrollada con ReactJS y CSS, con un enfoque en la usabilidad y experiencia del usuario para una navegación fluida y agradable.",
        urlGitHub: 'https://github.com/santimontironi/clon-whatsapp',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://clon-whatsapp-sm.vercel.app/',
        iconoDespliegue: 'https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=ffffff',
        nombreEnlaceDespliegue: "Vercel"
      },
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
        iconoDespliegue: 'https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=ffffff',
        nombreEnlaceDespliegue: "Vercel"
      },
      {
        fotoProyecto: imgCrudNext,
        tituloProyecto: "Gestor de tareas Next.js",
        descripcionProyecto: "Gestor de tareas desarrollada con Next.js. La base de datos es PostgreSQL utilizando Prisma como ORM y se utiliza NextAuth para autenticación de usuarios. Es una aplicación sencilla en cuanto a lo que hace pero me sirvió mucho para usar Prisma y NextAuth.",
        urlGitHub: "https://github.com/santimontironi/crud-nextjs-prisma",
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://crud-nextjs-prisma-navy.vercel.app/',
        iconoDespliegue: 'https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=ffffff',
        nombreEnlaceDespliegue: "Vercel"
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
        fotoProyecto: imgProyectoWordle,
        tituloProyecto: "Juego Wordle",
        descripcionProyecto: "Este juego es un clon del famoso Wordle. Consiste en adivinar una palabra; al enviar tu intento, recibirás pistas sobre qué letras están correctas o no. Tienes 5 intentos para adivinar la palabra. ¡Pruébalo!",
        urlGitHub: 'https://github.com/santimontironi/wordle-game',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://wordlegamebysm.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      }
    ]

  } else {
    return [
      {
        fotoProyecto: imgProyectoNunoDeportes,
        tituloProyecto: "Nuno Deportes",
        descripcionProyecto: "Web site for a sports articles called Nuno Deportes. The site offers a landing page, product catalog, contact form, and an admin panel where products are managed. It was developed using the MERN stack to provide an attractive and functional user experience. The MercadoPago API was also implemented to facilitate online payments.",
        urlGitHub: 'https://github.com/santimontironi/ecommerce-express',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://nunodeportes.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify",
        demo: true,
        urlVideoDemo: 'https://res.cloudinary.com/dbugzwzhn/video/upload/v1763169140/grabacionNunoDeportes_fbxpzj.mp4'
      },
      {
        fotoProyecto: imgProyectoGarsonic,
        tituloProyecto: "Garsonic (Music Application)",
        descripcionProyecto: "Web application for a music platform called Garsonic. The platform includes a login page, a dashboard for artists and users, and a music player. It was built using stack MERN and TailwindCSS. Inside the plataform, artist can manage their songs and users can create playlists and listen to music.",
        urlGitHub: 'https://github.com/santimontironi/ecommerce-express',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://garsonic.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      },
      {
        fotoProyecto: imgProyectoMorfiBot,
        tituloProyecto: 'MorfiBot - Recipes generator',
        descripcionProyecto: "Application that generates recipes using the OpenAI API. This project is developed with MERN and TailwindCSS",
        urlGitHub: 'https://github.com/santimontironi/aplicacion-recetas-IA',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://morfibot.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
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
      },
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
      { fotoProyecto: imgCrudNext,
        tituloProyecto: "Tasks manager Next.js",
        descripcionProyecto: "Tasks manager developed with Next.js. The database is PostgreSQL with Prisma ORM and NextAuth it's used for authentication. It´s an easy-to-use app but helps me to use Prisma and NextAuth.",
        urlGitHub: "https://github.com/santimontironi/crud-nextjs-prisma",
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://crud-nextjs-prisma-navy.vercel.app/',
        iconoDespliegue: 'https://img.icons8.com/?size=100&id=2xFS7aynbwiR&format=png&color=ffffff',
        nombreEnlaceDespliegue: "Vercel"
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
        fotoProyecto: imgProyectoWordle,
        tituloProyecto: "Wordle Game",
        descripcionProyecto: "This game is a clone of the famous Wordle. The goal is to guess a word — after each attempt, you'll get hints about which letters are correct or not. You have 5 tries to find the word. Give it a shot!",
        urlGitHub: 'https://github.com/santimontironi/wordle-game',
        iconoGitHub: "https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff",
        urlDespliegue: 'https://wordlegamebysm.netlify.app/',
        iconoDespliegue: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png',
        nombreEnlaceDespliegue: "Netlify"
      }
    ]
  }
}

export default projectsData
