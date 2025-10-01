type NumberedHeaderProps = {
  number: number;
  content: string;
};

export function NumberedHeader({ number, content }: NumberedHeaderProps) {
  return (
    <h2 className="relative text-xl font-bold">
      <span className="absolute z-[-1] left-[-42] top-[25%] translate-[-50%] translate-x-[-50%] text-7xl font-mono bg-clip-text text-transparent bg-linear-to-l from-primary-1 via-50% via-gray-primary-1/30 to-primary-1/0 saturate-0 brightness-10">
        {number.toString(2).padStart(4, "0")}
      </span>
      <span className="text-xl static text-primary-1 brightness-50">
        {content}
      </span>
    </h2>
  );
}
