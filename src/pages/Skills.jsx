import '../assets/css/skills.css'
import logoHtml from '../assets/img/html.png'
import logoCss from '../assets/img/css.png'
import logoPython from '../assets/img/python.png'
import logoJs from '../assets/img/javascript.png'
import cSharp from '../assets/img/cSharp.png'
import react from '../assets/img/react.png'
import django from '../assets/img/django.png'
import flask from '../assets/img/flask.png'
import bootstrap from '../assets/img/bootstrap.png'
import Wavify from "react-wavify";
import { SkillCard } from '../components/SkillCard'

export const Skills = () => {

  const technologiesAndLenguages = [
    { logo: logoHtml, nombre: 'HTML' },
    { logo: logoCss, nombre: 'CSS' },
    { logo: logoPython, nombre: 'Python' },
    { logo: logoJs, nombre: 'JavaScript' },
    { logo: cSharp, nombre: 'C#' },
  ];

  const frameworks = [
    { logo: react, nombre: 'React' },
    { logo: django, nombre: 'Django' },
    { logo: flask, nombre: 'Flask' },
    { logo: bootstrap, nombre: 'Bootstrap' },
  ]

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
        <SkillCard categoriaSkill="Lenguajes y tecnologias" skills={technologiesAndLenguages} />
        <SkillCard categoriaSkill="Frameworks" skills={frameworks} />
      </div>
    </section>
  )
}
