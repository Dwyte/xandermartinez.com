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
        "transition-all",
        isActive ? "blur-none" : "blur-sm",
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
