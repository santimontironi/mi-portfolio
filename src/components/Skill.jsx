import '../assets/css/skill.css';

export const Skill = ({logo,nombre}) => {
  return (
    <div className="skill">
        <img src={logo} alt={nombre} className="logo-skill"/>
        <p className="nombre-skill">{nombre}</p>
    </div>
  )
}
