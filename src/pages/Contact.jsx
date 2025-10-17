import '../assets/css/cssPages/contact.css'
import { ContactLinks } from '../components/ContactLinks'
import { Form } from '../components/Form'
import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext'

export const Contact = () => {

  const{language} = useContext(LanguageContext)

  return (
    <section id="contact">
        <h1 className='tituloContact'>{language === 'es' ? 'Contacto' : 'Contact'}</h1>
        <div className="contenido-contact" data-aos="zoom-in-down">
          <ContactLinks/>
          <Form/>
        </div>
    </section>
  )
}
