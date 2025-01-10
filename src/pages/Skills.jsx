import '../assets/css/skills.css'
import logoHtml from '../assets/img/html.png'
import logoCss from '../assets/img/css.png'
import wordpress from '../assets/img/wordpress.png'
import logoPython from '../assets/img/python.png'
import logoJs from '../assets/img/javascript.png'
import cSharp from '../assets/img/cSharp.png'
import react from '../assets/img/react.png'
import django from '../assets/img/django.png'
import flask from '../assets/img/flask.png'
import bootstrap from '../assets/img/bootstrap.png'
import docker from '../assets/img/docker.png'
import git from '../assets/img/git.png'
import github from '../assets/img/github.png'
import Wavify from "react-wavify";
import { SkillCard } from '../components/SkillCard'

export const Skills = () => {

  const technologiesAndLenguages = [
    { logo: logoPython, nombre: 'Python' },
    { logo: logoJs, nombre: 'JavaScript' },
    { logo: cSharp, nombre: 'C#' },
  ];

  const WebDesignAndLayout = [
    { logo: logoHtml, nombre: 'HTML' },
    { logo: logoCss, nombre: 'CSS' },
    { logo: bootstrap, nombre: 'Bootstrap' },
    { logo: wordpress, nombre: 'Wordpress' }
  ]

  const frameworks = [
    { logo: react, nombre: 'React' },
    { logo: django, nombre: 'Django' },
    { logo: flask, nombre: 'Flask' },
  ]

  const tools = [
    {logo: docker, nombre: 'Docker'},
    {logo: git, nombre: 'Git'},
    {logo: github, nombre: 'GitHub'}
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
        <SkillCard categoriaSkill="Web Design & Layout" skills={WebDesignAndLayout}/>
        <SkillCard categoriaSkill="Languages" skills={technologiesAndLenguages} />
        <SkillCard categoriaSkill="Frameworks" skills={frameworks} />
        <SkillCard categoriaSkill="Tools" skills={tools}/>
      </div>
    </section>
  )
}
