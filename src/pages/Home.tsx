import StarBackground from "@/components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import About from "@/components/About"
import SkillsSection from "@/components/SkillsSection"
import ProjectSection from "@/components/ProjectSection"
import ContactSection from "@/components/ContactSection"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      
      {/* main content */}
      <main>
        <HeroSection />
        <About />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* footer */}
    </div>
  )
}

export default Home
