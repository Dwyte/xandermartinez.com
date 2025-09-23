"use client";

import React, { useEffect, useRef, useState } from "react";
import { CheckCheck, ClipboardCopy, Mail, SendHorizonal } from "lucide-react";
import clsx from "clsx";

import { EMAIL } from "@/app/constants";

function isMouseEventWithinRect(ev: MouseEvent, rect: DOMRect) {
  const evWithinRectX = ev.pageX >= rect.x && ev.pageX <= rect.x + rect.width;
  const evWithinRectY = ev.pageY >= rect.y && ev.pageY <= rect.y + rect.height;
  return evWithinRectX && evWithinRectY;
}

export function EmailLink() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  const [isActive, setIsActive] = useState(false);
  const [isPreviewMounted, setIsPreviewMounted] = useState(false);

  const [isCopied, setIsCopied] = useState(false);

  const previewTimeout = useRef<number>(0);
  const copyTimeout = useRef<number>(0);

  async function handleCopyEmail(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    try {
      setIsCopied(false);
      await navigator.clipboard.writeText(EMAIL);
      setIsCopied(true);

      clearTimeout(copyTimeout.current);
      copyTimeout.current = window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      console.error("Failed to copy email.");
    }
  }

  function hidePreview() {
    setIsActive(false);
    previewTimeout.current = window.setTimeout(
      () => setIsPreviewMounted(false),
      300
    );
  }

  function showPreview() {
    clearTimeout(previewTimeout.current);
    setIsPreviewMounted(true);
    requestAnimationFrame(() => setIsActive(true));
  }

  useEffect(() => {
    const handleDeactivate = (ev: MouseEvent) => {
      if (!previewRef.current || !buttonRef.current) return;

      const previewRect = previewRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();

      if (
        !isMouseEventWithinRect(ev, previewRect) &&
        !isMouseEventWithinRect(ev, buttonRect)
      ) {
        hidePreview();
      }
    };

    document.addEventListener("mousedown", handleDeactivate);
    return () => document.removeEventListener("mousedown", handleDeactivate);
  }, []);

  return (
    <span className="relative">
      <button
        ref={buttonRef}
        onClick={isActive ? hidePreview : showPreview}
        className={
          "inline-flex items-center gap-1 cursor-pointer focus-visible:text-gray-100 hover:text-gray-100 focus-visible:underline hover:underline underline-1 underline-offset-2"
        }
      >
        Email
        <Mail stroke="currentColor" strokeWidth={2} width="1em" />
      </button>

      {isPreviewMounted && (
        <span
          ref={previewRef}
          className={clsx(
            "flex text-gray-400 bg-gray-950 absolute bottom-[-54px] left-[50%] translate-x-[-50%] transition-all duration-300",
            isActive
              ? "translate-y-[0%] opacity-100"
              : "translate-y-[-10%] opacity-0"
          )}
        >
          <button
            onClick={handleCopyEmail}
            className="px-4 py-2 border-gray-600 border-1 mr-1 hover:border-gray-300 hover:text-gray-300 flex items-center gap-2 cursor-pointer"
          >
            {isCopied ? (
              <CheckCheck
                stroke="currentColor"
                strokeWidth={2}
                width="1em"
                className="fade-in"
              />
            ) : (
              <ClipboardCopy
                stroke="currentColor"
                strokeWidth={2}
                width="1em"
                className="fade-in"
              />
            )}
            {EMAIL}
          </button>
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            className="flex items-center px-3 py-2 border-1 border-gray-600 bg-gradient-to-r from-gray-950 to-gray-800 cursor-pointer hover:border-gray-300 hover:text-gray-200"
          >
            <SendHorizonal stroke="currentColor" width="1em" strokeWidth={2} />
          </a>
        </span>
      )}
    </span>
  );
}
