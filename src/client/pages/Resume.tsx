import Header from '../components/Header'
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'

export default function Resume() {
  return (
    <div className="card">
      <Header />
      <div className="body">
        <Profile />
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  )
}
