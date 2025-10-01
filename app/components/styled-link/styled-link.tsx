import { ArrowLeft, ArrowRight } from "lucide-react";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";

type StyledLinkProps = LinkProps & {
  children?: React.ReactNode;
  className?: string;
  backwards?: boolean;
};

export function StyledLink({
  children,
  className,
  backwards,
  ...rest
}: StyledLinkProps) {
  return (
    <Link
      {...rest}
      className={clsx(
        "group/styled-link focus-visible:underline hover:underline underline-offset-2 focus-visible:text-neutral-200 hover:text-neutral-200 inline-flex gap-1 items-center",
        className
      )}
    >
      {backwards && (
        <ArrowLeft
          stroke="currentColor"
          strokeWidth={2}
          width="1em"
          className="group-hover/styled-link:translate-x-[-30%] group-focus-within/styled-link:translate-x-[-30%] transition-transform"
        />
      )}

      {children}

      {!backwards && (
        <ArrowRight
          stroke="currentColor"
          strokeWidth={2}
          width="1em"
          className="group-hover/styled-link:translate-x-[30%] group-focus-within/styled-link:translate-x-[30%] transition-transform"
        />
      )}
    </Link>
  );
}
