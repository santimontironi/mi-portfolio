import '../assets/css/service.css'

export const Service = ({icono,titulo,descripcion}) => {
  return (
    <div className='servicio'>
        <p className='logo'>{icono}</p>
        <h2 className='border-bottom border-solid border-light'>{titulo}</h2>
        <p>{descripcion}</p>
    </div>
  )
}
