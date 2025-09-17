export function A({ children, ...rest }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className="decoration-1 underline underline-offset-4 hover:text-gray-200 transition-colors cursor-pointer inline-flex items-center"
      target="_blank"
      {...rest}
    >
      <span>{children} </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right inline"
      >
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    </a>
  );
}
