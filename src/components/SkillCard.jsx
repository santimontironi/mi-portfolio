import { Skill } from "./Skill"
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../assets/css/skillCard.css';

export const SkillCard = ({categoriaSkill,skills}) => {

  useEffect(() => {
    Aos.init({ duration: 1000 })
  },[])

  return (
    <div className="categoria-skills" data-aos="zoom-in-down">
        <h1 className="titulo-skill">{categoriaSkill}</h1>
        <div className="logos-skills">
            {skills.map((skill, index) => (
            <Skill key={index} logo={skill.logo} nombre={skill.nombre} />
            ))}
        </div>
    </div>
  )
}
