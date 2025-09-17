type ListProps = React.ComponentProps<"div">;

export function List({ children, ...rest }: ListProps) {
  return (
    <div
      {...rest}
      className="flex flex-col gap-6 text-gray-500 hover:text-gray-700 transition-colors"
    >
      {children}
    </div>
  );
}
