import '../assets/css/skills.css'
import Wavify from "react-wavify";
import { SkillCard } from '../components/SkillCard'

export const Skills = () => {

  const languages = [
    { logo: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000', nombre: 'Python' },
    { logo: 'https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000', nombre: 'JavaScript' },
    { logo: 'https://img.icons8.com/?size=100&id=55251&format=png&color=000000', nombre: 'C#' },
  ];

  const WebDesignAndLayout = [
    { logo: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', nombre: 'HTML' },
    { logo: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', nombre: 'CSS' },
    { logo: 'https://img.icons8.com/?size=100&id=g9mmSxx3SwAI&format=png&color=000000', nombre: 'Bootstrap' },
    { logo: 'https://img.icons8.com/?size=100&id=13664&format=png&color=000000', nombre: 'Wordpress' }
  ]

  const frameworks = [
    { logo: 'https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000', nombre: 'React' },
    { logo: 'https://img.icons8.com/?size=100&id=XPdRFanRZtNK&format=png&color=ffffff', nombre: 'Django' },
    { logo: 'https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=ffffff', nombre: 'Flask' },
  ]

  const tools = [
    {logo: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000', nombre: 'Docker'},
    {logo: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000', nombre: 'Git'},
    {logo: 'https://img.icons8.com/?size=100&id=12599&format=png&color=ffffff', nombre: 'GitHub'},
    {logo: 'https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000', nombre: 'Postman'},
    {logo: 'https://img.icons8.com/?size=100&id=YUKvLGE4zROg&format=png&color=000000', nombre: 'UML'}
  ]

  const databases = [
    {logo: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000', nombre: 'MySQL'},
    {logo: 'https://img.icons8.com/?size=100&id=VMRAbKfEzssG&format=png&color=ffffff', nombre: 'SQLite'},
    {logo: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', nombre: 'MongoDB'},
  ]

  const others = [
    {logo: 'https://img.icons8.com/?size=100&id=13677&format=png&color=000000', nombre: 'Photoshop'},
    {logo: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000', nombre: 'Canva'}
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
        <SkillCard categoriaSkill="Languages" skills={languages} />
        <SkillCard categoriaSkill="Frameworks" skills={frameworks} />
        <SkillCard categoriaSkill="Databases" skills={databases}/>
        <SkillCard categoriaSkill="Tools" skills={tools}/>
        <SkillCard categoriaSkill="Others" skills={others}/>
      </div>
    </section>
  )
}
