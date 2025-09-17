import clsx from "clsx";

export function A({ children, ...rest }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={clsx(
        "group/styled-a link hover:text-gray-200",
        rest.className
      )}
      target="_blank"
      {...rest}
    >
      <span>{children} </span>

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
        className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right group-hover/styled-a:translate-x-[20%] group-hover/styled-a:translate-y-[-20%] transition-transform"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </a>
  );
}
