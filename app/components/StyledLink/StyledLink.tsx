import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Link, { LinkProps } from "next/link";

type StyledLinkProps = LinkProps & {
  children?: React.ReactNode;
  className?: string;
};

export function StyledLink({ children, className, ...rest }: StyledLinkProps) {
  return (
    <Link
      {...rest}
      className={clsx("group/styled-link link hover:text-gray-200", className)}
    >
      {children}

      <ArrowRight
        stroke="currentColor"
        strokeWidth={2}
        width="1em"
        className="group-hover/styled-link:translate-x-[30%] transition-transform"
      />
    </Link>
  );
}
