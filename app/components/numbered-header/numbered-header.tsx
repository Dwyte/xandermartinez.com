type NumberedHeaderProps = {
  number: number;
  content: string;
};

const roman = ["I", "II", "III", "IV"];

export function NumberedHeader({ number, content }: NumberedHeaderProps) {
  return (
    <h2 className="relative text-xl font-bold">
      <span className="absolute z-[-1] top-[25%] translate-y-[-50%] md:translate-x-[-50%] text-7xl font-serif bg-clip-text text-transparent bg-primary-1 saturate-0 brightness-10">
        {roman[number - 1]}
      </span>
      <span className="text-xl static text-primary-1 brightness-75 saturate-75">
        {content}
      </span>
    </h2>
  );
}
