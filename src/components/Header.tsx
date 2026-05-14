const links = [
  { href: '#projects', label: 'projects' },
  { href: '#uses', label: 'uses' },
  { href: 'mailto:syarifhsb.dev@gmail.com', label: 'contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-primary flex flex-wrap items-center justify-between px-6 py-2 border-b border-border">
      <a href="#" className="hover:opacity-80 transition-opacity">
        <img src="/assets/icons/terminal.gif" alt="terminal" className="w-[60px] h-[60px]" />
      </a>
      <nav>
        <ul className="flex flex-wrap gap-4 list-none p-0 m-0">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-muted hover:text-accent text-sm transition-colors"
                onClick={href.startsWith('mailto:') ? (e) => { e.preventDefault(); window.open(href) } : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
