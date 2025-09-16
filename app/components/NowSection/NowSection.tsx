import { NumberedHeader } from "../NumberedHeader";

export function NowSection() {
  return (
    <div className="w-[100%] max-w-2xl flex flex-col gap-4">
      <NumberedHeader number={3} content="Now" />
      <p className="text-base text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci velit
        odio error impedit debitis molestiae quidem molestias iste dolor
        sapiente tempora cumque sunt at consectetur aliquid eveniet, quasi
        pariatur cum!
      </p>
    </div>
  );
}
