import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Hassan Javed',
  jobTitle: 'PHP Laravel Developer',
  email: 'hassanhafiz44@gmail.com',
  telephone: '+923056292104',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lahore',
    addressRegion: 'Punjab',
    addressCountry: 'PK',
  },
  url: 'https://hassanpi.com/',
  sameAs: [
    'https://github.com/hassanhafiz44',
    'https://www.linkedin.com/in/hassanhafiz44',
  ],
  knowsAbout: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'RESTful APIs', 'Git'],
}

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Muhammad Hassan Javed — PHP Laravel Developer</title>
        <meta name="description" content="Muhammad Hassan Javed — PHP Laravel Developer with 6+ years building scalable web apps, RESTful APIs, and MySQL-backed systems in Laravel & CodeIgniter." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hassanpi.com/" />

        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://hassanpi.com/" />
        <meta property="og:title" content="Muhammad Hassan Javed — PHP Laravel Developer" />
        <meta property="og:description" content="PHP Laravel Developer with 6+ years of experience building scalable web apps. Open to remote and contract opportunities." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Muhammad Hassan Javed — PHP Laravel Developer" />
        <meta name="twitter:description" content="PHP Laravel Developer with 6+ years of experience. Open to remote and contract opportunities." />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden transition-colors duration-200">
        <Header />
        <div className="px-10 pb-12 max-sm:px-6">
          <Profile />
          <Experience />
          <Education />
          <Skills />
        </div>
      </div>
    </>
  )
}
