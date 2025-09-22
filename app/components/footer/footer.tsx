"use client";

import { QUOTES, TITLE } from "@/app/constants";

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-start">
      <div className="h-[1px] w-full max-w-6xl bg-linear-to-r from-gray-700/0 via-50% via-gray-100/50 to-gray-700/0"></div>
      <div className="w-full max-w-4xl flex justify-between text-gray-600 py-6 opacity-75">
        <strong className="font-serif leading-none">{TITLE}</strong>
        <strong className="font-serif leading-none">
          {QUOTES[Math.floor(Math.random() * QUOTES.length)]}
        </strong>
      </div>
    </footer>
  );
}
