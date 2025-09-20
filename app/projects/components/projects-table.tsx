"use client";

import clsx from "clsx";

import { StyledList, StyledListItem } from "@/app/components/styled-list";
import { SIDE_PROJECTS } from "@/app/constants";
import { ProjectRow } from "./project-row";
import { useState } from "react";
import { ProjectTableHeader } from "./project-table-header";

export function ProjectsTable() {
  const [isShowSummary, setIsShowSummary] = useState(false);

  const sorted = SIDE_PROJECTS.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  return (
    <div>
      <ProjectTableHeader
        isShowSummary={isShowSummary}
        toggleThirdColumn={() => setIsShowSummary((prev) => !prev)}
      />
      <StyledList className="gap-0!">
        {sorted.map((project, index) => {
          const isSameYearAsPrev =
            sorted[index - 1]?.date.getUTCFullYear() ===
            project.date.getUTCFullYear();

          return (
            <StyledListItem
              className={clsx({
                "border-t-[1px] border-t-gray-800/50": !isSameYearAsPrev,
              })}
              key={project.id}
            >
              <ProjectRow
                project={project}
                isSameYearAsPrev={isSameYearAsPrev}
                isShowSummary={isShowSummary}
              />
            </StyledListItem>
          );
        })}
      </StyledList>
    </div>
  );
}
