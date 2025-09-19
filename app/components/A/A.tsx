import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

export function A({ children, ...rest }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...rest}
      className={clsx(
        "group/styled-a link hover:text-gray-200 inline-flex items-center gap-1",
        rest.className
      )}
      target="_blank"
    >
      <span>{children} </span>

      <ArrowUpRight
        stroke="currentColor"
        strokeWidth={2}
        width="1em"
        className="group-hover/styled-a:translate-x-[20%] group-hover/styled-a:translate-y-[-20%] transition-transform"
      />
    </a>
  );
}
