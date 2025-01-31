"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Spinner() {
  const spinnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spinnerElement = spinnerRef.current;

    if (spinnerElement) {
      gsap.to(spinnerElement, {
        rotation: -360,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div
      ref={spinnerRef}
      className="fixed bottom-5 right-5 z-50"
      style={{ pointerEvents: "none" }}
    >
      <svg
        className="w-16 h-16 text-black" // Add Tailwind classes to control size and color
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          d="M2 16s9-15 20-4C11 23 2 8 2 8"
          className="stroke-black" // Add class to control path color
        />
      </svg>
    </div>
  );
}