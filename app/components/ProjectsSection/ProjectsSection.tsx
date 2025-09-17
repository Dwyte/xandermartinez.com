import { SIDE_PROJECTS } from "@/app/constants";
import { NumberedHeader } from "../NumberedHeader";
import { A } from "../A";
import { List, ListItem } from "../List";

export function ProjectsSection() {
  return (
    <div className="section">
      <NumberedHeader number={2} content="Projects" />
      <List>
        {SIDE_PROJECTS.map((project) => (
          <ListItem key={project.id}>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">
                <A href={project.liveUrl}>{project.title}</A>
              </h3>
              <p>{project.summary}</p>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
