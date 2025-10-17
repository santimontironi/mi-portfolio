import '../assets/css/cssComponents/form.css'
import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'

export const Form = () => {

  const{language} = useContext(LanguageContext)

  return (
    <div className="contenedor-form">
        <h1 className='text-light border-light border-3 pb-4 border-bottom'> {language === 'es' ? 'Ponte en contacto' : 'Get in touch'}</h1>
        <form action="https://formsubmit.co/santiagomontironi21@gmail.com" method='post'>
            <input name='Nombre' type="text" placeholder={language === 'es' ? 'Nombre' : 'Name'} required autoComplete='off'/>
            <input name='Apellido' type="text" placeholder={language === 'es' ? 'Apellido' : 'Surname'} required autoComplete='off'/>
            <input type="email" name="Email" placeholder={language === 'es' ? 'Correo electrónico' : 'E-mail'} required autoComplete='off'/>
            <textarea name='Mensaje' placeholder={language === 'es' ? 'Escriba su mensaje aqui' : 'Write your message here'} required></textarea>
            <input type="submit" value={language === 'es' ? 'Enviar' : 'Send'} />
        </form>
    </div>
  )
}
