import React from "react";
import { Mail } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { EmailPreview } from "./email-preview";

export function EmailLink() {
  return (
    <Popover>
      <PopoverTrigger
        className={
          "inline-flex items-center gap-1 cursor-pointer focus-visible:text-gray-100 hover:text-gray-100 focus-visible:underline hover:underline underline-1 underline-offset-2"
        }
      >
        email
        <Mail stroke="currentColor" strokeWidth={2} width="1em" />
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent
          sideOffset={4}
          className="popover-content drop-shadow-md drop-shadow-black"
        >
          <EmailPreview />
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
}
