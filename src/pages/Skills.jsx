import '../assets/css/skills.css'
import Wavify from "react-wavify";

export const Skills = () => {
  return (
    <div id="skills">
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
    </div>
  )
}
