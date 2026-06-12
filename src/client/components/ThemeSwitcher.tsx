import { useState, useEffect, useLayoutEffect } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

function getMode(): ThemeMode {
  const value = localStorage.getItem('theme')
  return value === 'light' || value === 'dark' ? value : 'system'
}

function applyDark(mode: ThemeMode) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = mode === 'dark' || (mode === 'system' && prefersDark)
  document.documentElement.classList.toggle('dark', isDark)
  // Keep data-theme for anti-FOUC script compatibility
  if (mode === 'system') {
    document.documentElement.removeAttribute('data-theme')
  } else {
    document.documentElement.setAttribute('data-theme', mode)
  }
}

const btnBase = 'inline-flex items-center justify-center w-8 h-[26px] rounded border-none cursor-pointer transition-colors'
const btnInactive = 'bg-transparent text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'
const btnActive = 'bg-white dark:bg-slate-600 text-slate-900 dark:text-slate-100 shadow-sm'

export default function ThemeSwitcher() {
  const [mode, setMode] = useState<ThemeMode>('system')

  // Corrects the SSR-rendered 'system' default to the stored preference
  // before paint, avoiding both a hydration mismatch and a visible flicker.
  useLayoutEffect(() => {
    setMode(getMode())
  }, [])

  function handleSetTheme(next: ThemeMode) {
    if (next === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', next)
    }
    applyDark(next)
    setMode(next)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const current = getMode()
      if (current === 'system') applyDark('system')
      setMode(current)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <div className="inline-flex items-center bg-slate-200 dark:bg-slate-700 rounded-md p-0.5 gap-0.5" role="group" aria-label="Theme">
      <button onClick={() => handleSetTheme('light')} className={`${btnBase} ${mode === 'light' ? btnActive : btnInactive}`} aria-label="Light mode">
        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      </button>
      <button onClick={() => handleSetTheme('dark')} className={`${btnBase} ${mode === 'dark' ? btnActive : btnInactive}`} aria-label="Dark mode">
        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>
      <button onClick={() => handleSetTheme('system')} className={`${btnBase} ${mode === 'system' ? btnActive : btnInactive}`} aria-label="System theme">
        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      </button>
    </div>
  )
}
