import { Skill } from "./Skill"
import '../assets/css/skillCard.css';

export const SkillCard = ({categoriaSkill,skills}) => {
  return (
    <div className="categoria-skills">
        <h1 className="titulo-skill">{categoriaSkill}</h1>
        <div className="logos-skills">
            {skills.map((skill, index) => (
            <Skill key={index} logo={skill.logo} nombre={skill.nombre} />
            ))}
        </div>
    </div>
  )
}
