import '../assets/css/skills.css'
import Wavify from "react-wavify";
import { Skill } from '../components/Skill';

export const Skills = () => {

  const languages = [
    { logo: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000', nombre: 'Python' },
    { logo: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000', nombre: 'JavaScript' },
    { logo: 'https://img.icons8.com/?size=100&id=55251&format=png&color=000000', nombre: 'C#' }
  ]

  const webDesignAndLayout = [
    { logo: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', nombre: 'HTML' },
    { logo: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', nombre: 'CSS' },
    { logo: 'https://img.icons8.com/?size=100&id=13664&format=png&color=000000', nombre: 'Wordpress' }
  ]

  const frameworks = [
    { logo: 'https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000', nombre: 'React' },
    { logo: 'https://img.icons8.com/?size=100&id=XPdRFanRZtNK&format=png&color=ffffff', nombre: 'Django' },
    { logo: 'https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=ffffff', nombre: 'Flask' },
    { logo: 'https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000', nombre: 'Bootstrap' },
    { logo: 'https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000', nombre: 'Tailwind'}
  ];

  const tools = [
    { logo: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000', nombre: 'Docker' },
    { logo: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000', nombre: 'Git' },
    { logo: 'https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff',  nombre: "GitHub" },
    { logo: 'https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000',  nombre: 'Postman' },
    { logo: 'https://img.icons8.com/?size=100&id=YUKvLGE4zROg&format=png&color=000000', nombre: 'Diagramas con UML' }
  ]

  const databases = [
    { logo: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000', nombre: 'MySQL' },
    { logo: 'https://img.icons8.com/?size=100&id=VMRAbKfEzssG&format=png&color=ffffff', nombre: 'SQLite' },
    { logo: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', nombre: 'MongoDB' }
  ]

  const others = [
    { logo: 'https://img.icons8.com/?size=100&id=13677&format=png&color=000000', nombre: 'Photoshop' },
    { logo: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000', nombre: 'Canva' }
  ]

  return (
    <section id="skills">
      <h1 className='titulo-skills'>My skills</h1>
      <Wavify className='wave'
        fill="#058049"
        paused={false}
        options={{
          height: 100,
          amplitude: 16,
          speed: 0.40,
          points: 4,
        }}
      />
      <div className="contenedor-skills">

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Languages</h1>
          <div className="skill-logos">
            {languages.map((skillLanguage, index) => (
              <Skill key={index} logo={skillLanguage.logo} nombre={skillLanguage.nombre} />
            ))}
          </div>
        </div>

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Frameworks</h1>
          <div className="skill-logos">
            {frameworks.map((skillFramework, index) => (
              <Skill key={index} logo={skillFramework.logo} nombre={skillFramework.nombre} />
            ))}
          </div>
        </div>

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Web design and layout</h1>
          <div className="skill-logos">
            {webDesignAndLayout.map((skillWebDesign, index) => (
              <Skill key={index} logo={skillWebDesign.logo} nombre={skillWebDesign.nombre} />
            ))}
          </div>
        </div>

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Databases</h1>
          <div className="skill-logos">
            {databases.map((skillDatabase, index) => (
              <Skill key={index} logo={skillDatabase.logo} nombre={skillDatabase.nombre} />
            ))}
          </div>
        </div>
        
        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Tools</h1>
          <div className="skill-logos">
            {tools.map((skillTool, index) => (
              <Skill key={index} logo={skillTool.logo} nombre={skillTool.nombre} />
            ))}
          </div>
        </div>

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Others</h1>
          <div className="skill-logos">
            {others.map((skillOther, index) => (
              <Skill key={index} logo={skillOther.logo} nombre={skillOther.nombre} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
