import {
  TooltipContent,
  TooltipArrow,
  TooltipContentProps,
} from "@radix-ui/react-tooltip";

export function StyledRadixTooltipContent({
  children,
  ...rest
}: TooltipContentProps) {
  return (
    <TooltipContent
      {...rest}
      className="bg-gray-950 text-gray-300 py-1 px-3 rounded-sm font-serif drop-shadow-black drop-shadow-md border-1 border-gray-600 popover-content"
    >
      <TooltipArrow
        width={10}
        height={10}
        className="fill-gray-950 stroke-gray-600 stroke-2 -translate-y-0.25 [clip-path:_inset(1px_0_0_0)]"
      ></TooltipArrow>
      <span className="text-sm">{children}</span>
    </TooltipContent>
  );
}
