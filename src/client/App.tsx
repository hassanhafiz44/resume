import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Resume from './pages/Resume'
import Portfolio from './pages/Portfolio'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  )
}
