type Props = {
  title: string;
  prefix?: React.ReactNode;
  headerTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export function ContentHeading({
  title,
  prefix = null,
  headerTag = "h2",
}: Props) {
  const HeaderTag = headerTag;

  return (
    <HeaderTag className="relative text-xl font-bold font-serif">
      <span className="absolute z-[-1] top-[25%] translate-y-[-50%] md:translate-x-[-50%] text-7xl text-primary-1 saturate-0 brightness-10">
        {prefix}
      </span>
      <span className="text-2xl static text-primary-1 brightness-75 saturate-75">
        {title}
      </span>
    </HeaderTag>
  );
}
