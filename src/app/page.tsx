import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <AboutMe />
      </main>
    </>
  );
}
