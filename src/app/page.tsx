import Header from "@/components/Header";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonIcon/ButtonUp";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ButtonUp />
    </>
  );
}
