export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-start">
      <div className="h-[1px] w-full max-w-6xl bg-linear-to-r from-gray-700/0 via-50% via-gray-100/50 to-gray-700/0"></div>
      <div className="w-full max-w-4xl flex justify-between text-gray-600 py-6 opacity-75 text-sm">
        <strong className="font-extralight">Let your mind wander.</strong>
        <p>
          Built with <strong>Next.js</strong> & <strong>Tailwind</strong>
        </p>
      </div>
    </footer>
  );
}
