import { jobs } from '../data/experience'
import Job from './Job'

export default function Experience() {
  return (
    <section>
      <div className="section-label">Employment History</div>
      {jobs.map((job) => (
        <Job key={job.company} {...job} />
      ))}
    </section>
  )
}
