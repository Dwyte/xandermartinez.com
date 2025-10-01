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
      className="bg-neutral-950 text-neutral-300 py-1 px-3 rounded-sm font-serif drop-shadow-black drop-shadow-md border-1 border-neutral-600 popover-content"
    >
      <TooltipArrow
        width={10}
        height={10}
        className="fill-neutral-950 stroke-neutral-600 stroke-2 -translate-y-0.25 [clip-path:_inset(1px_0_0_0)]"
      ></TooltipArrow>
      <span className="text-sm">{children}</span>
    </TooltipContent>
  );
}
