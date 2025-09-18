import { TITLE, LINKEDIN_URL, GITHUB_URL } from "@/app/constants";
import { A } from "../A";
import { Email } from "../Email";

export function HeroSection() {
  return (
    <div className="section gap-2 mb-8">
      <h1 className="text-lg text-gray-500">{TITLE}</h1>
      <p className="text-2xl">
        Developing thoughtful web experiences — with precision, maintainability,
        and performance.
      </p>
      <p className="text-lg text-gray-500">
        Get in touch via <Email /> or <A href={LINKEDIN_URL}>LinkedIn</A>, see
        my code on <A href={GITHUB_URL}>Github</A>.
      </p>
    </div>
  );
}
