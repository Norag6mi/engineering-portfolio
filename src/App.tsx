import Navbar from "@/components/layout/Navbar";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Projects from "@/sections/projects/Projects";
import Architecture from "@/sections/Architecture/Architecture";
import ScrollProgress from "./components/layout/ScrollProgress";
import Notes from "./sections/Notes/Notes";
import Footer from "./sections/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import BackToTop from "./components/common/BackToTop";

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Architecture />
        <Notes />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}

export default App;