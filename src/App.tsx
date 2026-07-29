import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Gallery from "./components/Gallery";
import GitHubProjects from "./components/GitHubProjects";
import Resume from "./components/Resume";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[var(--ink)] text-[var(--cream)] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Gallery />
      <GitHubProjects />
      <Resume />
      <Chat />
      <Footer />
    </div>
  );
}
