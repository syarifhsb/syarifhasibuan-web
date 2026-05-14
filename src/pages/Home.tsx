import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const projects = [
  {
    index: '01',
    title: 'Aircraft Simulation',
    description:
      '7+ years building real-time aircraft systems simulation models. Covers Flight Control Systems (FCS), Autopilot, Engines, and TCAS — including ARINC 429 and AFDX data bus integration. Work Package Leader managing a team of four engineers. Stack: MATLAB/Simulink, SCADE, C, Jenkins, SVN/Git.',
    link: null,
  },
  {
    index: '02',
    title: "Conway's Game of Life",
    description: "Recreation of Conway's Game of Life built with C and SDL2.",
    link: 'https://github.com/syarifhsb/gameoflife',
  },
  {
    index: '03',
    title: 'csvr',
    description: 'Terminal CSV reader built with ncurses and C. Inspired by a real workflow need.',
    link: 'https://github.com/syarifhsb/csvr',
  },
  {
    index: '04',
    title: 'awqat',
    description: "Prayer times in the terminal. Written in C, powered by the Aladhan API. For terminal users who don't want to leave their workflow.",
    link: 'https://github.com/syarifhsb/awqat',
  },
  {
    index: '05',
    title: 'AnythingBudget',
    description: 'Full-stack personal finance web app — budget tracking, authentication, real-time data. Built and shipped end-to-end. Stack: React, TypeScript, tRPC, Prisma, PostgreSQL.',
    link: 'https://anythingbudget.com',
  },
  {
    index: '06',
    title: 'This website',
    description: 'Personal site built with Vite, React, TypeScript, and Tailwind v4.',
    link: 'https://github.com/syarifhsb/syarifhasibuan-web',
  },
]

const uses = [
  { category: 'OS', items: [{ label: 'Daily driver', value: 'Arch Linux' }] },
  { category: 'Shell', items: [{ label: 'Shell', value: 'zsh' }] },
  {
    category: 'Languages',
    items: [
      { label: 'Systems', value: 'C' },
      { label: 'Simulation', value: 'MATLAB / Simulink, SCADE' },
      { label: 'Web', value: 'TypeScript, React' },
      { label: 'Scripting', value: 'Python, Bash' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { label: 'Build tool', value: 'Vite' },
      { label: 'Package manager', value: 'Bun' },
      { label: 'Version control', value: 'Git, SVN' },
      { label: 'CI/CD', value: 'Jenkins' },
    ],
  },
]

function ProjectList() {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <ul className="flex flex-col">
      {projects.map(({ index, title, description, link }) => {
        const isOpen = expanded === index
        return (
          <li key={index} className="border-b border-border">
            <button
              onClick={() => setExpanded(isOpen ? null : index)}
              className="w-full flex items-center gap-4 py-4 text-left group"
            >
              <span className="text-muted text-sm w-6 shrink-0">{index}</span>
              <span className="text-text text-base font-bold flex-1 group-hover:text-accent transition-colors">
                {title}
              </span>
              <span className="text-muted text-sm">{isOpen ? '−' : '+'}</span>
            </button>

            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden">
                <div className="flex gap-4 pb-5">
                  <span className="w-6 shrink-0" />
                  <div className="flex flex-col gap-2">
                    <p className="text-muted text-base leading-relaxed">{description}</p>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted hover:text-accent transition-colors"
                      >
                        {link.replace('https://', '')} →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <div className="px-6 max-w-2xl mx-auto w-full">

          {/* Hero */}
          <section id="home" className="py-16">
            <h1 className="text-3xl font-bold text-text mb-2">Syarif Hasibuan</h1>
            <p className="text-accent mb-6">Software Developer</p>
            <p className="text-muted leading-relaxed mb-6">
              I build software — web apps, terminal tools, and everything in between.
              Also a simulation engineer in aerospace.
            </p>
            <a href="mailto:syarifhsb.dev@gmail.com" className="text-accent hover:underline text-base" onClick={(e) => { e.preventDefault(); window.open('mailto:syarifhsb.dev@gmail.com') }}>
              &gt; contact me
            </a>
          </section>

          {/* Projects */}
          <section id="projects" className="py-16 border-t border-border">
            <h2 className="text-xs text-muted uppercase tracking-widest mb-8">Projects</h2>
            <ProjectList />
          </section>

          {/* Uses */}
          <section id="uses" className="py-16 border-t border-border">
            <h2 className="text-xs text-muted uppercase tracking-widest mb-8">Uses</h2>
            <div className="flex flex-col gap-10">
              {uses.map(({ category, items }) => (
                <div key={category}>
                  <h3 className="text-accent font-bold text-base mb-4">{category}</h3>
                  <ul className="flex flex-col gap-3">
                    {items.map(({ label, value }) => (
                      <li key={label} className="flex gap-4 text-base border-b border-border pb-3">
                        <span className="text-muted w-32 shrink-0">{label}</span>
                        <span className="text-text">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>


        </div>
      </main>

      <Footer />
    </div>
  )
}
