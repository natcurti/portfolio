import Header from "@/components/Header";
import SkillsSection from "@/components/Sections/SkillsSection";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer";
import ButtonUp from "@/components/ButtonIcon/ButtonUp";
import HeroSection from "@/components/HeroSection";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ButtonUp />
    </>
  );
}
