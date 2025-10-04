import React from "react";
import { Mail } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { EmailPopoverContent } from "./email-popover-content";

export function EmailPopover() {
  return (
    <Popover>
      <PopoverTrigger
        className={
          "inline-flex items-center gap-1 cursor-pointer focus-visible:text-neutral-100 hover:text-neutral-100 focus-visible:underline hover:underline underline-1 underline-offset-2"
        }
      >
        email
        <Mail stroke="currentColor" strokeWidth={2} width="1em" />
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          sideOffset={6}
          className="popover-content drop-shadow-md drop-shadow-black"
        >
          <EmailPopoverContent />
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
}
