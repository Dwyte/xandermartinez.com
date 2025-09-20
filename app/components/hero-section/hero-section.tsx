import { TITLE, LINKEDIN_URL, GITHUB_URL } from "@/app/constants";
import { StyledA } from "../styled-a";
import { EmailLink } from "../email-link";

export function HeroSection() {
  return (
    <div className="section gap-2 mb-8">
      <h1 className="text-2xl leading-none text-gray-500 font-serif">
        {TITLE}
      </h1>
      <p className="text-2xl">
        Developing thoughtful web experiences — with precision, maintainability,
        and performance.
      </p>
      <p className="text-lg text-gray-500">
        Get in touch via <EmailLink /> or{" "}
        <StyledA href={LINKEDIN_URL}>LinkedIn</StyledA>, see my code on{" "}
        <StyledA href={GITHUB_URL}>Github</StyledA>.
      </p>
    </div>
  );
}
