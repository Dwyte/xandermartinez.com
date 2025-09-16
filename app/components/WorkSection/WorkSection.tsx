import { WORK_EXPRIENCES } from "@/app/constants";
import { NumberedHeader } from "../NumberedHeader";

export function WorkSection() {
  return (
    <div className="w-[100%] max-w-2xl flex flex-col gap-4">
      <NumberedHeader number={"01"} content="Work" />
      <div className="flex flex-col gap-4">
        {WORK_EXPRIENCES.map((work) => (
          <div className="flex flex-col gap-2" key={work.id}>
            <h3 className="text-xl">{work.company}</h3>
            <p className="text-gray-500">{work.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
