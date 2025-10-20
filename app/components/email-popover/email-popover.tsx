import React from "react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

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
        <EnvelopeClosedIcon />
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
