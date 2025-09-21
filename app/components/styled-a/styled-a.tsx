import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";

export function StyledA({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...rest}
      className={clsx(
        "group/styled-a focus-visible:underline hover:underline underline-offset-2 focus-visible:text-gray-200 hover:text-gray-200 inline-flex items-center",
        rest.className
      )}
      target="_blank"
    >
      {children}
      <ArrowUpRight
        stroke="currentColor"
        strokeWidth={2}
        width="1em"
        className="group-hover/styled-a:translate-x-[20%] group-hover/styled-a:translate-y-[-20%] transition-transform"
      />
    </a>
  );
}
