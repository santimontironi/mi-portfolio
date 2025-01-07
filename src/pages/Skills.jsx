import '../assets/css/skills.css'
import { Skill } from '../components/Skill'
import logoHtml from '../assets/img/html.png'
import logoCss from '../assets/img/css.png'
import logoPython from '../assets/img/python.png'
import logoJs from '../assets/img/javascript.png'
import cSharp from '../assets/img/cSharp.png'
import Wavify from "react-wavify";

export const Skills = () => {

  const technologiesAndLenguages = [
    { logo: logoHtml, nombre: 'HTML' },
    { logo: logoCss, nombre: 'CSS' },
    { logo: logoPython, nombre: 'Python' },
    { logo: logoJs, nombre: 'JavaScript' },
    { logo: cSharp, nombre: 'C#' },
  ];

  return (
    <section id="skills">
      <h1 className='titulo-skills'>My skills</h1>
      <Wavify className='wave'
        fill="#058049"
        paused={false}
        options={{
          height: 10,
          amplitude: 16,
          speed: 0.30,
          points: 4,
        }}
      />
      <div className="contenedor-skills">
        <div className="categoria-skills">
          <h1>Lenguages and technologies</h1>
          <div className="logos-skills">
            {technologiesAndLenguages.map((skill, index) => (
              <Skill key={index} logo={skill.logo} nombre={skill.nombre} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
