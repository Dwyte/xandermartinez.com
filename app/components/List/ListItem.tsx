import clsx from "clsx";

type ListItemProps = React.ComponentPropsWithoutRef<"div">;

export function ListItem({ children, ...rest }: ListItemProps) {
  return (
    <div
      {...rest}
      className={clsx("group/list-item hover:text-gray-100", rest.className)}
    >
      {children}
    </div>
  );
}
