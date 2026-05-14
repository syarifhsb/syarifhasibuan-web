export default function Footer() {
  return (
    <footer className="flex flex-row items-center justify-between px-6 py-4 border-t border-border">
      <div className="flex flex-row gap-4">
        <a className="icon-white opacity-60 hover:opacity-100 transition-opacity" href="mailto:syarifhsb.dev@gmail.com" target="_blank" rel="noreferrer">
          <img src="/assets/icons/mail.svg" alt="Email" className="w-4 h-4" />
        </a>
        <a className="icon-white opacity-60 hover:opacity-100 transition-opacity" href="https://github.com/syarifhsb" target="_blank" rel="noreferrer">
          <img src="/assets/icons/github.svg" alt="GitHub" className="w-4 h-4" />
        </a>
        <a className="icon-white opacity-60 hover:opacity-100 transition-opacity" href="https://www.linkedin.com/in/syarifhasibuan/" target="_blank" rel="noreferrer">
          <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
        </a>
        <a className="icon-white opacity-60 hover:opacity-100 transition-opacity" href="https://x.com/syarif_hsb" target="_blank" rel="noreferrer">
          <img src="/assets/icons/twitter.svg" alt="X" className="w-4 h-4" />
        </a>
      </div>
      <p className="text-muted text-xs">&copy; 2025 Syarif Hasibuan</p>
    </footer>
  )
}
