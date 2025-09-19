import clsx from "clsx";

import { ListItem, List } from "@/app/components/List";
import { SIDE_PROJECTS } from "@/app/constants";
import { ProjectRow } from "./project-row";

export function ProjectsTable() {
  const sorted = SIDE_PROJECTS.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div>
      <div className="flex gap-2 pb-2 pr-2 font-semibold text-gray-700">
        <div className="min-w-9 mr-14">Year</div>
        <div className="flex-1 md:max-w-75 md:min-w-75">Project</div>
        <div className="flex-1 hidden md:block">Built with</div>
        <div className="hidden sm:block">Links</div>
      </div>
      <List className="gap-0!">
        {sorted.map((project, index) => {
          const isSameYearAsPrev =
            sorted[index - 1]?.date.getUTCFullYear() ===
            project.date.getUTCFullYear();

          return (
            <ListItem
              className={clsx({
                "border-t-[1px] border-t-gray-800/50": !isSameYearAsPrev,
              })}
              key={project.id}
            >
              <ProjectRow
                project={project}
                isSameYearAsPrev={isSameYearAsPrev}
              />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
