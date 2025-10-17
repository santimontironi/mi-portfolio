import '../assets/css/cssPages/services.css'
import { Service } from '../components/Service'
import allServices from '../services/getAllServices'

export const Services = () => {


  const getAllServices = () => {
    return allServices()
  }

  return (
    <section id="services">
      <h1 className='titulo-services'>Mis servicios</h1>
      <div className="container contenedor-servicios">
        {getAllServices().map((service, index) => (
          <Service
            key={index}
            icono={service.icono}
            titulo={service.titulo}
            descripcion={service.descripcion}
          />
        ))}
      </div>
    </section>
  )
}
