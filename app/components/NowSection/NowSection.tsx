import { A } from "../A";
import { HoverReveal } from "../hover-reveal";
import { NumberedHeader } from "../NumberedHeader";

export function NowSection() {
  return (
    <section className="section leading-relaxed text-gray-600 [&_strong]:font-normal [&_strong]:text-gray-100">
      <NumberedHeader number={3} content="Now" />
      <div className="[&>p]:mb-4">
        <p>
          Running my own business taught me valuable lessons, but it also
          reminded me where I do my best work—
          <span className="text-gray-400">
            &nbsp;creating solutions through software.
          </span>
        </p>
        <p>
          Now,{" "}
          <strong>
            I&apos;m piecing things together again, focused on getting back into
            tech
          </strong>
          ,{" "}
          <HoverReveal>
            and crossing my fingers I&apos;m not too late in this AI-driven
            world.
          </HoverReveal>{" "}
          <strong>
            Showing up daily: refining my fundamentals and exploring new
            technologies. Focused on what matters,{" "}
            <A
              href="https://jamesclear.com/continuous-improvemena"
              className="inline"
            >
              improving 1% each day
            </A>
          </strong>
          ,{" "}
          <HoverReveal>
            and reminding myself of this whenever I feel behind.
          </HoverReveal>
        </p>
        <p>
          When I&apos;m AFK, I&apos;m learning balance by being physically
          active, investing in the people I care about, and treating my health
          as seriously as my work.
        </p>
        <p>
          <strong>
            Along the way, I&apos;m open to opportunities where I can learn,
            grow, and contribute.
          </strong>
        </p>
      </div>
    </section>
  );
}
