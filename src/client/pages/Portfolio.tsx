import { projects } from '../data/portfolio'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default function Portfolio() {
  return (
    <div className="card">
      <div className="header">
        <h1>Portfolio</h1>
        <div className="title">Selected Projects</div>
        <div className="header-actions">
          <ThemeSwitcher />
        </div>
      </div>
      <div className="body">
        <section>
          <div className="section-label">Projects</div>
          <div className="portfolio-grid">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-card"
              >
                <div className="portfolio-card-header">
                  <span className="portfolio-card-name">{project.name}</span>
                  <svg className="portfolio-card-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </div>
                <div className="portfolio-card-company">{project.company}</div>
                <p className="portfolio-card-desc">{project.description}</p>
                <div className="portfolio-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
