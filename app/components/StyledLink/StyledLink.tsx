import clsx from "clsx";
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right-icon lucide-arrow-right group-hover/styled-link:translate-x-[30%] transition-transform"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </Link>
  );
}
