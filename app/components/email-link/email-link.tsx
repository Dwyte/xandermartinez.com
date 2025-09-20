"use client";

import React, { useEffect, useRef, useState } from "react";
import { Mail, SendHorizonal } from "lucide-react";
import clsx from "clsx";

import { EMAIL } from "@/app/constants";

function isMouseEventWithinRect(ev: MouseEvent, rect: DOMRect) {
  const evWithinRectX = ev.pageX >= rect.x && ev.pageX <= rect.x + rect.width;
  const evWithinRectY = ev.pageY >= rect.y && ev.pageY <= rect.y + rect.height;
  return evWithinRectX && evWithinRectY;
}

export function EmailLink() {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const previewRef = useRef<HTMLElement | null>(null);

  const [isActive, setIsActive] = useState(false);
  const [isPreviewMounted, setIsPreviewMounted] = useState(false);

  const previewTimeout = useRef<number>(0);

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
          "inline-flex items-center gap-1 cursor-pointer hover:text-gray-100"
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
          <span className="px-4 py-2 border-gray-600 border-1 mr-1 hover:border-gray-300 hover:text-gray-300">
            {EMAIL}
          </span>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center px-3 py-2 border-1 border-gray-600 bg-gradient-to-r from-gray-950 to-gray-800 cursor-pointer hover:border-gray-300 hover:text-gray-200"
          >
            <SendHorizonal stroke="currentColor" width="1em" strokeWidth={2} />
          </a>
        </span>
      )}
    </span>
  );
}
