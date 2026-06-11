import { Helmet } from 'react-helmet-async'
import { projects } from '../data/portfolio'
import ThemeSwitcher from '../components/ThemeSwitcher'
import SectionLabel from '../components/SectionLabel'

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio — Muhammad Hassan Javed</title>
        <meta name="description" content="Selected PHP/Laravel projects by Muhammad Hassan Javed: invoTIME, Kaolin Inventory Management, ELR Illuminator Calculator, US Coast Guard Questions, and Avas Flowers." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hassanpi.com/portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hassanpi.com/portfolio" />
        <meta property="og:title" content="Portfolio — Muhammad Hassan Javed" />
        <meta property="og:description" content="Five production PHP/Laravel projects: invoTIME, Kaolin Inventory, ELR Illuminator Calculator, US Coast Guard Questions, and Avas Flowers." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Portfolio — Muhammad Hassan Javed" />
        <meta name="twitter:description" content="Five production PHP/Laravel projects: invoTIME, Kaolin Inventory, ELR Illuminator Calculator, US Coast Guard Questions, and Avas Flowers." />
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden transition-colors duration-200">
        <div className="relative px-10 pt-10 pb-8 border-b border-slate-200 dark:border-slate-700 max-sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">Portfolio</h1>
          <div className="mt-1 text-base font-medium text-blue-600 dark:text-blue-400">Selected Projects</div>
          <div className="absolute top-10 right-10 max-sm:static max-sm:mt-4 print:hidden">
            <ThemeSwitcher />
          </div>
        </div>

        <div className="px-10 pb-12 max-sm:px-6">
          <section className="mt-9">
            <SectionLabel>Projects</SectionLabel>
            <div className="flex flex-col gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="group flex flex-col sm:flex-row border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                >
                  {/* Image — alternates left/right */}
                  <div className={`relative sm:w-[48%] shrink-0 bg-slate-100 dark:bg-slate-800 overflow-hidden ${index % 2 === 1 ? 'sm:order-last' : ''}`}>
                    {project.image ? (
                      <>
                        {/* Browser chrome dots */}
                        <div className="absolute top-0 left-0 right-0 h-7 bg-slate-200/80 dark:bg-slate-700/80 backdrop-blur-sm flex items-center gap-1.5 px-3 z-10">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                        </div>
                        <img
                          src={project.image}
                          alt={`${project.name} screenshot`}
                          className="w-full h-full object-cover object-top pt-7 transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </>
                    ) : (
                      <div className="w-full h-full min-h-[180px] flex items-center justify-center">
                        <span className="text-slate-300 dark:text-slate-600 text-sm">No preview</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between gap-4 p-6 grow">
                    <div className="flex flex-col gap-2">
                      <div className="text-[11px] font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400">
                        {project.company}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 leading-snug">
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors no-underline shrink-0"
                        aria-label={`Visit ${project.name}`}
                      >
                        Visit Project
                        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"/>
                          <polyline points="7 7 17 7 17 17"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
