import type { ReactNode } from 'react'

export default function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="text-[11px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 pb-2 border-b-2 border-slate-200 dark:border-slate-700 mb-5">
      {children}
    </div>
  )
}
