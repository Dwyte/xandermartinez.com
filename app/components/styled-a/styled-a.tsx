import clsx from "clsx";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export function StyledA({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...rest}
      className={clsx(
        "group/styled-a focus-visible:underline hover:underline underline-offset-2 focus-visible:text-neutral-200 hover:text-neutral-200 inline-flex items-center",
        rest.className,
      )}
      target="_blank"
    >
      {children}
      <ArrowTopRightIcon className="group-hover/styled-a:translate-x-[20%] group-hover/styled-a:translate-y-[-20%] group-focus-visible/styled-a:translate-y-[-20%] group-focus-visible/styled-a:translate-x-[20%] transition-transform" />
    </a>
  );
}
