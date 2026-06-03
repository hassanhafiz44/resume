import { skills } from '../data/skills'
import SectionLabel from './SectionLabel'

export default function Skills() {
  return (
    <section className="mt-9">
      <SectionLabel>Areas of Expertise</SectionLabel>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{skill.name}</span>
            <span className={
              skill.level === 'Experienced'
                ? 'text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                : 'text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300'
            }>
              {skill.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
