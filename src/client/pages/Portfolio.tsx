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
        <meta property="og:description" content="Five production PHP/Laravel projects including invoTIME, Kaolin Inventory, ELR Illuminator Calculator, and Avas Flowers." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Portfolio — Muhammad Hassan Javed" />
        <meta name="twitter:description" content="Five production PHP/Laravel projects including invoTIME, Kaolin Inventory, ELR Illuminator Calculator, and Avas Flowers." />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-1.5 p-5 border border-slate-200 dark:border-slate-700 rounded-xl no-underline text-inherit hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-base font-semibold text-slate-900 dark:text-slate-50">{project.name}</span>
                    <svg className="w-4 h-4 shrink-0 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </div>
                  <div className="text-[13px] font-medium text-blue-600 dark:text-blue-400">{project.company}</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-[1.65] grow">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
