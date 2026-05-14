export default function Footer() {
  return (
    <footer className="flex flex-col justify-end items-center bg-primary text-bg p-4 gap-4">
      <div className="flex flex-row gap-4">
        <a className="icon-white" href="mailto:syarifhsb.dev@gmail.com" target="_blank" rel="noreferrer">
          <img src="/assets/icons/mail.svg" alt="Email" />
        </a>
        <a className="icon-white" href="https://github.com/syarifhsb" target="_blank" rel="noreferrer">
          <img src="/assets/icons/github.svg" alt="GitHub" />
        </a>
        <a className="icon-white" href="https://www.linkedin.com/in/syarifhasibuan/" target="_blank" rel="noreferrer">
          <img src="/assets/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a className="icon-white" href="https://x.com/syarif_hsb" target="_blank" rel="noreferrer">
          <img src="/assets/icons/twitter.svg" alt="X / Twitter" />
        </a>
      </div>
      <p>&copy; 2024 Syarif Hasibuan</p>
    </footer>
  )
}
