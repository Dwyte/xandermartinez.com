"use client";

import { EMAIL } from "@/app/constants";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { CheckCheck, ClipboardCopy, SendHorizonal } from "lucide-react";
import { useState, useRef } from "react";
import { StyledRadixTooltipContent } from "../styled-radix-tooltip-content";

export function EmailPreview() {
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeout = useRef<number>(0);

  async function handleCopyEmail(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    try {
      setIsCopied(false);
      await navigator.clipboard.writeText(EMAIL);
      setIsCopied(true);

      clearTimeout(copyTimeout.current);
      copyTimeout.current = window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      console.error("Failed to copy email.");
    }
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div
        ref={previewRef}
        className="flex text-neutral-400 bg-neutral-950 fade-in"
      >
        <Tooltip>
          <TooltipTrigger
            onClick={handleCopyEmail}
            className="px-4 py-2 border-neutral-600 border-1 mr-1 hover:border-neutral-300 hover:text-neutral-300 flex items-center gap-2 cursor-pointer"
          >
            {isCopied ? (
              <CheckCheck
                stroke="currentColor"
                strokeWidth={2}
                width="1em"
                className="fade-in"
              />
            ) : (
              <ClipboardCopy
                stroke="currentColor"
                strokeWidth={2}
                width="1em"
                className="fade-in"
              />
            )}
            {EMAIL}
          </TooltipTrigger>

          <StyledRadixTooltipContent side="bottom" sideOffset={6}>
            Copy to clipboard
          </StyledRadixTooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={`mailto:${EMAIL}`}
              target="_blank"
              className="flex items-center px-3 py-2 border-1 border-neutral-600 bg-gradient-to-r from-neutral-950 to-neutral-800 cursor-pointer hover:border-neutral-300 hover:text-neutral-200"
            >
              <SendHorizonal
                stroke="currentColor"
                width="1em"
                strokeWidth={2}
              />
            </a>
          </TooltipTrigger>
          <StyledRadixTooltipContent side="bottom" sideOffset={6}>
            Send an email
          </StyledRadixTooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
