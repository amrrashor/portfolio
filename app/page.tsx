import Hero from "@/components/Hero";
import SkillSlider from "@/components/SkillSlider";
import Experience from "@/components/Experience";
import About from "@/components/About";


export default function Home() {
  return (
    <main className="pt-[25px] md:pt-[100px]">
      <Hero />
      <SkillSlider />
      <About />
      <Experience />
      <div>take a look at my portfolio</div>
    </main>
  )
}
