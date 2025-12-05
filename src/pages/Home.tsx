import HeroSection from '../components/sections/HeroSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'

export default function Home() {
  return (
    <div className="relative bg-white pt-20">
      <HeroSection />
      <div className="grid-background">
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  )
}
