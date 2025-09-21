import { ArrowLeftRight } from "lucide-react";

type ProjectTableHeaderProps = {
  isShowSummary: boolean;
  toggleThirdColumn: () => void;
};

export function ProjectTableHeader({
  isShowSummary,
  toggleThirdColumn,
}: ProjectTableHeaderProps) {
  return (
    <div className="flex gap-2 pb-2 pr-2 font-semibold text-gray-700">
      <div className="min-w-9 mr-14">Year</div>
      <div className="flex-1 md:max-w-75 md:min-w-75">Project</div>
      <div className="flex-1 hidden md:block text-left">
        <button
          onClick={toggleThirdColumn}
          className="cursor-pointer hover:brightness-150 transition-all"
        >
          {isShowSummary ? "About" : "Built with"}{" "}
          <ArrowLeftRight
            stroke="currentColor"
            width="1em"
            className="inline"
          />{" "}
          <span className="text-gray-800">
            {isShowSummary ? "Built with" : "About"}
          </span>
        </button>
      </div>
      <div className="hidden sm:block">Links</div>
    </div>
  );
}
