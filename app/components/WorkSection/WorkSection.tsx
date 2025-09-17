import { WORK_EXPRIENCES } from "@/app/constants";
import { NumberedHeader } from "../NumberedHeader";
import { List, ListItem } from "../List";

export function WorkItem({ work }: { work: WorkExperience }) {
  const fromDateStr = work.fromDate.toLocaleDateString("en-US", {
    year: "numeric",
  });

  const toDateStr =
    typeof work.toDate === "string"
      ? work.toDate
      : work.toDate.toLocaleDateString("en-US", {
          year: "numeric",
        });

  return (
    <div className="group/work-item flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2 flex-row">
        <h3 className="text-lg font-semibold">{work.company}</h3>
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
      <NumberedHeader number={1} content="Work" />
      <List className="flex flex-col gap-4">
        {WORK_EXPRIENCES.map((work) => (
          <ListItem key={work.id}>
            <WorkItem work={work} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
