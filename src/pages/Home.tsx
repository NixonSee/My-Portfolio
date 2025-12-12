import HeroSection from '../components/sections/HeroSection'
import SkillsSection from '../components/sections/SkillsSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import InteractiveGrid from '../components/InteractiveGrid'

export default function Home() {
  return (
    <div className="relative bg-white pt-20">
      <HeroSection />
      <InteractiveGrid>
        <SkillsSection />
        <ProjectsSection />
      </InteractiveGrid>
    </div>
  )
}
