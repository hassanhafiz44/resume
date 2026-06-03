import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Nav from './components/Nav'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-200 py-10 px-4 print:p-0 print:bg-white">
        <Nav />
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </HelmetProvider>
  )
}
