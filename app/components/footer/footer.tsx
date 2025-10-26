"use client";

import { useEffect, useState } from "react";
import { QUOTES, TITLE } from "@/app/constants";

export function Footer() {
  const [quote, setQuote] = useState<null | string>(null);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, []);

  return (
    <footer className="w-full flex flex-col items-center justify-start">
      <div className="h-[1px] w-full max-w-6xl bg-linear-to-r from-neutral-700/0 via-50% via-neutral-100/50 to-neutral-700/0"></div>
      <div className="w-full max-w-4xl flex justify-between text-neutral-600 py-6 opacity-75">
        <strong className="font-serif leading-none shrink-0">{TITLE}</strong>
        <strong className="font-serif leading-none text-right">{quote}</strong>
      </div>
    </footer>
  );
}
