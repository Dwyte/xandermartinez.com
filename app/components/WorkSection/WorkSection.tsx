import { WORK_EXPRIENCES } from "@/app/constants";
import { NumberedHeader } from "../NumberedHeader";
import { List, ListItem } from "../List";

export function WorkSection() {
  return (
    <div className="section">
      <NumberedHeader number={1} content="Work" />
      <List className="flex flex-col gap-4">
        {WORK_EXPRIENCES.map((work) => (
          <ListItem key={work.id}>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold">
                {work.position} · {work.company}
              </h3>

              <p className="text-base">{work.summary}</p>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
