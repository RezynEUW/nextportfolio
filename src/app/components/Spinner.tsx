"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Spinner() {
  const spinnerRef = useRef<HTMLDivElement>(null); // Ref for the rotating 'B'

  useEffect(() => {
    const spinnerElement = spinnerRef.current;

    if (spinnerElement) {
      gsap.to(spinnerElement, {
        rotation: -360, // Counterclockwise rotation
        ease: "none",
        scrollTrigger: {
          trigger: document.body, // Triggers on the entire page scroll
          start: "top top",
          end: "bottom bottom",
          scrub: true, // Sync with scroll
        },
      });
    }
  }, []);

  return (
    <div
      ref={spinnerRef}
      className="fixed bottom-5 right-5 z-50 text-black font-display text-5xl"
      style={{
        pointerEvents: "none", // Prevent interaction
      }}
    >
      B
    </div>
  );
}
