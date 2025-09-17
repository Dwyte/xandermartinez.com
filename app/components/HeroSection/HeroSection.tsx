import { TITLE, EMAIL_URL, LINKEDIN_URL, GITHUB_URL } from "@/app/constants";
import { A } from "../A";

export function HeroSection() {
  return (
    <div className="section gap-2">
      <h1 className="text-lg text-gray-500">{TITLE}</h1>
      <p className="text-2xl">
        Developing thoughtful web experiences — with precision, maintainability,
        and performance.
      </p>
      <p className="text-lg text-gray-500">
        Get in touch via <A href={EMAIL_URL}>Email</A> or{" "}
        <A href={LINKEDIN_URL}>LinkedIn</A>, see my code on{" "}
        <A href={GITHUB_URL}>Github</A>.
      </p>
    </div>
  );
}
