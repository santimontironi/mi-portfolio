import '../assets/css/services.css'
import { Service } from '../components/Service'

export const Services = () => {
  return (
    <section id="services">
      <h1 className='titulo-services' data-aos="fade-right">My services</h1>
      <div className="container contenedor-servicios">
        <Service icono = {<i className="bi bi-code-square"></i>} titulo='Frontend Web' descripcion = 'Creating of responsives and moderns interfaces with technologies like React, HTML, CSS, Bootstrap and JavaScript.'/>
        <Service icono = {<i className="bx bx-server"></i>} titulo = 'Backend Web' descripcion = 'Implementation of robust and secure systems with user authentication, APIs and databases.'/>
        <Service icono = {<i className='bi bi-database'></i>} titulo = 'Databases' descripcion = 'Creation and Maintenance of efficient, secure, and scalable Databases with MySQL and MongoDB for robust data solutions'/>
        <Service icono = {<i className='bi bi-phone'></i>} titulo = 'Responsive Web' descripcion = 'Responsive design for mobile websites and apps, providing the best user experience with modern and efficient layouts.'/>
        <Service icono = {<i className="bi bi-cart"></i>} titulo = 'E-commerce' descripcion = 'Design and implementation of online stores using WooCommerce, adapted to the needs of your business and with a focus in usability and user experience'/>
        <Service icono = {<i className="bi bi-cloud-upload"></i>} titulo = 'Deployment' descripcion = 'Efficient projects deployment with hosting and servers confiability configurations, promoving an optium performance and high availability'/>
      </div>
    </section>
  )
}
