import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section>
      <div className="section-label">Areas of Expertise</div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-row">
            <span className="skill-name">{skill.name}</span>
            <span className={`skill-level${skill.level === 'Skillful' ? ' skillful' : ''}`}>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
