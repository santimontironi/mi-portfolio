import '../assets/css/cssComponents/form.css'

export const Form = () => {
  return (
    <div className="contenedor-form">
        <h1 className='text-light border-light border-3 pb-4 border-bottom'>Get in touch</h1>
        <form action="https://formsubmit.co/santiimontironi@gmail.com" method='post'>
            <input name='Nombre' type="text" placeholder='Your name' required autoComplete='off'/>
            <input name='Apellido' type="text" placeholder='Your surname' required autoComplete='off'/>
            <textarea name='Mensaje' placeholder='Typing your message here' required></textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}
