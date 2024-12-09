import Navbar from "./Components/Navbar";
import { HeroSection } from "./Components/HeroSection";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { Recommendations } from "./Components/Recommendations";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <HeroSection />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Recommendations />
      <Contact />
    </div>
  );
}
