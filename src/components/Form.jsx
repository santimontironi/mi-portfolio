import '../assets/css/cssComponents/form.css'

export const Form = () => {
  return (
    <div className="contenedor-form">
        <h1 className='text-light border-light border-3 pb-4 border-bottom'>Ponte en contacto</h1>
        <form action="https://formsubmit.co/santiagomontironi21@gmail.com" method='post'>
            <input name='Nombre' type="text" placeholder='Nombre' required autoComplete='off'/>
            <input name='Apellido' type="text" placeholder='Apellido' required autoComplete='off'/>
            <input type="email" name="Email" placeholder='Correo electrónico' required autoComplete='off'/>
            <textarea name='Mensaje' placeholder='Escribe tu mensaje aqui' required></textarea>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
