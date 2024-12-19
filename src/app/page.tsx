import AboutMe from "@/components/Sections/AboutMe";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";
import SkillsSection from "@/components/Sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <AboutMe />
        <SkillsSection />
      </main>
    </>
  );
}
