import { HeroSection } from "@/components/sections/HeroSection"
import { PopularGamesSection } from "@/components/sections/PopularGamesSection"
import { MobileGamesSection } from "@/components/sections/MobileGamesSection"
import { PCGamesSection } from "@/components/sections/PCGamesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { HowToBuySection } from "@/components/sections/HowToBuySection"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <PopularGamesSection />
      <MobileGamesSection />
      <PCGamesSection />
      <AboutSection />
      <HowToBuySection />
    </div>
  )
}
