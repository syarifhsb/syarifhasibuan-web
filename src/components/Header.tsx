import { Link } from 'react-router'

export default function Header() {
  return (
    <header className="flex flex-wrap flex-row justify-center bg-primary text-bg p-2">
      <div className="flex-1 flex flex-wrap flex-col sm:flex-row justify-between items-center max-w-[1440px] gap-4">
        <Link to="/" className="flex flex-row justify-center items-center text-2xl font-black text-bg hover:text-bg-selection p-2 gap-2">
          <img src="/favicon.svg" alt="logo" className="w-8 h-8" />
          <span>Syarif Hasibuan</span>
        </Link>

        <nav className="flex items-center p-2">
          <ul className="flex flex-wrap flex-row justify-center text-xl text-bg gap-4 list-none p-0">
            <li><Link className="hover:text-bg-selection" to="/">Home</Link></li>
            <li><Link className="hover:text-bg-selection" to="/projects">Projects</Link></li>
            <li><Link className="hover:text-bg-selection" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
