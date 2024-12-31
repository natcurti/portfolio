import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonIcon/ButtonUp";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

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
