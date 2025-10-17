import '../assets/css/cssPages/services.css'
import { Service } from '../components/Service'
import allServices from '../services/getAllServices'
import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'

export const Services = () => {

  const {language} = useContext(LanguageContext)

  const getAllServices = allServices(language)
  

  return (
    <section id="services">
      
      {language === 'es' ? <h1 className='titulo-services'>Mis servicios</h1> : <h1 className='titulo-services'>My services</h1>}
      
      <div className="container contenedor-servicios">
        {getAllServices.map((service, index) => (
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
