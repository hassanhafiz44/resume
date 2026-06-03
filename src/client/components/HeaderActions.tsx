import ThemeSwitcher from './ThemeSwitcher'
import DownloadButton from './DownloadButton'

export default function HeaderActions() {
  return (
    <div className="header-actions">
      <ThemeSwitcher />
      <DownloadButton />
    </div>
  )
}
