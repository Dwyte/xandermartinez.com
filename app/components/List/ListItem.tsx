type ListItemProps = React.ComponentPropsWithoutRef<"div">;

export function ListItem({ children, ...rest }: ListItemProps) {
  return (
    <div {...rest} className="hover:text-gray-100">
      {children}
    </div>
  );
}
