import type { Job as JobData } from '../data/experience'

export default function Job({ title, company, location, dates, bullets }: JobData) {
  return (
    <div className="job">
      <div className="job-header">
        <div>
          <span className="job-title">{title}</span>
          <span style={{ color: '#94a3b8', margin: '0 0.4rem' }}>·</span>
          <span className="job-company">{company}</span>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
          <span className="job-location">{location}</span>
          <span className="job-meta">{dates}</span>
        </div>
      </div>
      <ul>
        {bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
