import { NavLink } from 'react-router-dom'

const active = 'px-4 py-1.5 rounded-md text-sm font-semibold bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-slate-100 transition-colors'
const inactive = 'px-4 py-1.5 rounded-md text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-slate-200 transition-colors'

export default function Nav() {
  return (
    <nav className="flex justify-center gap-1 mb-6 print:hidden">
      <NavLink to="/" end className={({ isActive }) => isActive ? active : inactive}>
        Resume
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? active : inactive}>
        Portfolio
      </NavLink>
    </nav>
  )
}
