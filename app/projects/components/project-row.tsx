import clsx from "clsx";

import { StyledA } from "@/app/components/styled-a";

type ProjectRowProps = {
  project: SideProject;
  isSameYearAsPrev: boolean;
  isShowSummary: boolean;
};

export function ProjectRow({
  project,
  isSameYearAsPrev,
  isShowSummary,
}: ProjectRowProps) {
  const title = project.url ? (
    <StyledA href={project.url} className="py-4 px-4 ml-[-1em]">
      {project.title}
    </StyledA>
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
        className={clsx("py-4 min-w-9 group-hover/list-item:text-gray-400", {
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
        <div className="flex-1 md:max-w-75 md:min-w-75 relative text-gray-100 group-hover/list:text-gray-500 group-hover/list-item:text-gray-100">
          {title}
        </div>

        {/* Techstack */}
        <div className="hidden md:flex flex-1 py-4 group-hover/list-item:text-gray-400">
          {isShowSummary && project.summary}

          {!isShowSummary && (
            <>
              <div className="hidden lg:block">
                {project.techstack?.join(", ")}
              </div>
              {/* Show the first one only as the screen shrinks. */}
              <div className="hidden md:block lg:hidden">
                {project.techstack?.[0]}
              </div>
            </>
          )}
        </div>

        {/* Project Links */}
        <div className="hidden sm:flex [&>*]:px-[0.5em] group-hover/list-item:text-gray-400">
          {project.videoUrl && <StyledA href={project.videoUrl}>Video</StyledA>}
          {project.apkUrl && <StyledA href={project.apkUrl}>APK</StyledA>}
          {project.sourceUrl && (
            <StyledA href={project.sourceUrl}>Source</StyledA>
          )}{" "}
        </div>
      </div>
    </div>
  );
}
