import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="site-nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Resume
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Portfolio
      </NavLink>
    </nav>
  )
}
