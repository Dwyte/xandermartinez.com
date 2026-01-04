import { StyledA } from "../styled-a";
import { HoverReveal } from "../hover-reveal";
import { ContentHeading } from "../content-heading";

export function NowSection() {
  return (
    <section className="section leading-relaxed text-neutral-600 [&_strong]:font-normal [&_strong]:text-neutral-100">
      <ContentHeading prefix={"III"} title="Now" />
      <div>
        <p className="font-serif text-sm text-secondary-1 brightness-75 saturate-75 font-bold">
          As of Jan 2026
        </p>
        <div className="[&>p]:mb-4">
          <p>
            After years of freelancing and building my own ventures, I learned a
            crucial lesson
            <br />
            <span className="text-neutral-400">
              —I can move fast alone, but I can go much further with a team.
            </span>
          </p>
          <p>
            <strong>
              While I value the independence of entrepreneurship, I realized
              I’ve been missing the collaborative friction and shared knowledge
              that only exist in high-performance engineering cultures. I am
              ready to immerse myself in a collaborative team where I can tackle
              complex problems at scale.
            </strong>
          </p>
          <p>
            Currently,{" "}
            <strong>
              I am deep diving into integrating AI APIs{" — "}
              <HoverReveal>
                hoping robots don&apos;t replace me just yet lol
              </HoverReveal>
              {" — "}
              and NestJS, expanding my technical toolkit and preparing to
              contribute to a team where iron sharpens iron.
            </strong>
          </p>
          <p>
            When I&apos;m AFK, I&apos;m learning balance by being physically
            active,{" "}
            <HoverReveal>
              trying to undo years of &quot;shrimp posture&quot;
            </HoverReveal>
            , investing in the people I care about, and treating my health as
            seriously as my work.
          </p>
          <p>
            <strong>
              I&apos;m currently open to roles where I can build impactful
              software and contribute to a high-performance team.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
