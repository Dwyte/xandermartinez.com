import clsx from "clsx";

type ListProps = React.ComponentProps<"div">;

export function StyledList({ children, ...rest }: ListProps) {
  return (
    <div
      {...rest}
      className={clsx(
        "group/list flex flex-col gap-6 text-neutral-500 hover:text-neutral-700 transition-colors",
        rest.className
      )}
    >
      {children}
    </div>
  );
}
