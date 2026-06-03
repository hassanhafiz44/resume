import { Routes, Route, Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-200 py-10 px-4 print:p-0 print:bg-white">
      <Nav />
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
