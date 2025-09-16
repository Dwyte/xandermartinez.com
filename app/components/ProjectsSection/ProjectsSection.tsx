import { SIDE_PROJECTS } from "@/app/constants";
import { NumberedHeader } from "../NumberedHeader";
import { A } from "../A";

export function ProjectsSection() {
  return (
    <div className="w-[100%] max-w-2xl flex flex-col gap-4">
      <NumberedHeader number={2} content="Projects" />
      <div className="flex flex-col gap-4">
        {SIDE_PROJECTS.map((project) => (
          <div className="flex flex-col gap-2" key={project.id}>
            <h3 className="text-lg text-gray-400">
              <A href={project.liveUrl}>{project.title}</A>
            </h3>
            <p className="text-gray-500">{project.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
