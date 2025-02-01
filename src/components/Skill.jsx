import '../assets/css/cssComponents/skill.css';

export const Skill = ({ logo, nombre}) => {
  return (
    <div className="skill">
        <img src={logo} alt={logo} />
        <p className='nombre-skill'>{nombre}</p>
    </div>
  )
}
