import HeaderActions from './HeaderActions'

export default function Header() {
  return (
    <div className="relative px-10 pt-10 pb-8 border-b border-slate-200 dark:border-slate-700 max-sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
        Muhammad Hassan Javed
      </h1>
      <div className="mt-1 text-base font-medium text-blue-600 dark:text-blue-400">
        PHP Laravel Developer
      </div>
      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
        <span>Lahore, Punjab, Pakistan</span>
        <a href="tel:+923056292104" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          +923056292104
        </a>
        <a href="mailto:hassanhafiz44@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          hassanhafiz44@gmail.com
        </a>
        <a href="https://github.com/hassanhafiz44" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          github.com/hassanhafiz44
        </a>
        <a href="https://www.linkedin.com/in/hassanhafiz44" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          linkedin.com/in/hassanhafiz44
        </a>
      </div>
      <HeaderActions />
    </div>
  )
}
