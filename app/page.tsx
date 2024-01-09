import Hero from "@/components/Hero";
import SkillSlider from "@/components/SkillSlider";
import Experience from "@/components/Experience";


export default function Home() {
  return (
    <main className="pt-[25px] md:pt-[100px]">
      <Hero />
      <SkillSlider />
      services <br />
      who's behind <br />
      take a look at my portfolio <br />
      <Experience />
    </main>
  )
}
