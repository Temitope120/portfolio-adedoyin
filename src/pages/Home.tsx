import StarBackground from "@/components/StarBackground"
import ThemeToggle from "../components/ThemeToggle"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
     {/* Theme toggle */}
     <ThemeToggle />
     {/* background effects */}

    <StarBackground /> 

     {/* navbar */}
     <Navbar />
     {/* main content */}
     {/* footer */}
    </div>
  )
}

export default Home
