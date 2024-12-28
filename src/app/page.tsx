import AboutMe from "@/components/Sections/AboutMe";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import SkillsSection from "@/components/Sections/SkillsSection";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <AboutMe />
        <SkillsSection />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
