"use client";

import { useState } from "react";
import clsx from "clsx";

type HoverRevealProps = React.ComponentPropsWithoutRef<"span">;

export function HoverReveal({
  children,
  className,
  ...rest
}: HoverRevealProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className={clsx(
        "transition-all ease-in",
        isActive ? "blur-none" : "blur-xs text-gray-500",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
