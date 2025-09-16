import { HeroSection } from "./components/HeroSection";
import { WorkSection } from "./components/WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-32 px-8 gap-12">
      <HeroSection />
      <WorkSection />
    </div>
  );
}
