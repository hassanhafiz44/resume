import { Link } from 'react-router-dom'
import SectionLabel from './SectionLabel'

export default function Profile() {
  return (
    <section className="mt-9">
      <SectionLabel>Profile</SectionLabel>
      <p className="text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
        Muhammad Hassan Javed is a PHP Laravel Developer with 6+ years of experience in PHP, Laravel, and CodeIgniter.
        Proficient in PHP 7 and 8 development, object-oriented programming, and PSR-12 practices.
        Skilled in building RESTful APIs and MySQL-backed applications while ensuring clean, maintainable code.
        Successfully upgraded legacy PHP applications and automated ETL workflows, resulting in enhanced
        performance tracking features used in production systems. See the{' '}
        <Link to="/portfolio" className="text-blue-600 dark:text-blue-400 hover:underline">
          portfolio
        </Link>{' '}
        for examples of this work.
      </p>
    </section>
  )
}
