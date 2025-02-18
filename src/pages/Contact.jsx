import '../assets/css/cssPages/contact.css'
import { ContactLinks } from '../components/ContactLinks'
import { Form } from '../components/Form'

export const Contact = () => {
  return (
    <section id="contact">
        <h1 className='tituloContact'>Contact to me</h1>
        <div className="contenido-contact" data-aos="zoom-in-down">
          <ContactLinks/>
          <Form/>
        </div>
    </section>
  )
}
