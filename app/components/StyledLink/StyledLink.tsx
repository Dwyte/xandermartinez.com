import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link, { LinkProps } from "next/link";

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
        "group/styled-link hover:text-gray-200 inline-flex gap-1 items-center",
        className
      )}
    >
      {backwards && (
        <ArrowLeft
          stroke="currentColor"
          strokeWidth={2}
          width="1em"
          className="group-hover/styled-link:translate-x-[-30%] transition-transform"
        />
      )}

      {children}

      {!backwards && (
        <ArrowRight
          stroke="currentColor"
          strokeWidth={2}
          width="1em"
          className="group-hover/styled-link:translate-x-[30%] transition-transform"
        />
      )}
    </Link>
  );
}
