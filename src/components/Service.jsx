import '../assets/css/cssComponents/service.css'

export const Service = ({icono,titulo,descripcion}) => {

  return (
    <div className='servicio' data-aos="zoom-in-down">
        <p className='logo'>{icono}</p>
        <h2 className='border-bottom border-solid border-light'>{titulo}</h2>
        <p>{descripcion}</p>
    </div>
  )
}
