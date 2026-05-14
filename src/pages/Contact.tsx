import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <section className="flex-grow flex flex-col items-center bg-bg px-4 py-8">
        <h2 className="text-3xl font-bold text-secondary p-2">Contact me</h2>
        <div className="flex flex-col bg-secondary p-5 rounded-xl gap-4 w-full sm:w-[512px] my-5">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col border-2 bg-highlight focus-within:border-yellow-500 rounded-lg pl-3.5 pr-1.5 py-1.5">
              <label htmlFor="full-name" className="text-sm text-secondary">Name:</label>
              <input type="text" id="full-name" name="full-name" className="bg-transparent focus:outline-none" />
            </div>
            <div className="flex flex-col border-2 bg-highlight focus-within:border-yellow-500 rounded-lg pl-3.5 pr-1.5 py-1.5">
              <label htmlFor="email" className="text-sm text-secondary">Email:</label>
              <input type="email" id="email" name="email" className="bg-transparent focus:outline-none" />
            </div>
            <div className="flex flex-col border-2 bg-highlight focus-within:border-yellow-500 rounded-lg pl-3.5 pr-1.5 py-1.5">
              <label htmlFor="message" className="text-sm text-secondary">Message:</label>
              <textarea id="message" name="message" rows={10} className="bg-transparent focus:outline-none resize-none" />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-accent hover:bg-accent-selection text-primary text-lg font-semibold rounded-lg px-6 py-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}
