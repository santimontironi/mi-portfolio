import '../assets/css/cssComponents/form.css'

export const Form = () => {
  return (
    <div className="contenedor-form">
        <h1 className='text-light border-light border-3 pb-4 border-bottom'>Get in touch</h1>
        <form action="">
            <input type="text" placeholder='Your name' />
            <input type="text" placeholder='Your surname' />
            <textarea placeholder='Typing your message here'></textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}
