import '../assets/css/cssPages/skills.css'
import Wavify from "react-wavify";
import { getAllSkills } from '../services/getAllSkills';
import { Skill } from '../components/Skill';

export const Skills = () => {

  const { languages, webDesignAndLayout, frontendFrameworks, backendFrameworks, tools, databases } = getAllSkills()

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
          <h1>Lenguajes</h1>
          <div className="skill-logos">
            {languages.map((skillLanguage, index) => (
              <Skill key={index} logo={skillLanguage.logo} nombre={skillLanguage.nombre} />
            ))}
          </div>
        </div>

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Frontend frameworks</h1>
          <div className="skill-logos">
            {frontendFrameworks.map((skillFramework, index) => (
              <Skill key={index} logo={skillFramework.logo} nombre={skillFramework.nombre} />
            ))}
          </div>
        </div>

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Backend frameworks</h1>
          <div className="skill-logos">
            {backendFrameworks.map((skillFramework, index) => (
              <Skill key={index} logo={skillFramework.logo} nombre={skillFramework.nombre} />
            ))}
          </div>
        </div>

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Diseño web</h1>
          <div className="skill-logos">
            {webDesignAndLayout.map((skillWebDesign, index) => (
              <Skill key={index} logo={skillWebDesign.logo} nombre={skillWebDesign.nombre} />
            ))}
          </div>
        </div>

        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Bases de datos</h1>
          <div className="skill-logos">
            {databases.map((skillDatabase, index) => (
              <Skill key={index} logo={skillDatabase.logo} nombre={skillDatabase.nombre} />
            ))}
          </div>
        </div>
        
        <div className="skill-card" data-aos="zoom-in-down">
          <h1>Herramientas</h1>
          <div className="skill-logos">
            {tools.map((skillTool, index) => (
              <Skill key={index} logo={skillTool.logo} nombre={skillTool.nombre} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}
