// HomePageA.tsx — uses Editorial / Magazine Highlights (light theme)
import Hero from '../comps/Hero2'
import HighlightsB from '../comps/HighlightsB'
import ProjectsB from '../comps/ProjectsB'
import ContactForm from '../comps/ContactForm'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'

export default function HomePageA() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />

        {/* ✦ Highlights — Editorial style (light, diamond shapes) */}
        <HighlightsB/>

        <ProjectsB />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}