import HeaderActions from './HeaderActions'

export default function Header() {
  return (
    <div className="header">
      <h1>Muhammad Hassan Javed</h1>
      <div className="title">PHP Laravel Developer</div>
      <div className="contact">
        <span>Lahore, Punjab, Pakistan</span>
        <a href="tel:+923056292104">+923056292104</a>
        <a href="mailto:hassanhafiz44@gmail.com">hassanhafiz44@gmail.com</a>
      </div>
      <HeaderActions />
    </div>
  )
}
