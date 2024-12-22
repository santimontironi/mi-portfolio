import '../assets/css/service.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Service = ({icono,titulo,descripcion}) => {

  useEffect(() => {
    Aos.init({duration:1000})
  },[])

  return (
    <div className='servicio' data-aos="zoom-in-down">
        <p className='logo'>{icono}</p>
        <h2 className='border-bottom border-solid border-light'>{titulo}</h2>
        <p>{descripcion}</p>
    </div>
  )
}
