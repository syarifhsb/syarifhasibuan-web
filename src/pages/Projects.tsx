import Header from '../components/Header'
import Footer from '../components/Footer'

const projects = [
  {
    image: '/assets/images/full-flight-simulatoren.jpg',
    alt: 'Flight Simulation',
    title: 'Aircraft Simulation',
    description:
      'I build Aircraft Simulation model on my daily work. Particularly on Flight Control System and Navigation system. I do development on Matlab/Simulink, C code analysis, deployment, verification and validation on Airbus Simulation Platform.',
  },
  {
    image: '/assets/images/game-of-life.gif',
    alt: "Conway's Game of Life",
    title: "Conway's Game of Life in C",
    description: (
      <>
        Recreation of Conway&apos;s Game of Life built with C and Simple DirectMedia Layer (SDL2). Check it out at:{' '}
        <a href="https://github.com/syarifhsb/gameoflife" target="_blank" rel="noreferrer">
          https://github.com/syarifhsb/gameoflife
        </a>
      </>
    ),
  },
  {
    image: '/assets/images/demo-csvr.gif',
    alt: 'csvr - A CLI csv reader',
    title: 'csvr - A CLI csv reader',
    description: (
      <>
        I love working in the terminal. This is a tool that&apos;s inspired from my workflow. It is build with ncurses
        with C, and it is very simple. Check it out at:{' '}
        <a href="https://github.com/syarifhsb/csvr" target="_blank" rel="noreferrer">
          https://github.com/syarifhsb/csvr
        </a>
      </>
    ),
  },
]

export default function Projects() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-1 flex flex-col items-center bg-secondary px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-bg p-2 w-full mb-5">My Projects</h2>
        <div className="flex flex-wrap justify-evenly gap-8 w-full">
          {projects.map((p) => (
            <div key={p.title} className="flex flex-col gap-4 bg-bg max-w-[380px] w-full p-5 rounded-2xl">
              <img
                src={p.image}
                className="aspect-[4/3] object-cover border-2 border-highlight w-full h-auto rounded-xl"
                alt={p.alt}
              />
              <h3 className="text-2xl text-primary font-medium">{p.title}</h3>
              <p className="text-primary">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
