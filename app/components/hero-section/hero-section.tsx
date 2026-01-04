import { TITLE, LINKEDIN_URL, GITHUB_URL, HEADLINE } from "@/app/constants";
import { StyledA } from "../styled-a";
import { EmailPopover } from "../email-popover";

export function HeroSection() {
  return (
    <div className="section gap-2 mb-8">
      <h1 className="text-2xl leading-none text-neutral-500 font-serif">
        {TITLE}
      </h1>
      <p className="text-2xl">{HEADLINE}</p>
      <p className="text-lg text-neutral-500">
        Get in touch via <EmailPopover /> or{" "}
        <StyledA href={LINKEDIN_URL}>LinkedIn</StyledA>, see my code on{" "}
        <span className="whitespace-nowrap">
          <StyledA href={GITHUB_URL}>Github</StyledA>.
        </span>
      </p>
    </div>
  );
}
