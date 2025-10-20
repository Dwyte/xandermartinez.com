import { WORK_EXPRIENCES } from "@/app/constants";
import { StyledList, StyledListItem } from "../styled-list";
import { StyledA } from "../styled-a";
import { ContentHeading } from "../content-heading";

function WorkItem({ work }: { work: WorkExperience }) {
  const fromDateStr = work.fromDate.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const toDateStr =
    typeof work.toDate === "string"
      ? work.toDate
      : work.toDate.toLocaleDateString("en-US", {
          year: "numeric",
        });

  const header = work.url ? (
    <StyledA href={work.url}>{work.company}</StyledA>
  ) : (
    work.company
  );

  return (
    <div className="group/work-item flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2 flex-row">
        <h3 className="text-xl font-serif font-semibold text-neutral-400 group-hover/list:text-neutral-600 group-hover/list-item:text-neutral-100">
          {header}
        </h3>
        <p className="mt-1 opacity-0 text-xs group-hover/work-item:opacity-100 transition-opacity">
          {fromDateStr} – {toDateStr}
        </p>
      </div>

      <p className="text-base">{work.summary}</p>
    </div>
  );
}

export function WorkSection() {
  return (
    <div className="section">
      <ContentHeading prefix={"I"} title="Work" />
      <StyledList className="items-start">
        {WORK_EXPRIENCES.map((work) => (
          <StyledListItem key={work.id}>
            <WorkItem work={work} />
          </StyledListItem>
        ))}
      </StyledList>
    </div>
  );
}
