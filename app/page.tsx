import Hero from "@/components/Hero";
import SkillSlider from "@/components/SkillSlider";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <main className="pt-[25px] md:pt-[100px]">
      <Hero />
      <SkillSlider />
      <div>whos behind all this great work</div>
      <Experience />
      <div>take a look at my portfolio</div>
    </main>
  )
}
