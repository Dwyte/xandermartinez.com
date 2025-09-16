import { TITLE } from "./constants";

export default function Home() {
  return (
    <div className="flex items-center justify-center px-8">
      <div className="max-w-2xl pt-32 flex flex-col gap-2">
        <h1 className="text-lg text-gray-500">{TITLE}</h1>
        <p className="text-2xl">
          Developing thoughtful web experiences — with precision,
          maintainability, and performance.
        </p>
        <p className="text-lg text-gray-500">
          Get in touch via Email or LinkedIn, see my code on Github.
        </p>
      </div>
    </div>
  );
}
