import Hero from "@/components/Hero";
import SkillSlider from "@/components/SkillSlider";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  return (
    <main className="pt-[25px] md:pt-[100px]">
      <Hero />
      <SkillSlider />
      <About />
      <Experience />
      <Portfolio />
    </main>
  )
}
