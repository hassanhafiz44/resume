import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
        <h1 className="text-6xl font-bold text-slate-800 dark:text-slate-100">404</h1>
        <p className="text-slate-500 dark:text-slate-400">This page doesn't exist.</p>
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          Go home
        </Link>
      </div>
    </>
  )
}
