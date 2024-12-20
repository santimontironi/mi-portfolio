import '../assets/css/services.css'
import { Service } from '../components/Service'

export const Services = () => {
  return (
    <section id="services">
      <h1 className='titulo-services'>My services</h1>
      <div className="contenedor-servicios">
        <Service icono={<i className="bi bi-code-square"></i>} titulo='Frontend web' descripcion='Creating of responsives and moderns interfaces with technologies like React, HTML, CSS and JavaScript' />
      </div>
    </section>
  )
}
