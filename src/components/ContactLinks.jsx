import '../assets/css/cssComponents/contactLinks.css'

export const ContactLinks = () => {
  return (
    <div className="contact-link">
      <h1 className='titulo-contact-link'>Mis medios</h1>
      <div className="links">
        <div className="link">
          <img src="https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000" alt="logo-gmail" />
          <p>santiagomontironi21@gmail.com</p>
        </div>
        <div className="link">
          <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff" alt="logo-gitHub" />
          <p>Santimontironi</p>
        </div>
        <div className="link">
          <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="logo-linkedIn" />
          <p>Santiago Montironi</p>
        </div>
      </div>
    </div>
  )
}
