import clsx from "clsx";

import { A } from "@/app/components/A";

type ProjectRowProps = { project: SideProject; isSameYearAsPrev: boolean };

export function ProjectRow({ project, isSameYearAsPrev }: ProjectRowProps) {
  const title = project.url ? (
    <A href={project.url} className="py-4 px-4 ml-[-1em]">
      {project.title}
    </A>
  ) : (
    <div className="py-4">{project.title}</div>
  );

  const year = project.date.toLocaleDateString("en-US", {
    year: "numeric",
  });

  return (
    <div className="group/project flex flex-row gap-16">
      {/* Year. Only displayed on the first project (latest) of that year. */}
      <div
        className={clsx("py-4 min-w-9", {
          invisible: isSameYearAsPrev,
        })}
      >
        {year}
      </div>
      <div
        className={clsx("flex flex-row flex-1 gap-2", {
          "border-t-[1px] border-t-gray-800/50": isSameYearAsPrev,
        })}
      >
        {/* Project Title and Summary (displayed on hover) */}
        <div className="flex-1 md:max-w-75 md:min-w-75 relative">{title}</div>

        {/* Techstack */}
        <div className="hidden md:flex flex-1 py-4">
          <div className="hidden lg:block">{project.techstack?.join(", ")}</div>
          {/* Show the first one only as the screen shrinks. */}
          <div className="hidden md:block lg:hidden">
            {project.techstack?.[0]}
          </div>
        </div>

        {/* Project Links */}
        <div className="hidden sm:flex [&>*]:px-[0.5em]">
          {project.sourceUrl && <A href={project.sourceUrl}>Source</A>}
          {project.videoUrl && <A href={project.videoUrl}>Video</A>}
          {project.downloadUrl && <A href={project.downloadUrl}>Video</A>}
        </div>
      </div>
    </div>
  );
}
