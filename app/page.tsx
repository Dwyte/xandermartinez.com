import { HeroSection } from "./components/HeroSection";
import { NowSection } from "./components/NowSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { WorkSection } from "./components/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-42 px-8 gap-12">
      <HeroSection />
      <WorkSection />
      <ProjectsSection />
      <NowSection />
    </div>
  );
}
