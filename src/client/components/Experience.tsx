import { jobs } from '../data/experience'
import Job from './Job'
import SectionLabel from './SectionLabel'

export default function Experience() {
  return (
    <section className="mt-9">
      <SectionLabel>Employment History</SectionLabel>
      {jobs.map((job) => (
        <Job key={job.company} {...job} />
      ))}
    </section>
  )
}
