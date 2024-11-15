import Hero from "@/components/Hero";
import SkillSlider from "@/components/SkillSlider";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import ScrollSpy from "@/components/ScrollSpy";

export default function Home() {
  return (
    <main className="pt-[25px] md:pt-[100px]">
      <ScrollSpy />
      <Hero />
      <SkillSlider />
      <About />
      <Experience />
      <Portfolio />
    </main>
  )
}
