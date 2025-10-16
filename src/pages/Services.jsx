import '../assets/css/cssPages/services.css'
import { Service } from '../components/Service'

export const Services = () => {
  return (
    <section id="services">
      <h1 className='titulo-services'>Mis servicios</h1>
      <div className="container contenedor-servicios">
        <Service
          icono={<i className="bi bi-code-square"></i>}
          titulo='Frontend Web'
          descripcion='Creación de interfaces modernas y responsivas utilizando tecnologías como React, HTML, CSS, Bootstrap y JavaScript.'
        />
        <Service
          icono={<i className="bx bx-server"></i>}
          titulo='Backend Web'
          descripcion='Implementación de sistemas robustos y seguros con autenticación de usuarios, APIs y bases de datos.'
        />
        <Service
          icono={<i className='bi bi-database'></i>}
          titulo='Bases de Datos'
          descripcion='Creación y mantenimiento de bases de datos eficientes, seguras y escalables con MySQL y MongoDB para soluciones de datos robustas.'
        />
        <Service
          icono={<i className='bi bi-phone'></i>}
          titulo='Web Responsiva'
          descripcion='Diseño responsivo para sitios web y aplicaciones móviles, brindando la mejor experiencia de usuario con layouts modernos y eficientes.'
        />
        <Service
          icono={<i className="bi bi-cart"></i>}
          titulo='E-commerce'
          descripcion='Diseño e implementación de tiendas online con WooCommerce, adaptadas a las necesidades de tu negocio y enfocadas en la usabilidad y experiencia del usuario.'
        />
        <Service
          icono={<i className="bi bi-cloud-upload"></i>}
          titulo='Despliegue'
          descripcion='Despliegue eficiente de proyectos con configuraciones confiables de hosting y servidores, promoviendo un rendimiento óptimo y alta disponibilidad.'
        />
      </div>
    </section>
  )
}
