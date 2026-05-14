import Header from '../components/Header'
import Footer from '../components/Footer'

const projects = [
  {
    image: '/assets/images/full-flight-simulatoren.jpg',
    alt: 'Flight Simulator',
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
        I love working in the terminal. This is a tool that&apos;s inspired from my workflow. It is build with ncurses with C, and it is very simple. Check it out at:{' '}
        <a href="https://github.com/syarifhsb/csvr" target="_blank" rel="noreferrer">
          https://github.com/syarifhsb/csvr
        </a>
      </>
    ),
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen">
        <Header />

        <section className="bg-secondary text-bg flex-1 flex flex-col items-center px-4 py-8">
          <div className="flex flex-row flex-wrap-reverse justify-start items-center gap-[50px] flex-1 max-w-[1440px] w-full">
            <img
              className="h-[500px] w-[500px] max-w-full rounded-2xl object-contain my-5"
              src="/assets/images/myself.jpg"
              alt="It's me!"
            />
            <div className="max-w-[500px] flex-1 flex flex-col gap-4 items-start">
              <h1 className="text-3xl font-bold">
                Hey there!<br />Syarif Hasibuan here
              </h1>
              <p className="text-2xl">
                I am an aerospace engineer and a software engineer in one package. I am currently on my web development journey.
              </p>
              <a
                className="bg-accent hover:bg-accent-selection px-8 py-5 rounded-xl text-2xl font-bold no-underline text-primary"
                href="mailto:syarifhsb.dev@gmail.com"
              >
                Contact me
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="py-8 px-4 bg-bg text-secondary">
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl font-bold">My Projects</h2>
        </div>
        <div className="flex flex-wrap justify-evenly gap-8">
          {projects.map((p) => (
            <div key={p.title} className="w-full max-w-[380px] flex flex-col gap-4 p-5 rounded-2xl bg-highlight">
              <img className="aspect-[4/3] w-full h-auto object-cover rounded-xl" src={p.image} alt={p.alt} />
              <h3 className="text-2xl font-medium text-primary">{p.title}</h3>
              <p className="text-primary">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary text-bg flex flex-col items-center py-12 px-4">
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl font-bold">About</h2>
        </div>
        <div className="max-w-[780px] flex flex-col gap-4">
          <p>
            I am a versatile and technically skilled engineer with a solid foundation in Aircraft Systems, Control Systems,
            with a little bit of Computer Science. With over five years of experience on Airbus simulation platforms.
            I&apos;m currently working as a Simulation Engineer in Toulouse, France, where I develop aircraft systems
            simulation models using Matlab/Simulink, analyze the C codes, do testing and validation on Airbus simulation
            platforms, both real time and non-real time.
          </p>
          <p>
            Currently, I am embracing web development as a journey to get better at software development. The page you
            are currently seeing is the product of it. So, enjoy this presentation, and send me a feedback!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
