import ThemeSwitcher from './ThemeSwitcher'
import DownloadButton from './DownloadButton'

export default function HeaderActions() {
  return (
    <div className="absolute top-10 right-10 flex items-center gap-2 print:hidden max-sm:static max-sm:mt-4">
      <ThemeSwitcher />
      <DownloadButton />
    </div>
  )
}
