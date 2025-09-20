import clsx from "clsx";

type HoverRevealProps = React.ComponentPropsWithoutRef<"span">;

export function HoverReveal({
  children,
  className,
  ...rest
}: HoverRevealProps) {
  return (
    <span
      className={clsx("blur-sm hover:blur-none transition-all", className)}
      {...rest}
    >
      {children}
    </span>
  );
}
