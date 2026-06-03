import type { Job as JobData } from '../data/experience'

export default function Job({ title, company, location, dates, bullets }: JobData) {
  return (
    <div className="mb-7 last:mb-0">
      <div className="flex justify-between items-baseline flex-wrap gap-1 max-sm:flex-col">
        <div>
          <span className="text-base font-semibold text-slate-900 dark:text-slate-50">{title}</span>
          <span className="mx-1.5 text-slate-300 dark:text-slate-600">·</span>
          <span className="text-[15px] font-medium text-blue-600 dark:text-blue-400">{company}</span>
        </div>
        <div className="flex gap-4 items-baseline">
          <span className="text-[13px] text-slate-400 dark:text-slate-500">{location}</span>
          <span className="text-[13px] text-slate-400 dark:text-slate-500 whitespace-nowrap">{dates}</span>
        </div>
      </div>
      <ul className="mt-2.5 ml-4 list-disc space-y-1">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-sm text-slate-500 dark:text-slate-400 leading-[1.65]">{bullet}</li>
        ))}
      </ul>
    </div>
  )
}
