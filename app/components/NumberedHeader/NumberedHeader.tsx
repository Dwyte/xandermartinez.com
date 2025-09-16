type NumberedHeaderProps = {
  number: number | string;
  content: string;
};

export function NumberedHeader({ number, content }: NumberedHeaderProps) {
  return (
    <h2 className="relative text-6xl ml-[-42px]">
      <span className="font-mono font-bold text-gray-900">{number}</span>
      <span className="text-xl absolute font-bold top-[60%] translate-y-[-50%] translate-x-[-50%]">
        {content}
      </span>
    </h2>
  );
}
