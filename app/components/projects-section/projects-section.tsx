import { SIDE_PROJECTS } from "@/app/constants";
import { NumberedHeader } from "../numbered-header";
import { StyledA } from "../styled-a";
import { StyledList, StyledListItem } from "../styled-list";
import { StyledLink } from "../styled-link";

export function ProjectsSection() {
  return (
    <div className="section">
      <NumberedHeader number={2} content="Projects" />
      <StyledList className="items-start">
        {SIDE_PROJECTS.slice(0, 3).map((project) => (
          <StyledListItem key={project.id}>
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold font-serif text-gray-400 group-hover/list:text-gray-600 group-hover/list-item:text-gray-100">
                <StyledA href={project.url}>{project.title}</StyledA>
              </h3>
              <p>{project.summary}</p>
            </div>
          </StyledListItem>
        ))}

        <StyledLink className="text-sm" href="/projects">
          View Full Archive
        </StyledLink>
      </StyledList>
    </div>
  );
}
