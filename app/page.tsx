import { Footer } from "./components/footer";
import { HeroSection } from "./components/hero-section";
import { NowSection } from "./components/now-section";
import { ProjectsSection } from "./components/projects-section";
import { WorkSection } from "./components/work-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-8">
      <div className="fade-out-overlay"></div>
      <div className="flex flex-col py-42 gap-20">
        <HeroSection />
        <div className="flex flex-col max-w-2xl gap-20 sm:flex-row sm:gap-16">
          <WorkSection />
          <ProjectsSection />
        </div>
        <NowSection />
      </div>
      <Footer />
    </div>
  );
}
