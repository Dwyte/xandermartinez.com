export function A({ children, ...rest }: React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className="underline underline-offset-2 hover:text-gray-200 transition-colors cursor-pointer"
      target="_blank"
      {...rest}
    >
      {children}
    </a>
  );
}
