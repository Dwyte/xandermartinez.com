import { NumberedHeader } from "../components/NumberedHeader";
import { StyledLink } from "../components/StyledLink";
import { ProjectsTable } from "./components/projects-table";

export default function Project() {
  return (
    <div className="flex flex-col items-center pt-32 px-8 pb-16 lg:px-16">
      <div className="w-full max-w-7xl flex flex-col items-stretch gap-16 lg:flex-row lg:items-start lg:gap-32 justify-center">
        <StyledLink className="text-gray-500 text-lg" href="/" backwards>
          Back
        </StyledLink>

        <div className="flex flex-col gap-16 flex-1">
          <NumberedHeader number={2} content="Projects" />
          <ProjectsTable />
        </div>
      </div>
    </div>
  );
}
