"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  return (
    <section className="relative h-screen flex justify-center items-center bg-background text-foreground">
      {/* Frosted SVG */}
      <div
        className="absolute bottom-0 w-full pointer-events-none overflow-hidden"
        style={{
          position: "absolute",
          inset: "auto 0 0 0", // Ensure alignment to bottom
          width: "100%", // Matches SVG height
        }}
      >
        <svg
          className="w-full h-full pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1050 158"
          fill="none"
        >
          <path
            d="M1 157H139.809H902.548H1049L898.524 145.275L874.928 76.5294H826.062H817.563L801.983 61.7059L786.402 76.5294H777.904L722.664 60.2941H712.04L693.627 20.3725L675.214 60.2941H661.758L612.183 40.5294H550.569L510.909 1L495.329 16.5294L479.748 1H348.73L332.441 40.5294V60.2941H282.867L272.952 70.1765H258.079L240.374 52.5294L222.669 70.1765H200.006L161.055 83.5882L143.055 145.784L1 157Z"
            fill="rgba(25, 25, 25, 0.3)" // Semi-transparent white for frosted look
            stroke="rgba(255, 255, 255, 0.5)" // White border for definition
            strokeWidth={2} // Slightly thicker stroke
            style={{
              background: "linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,1))", // Mimics frost
              maskImage: "linear-gradient(to top, black 50%)", // Fades out bottom
              WebkitMaskImage: "linear-gradient(to bottom, black 50%)", // Safari compatibility
              backdropFilter: "brightness(1.2) contrast(1.05)", // Enhances contrast without blur
              WebkitBackdropFilter: "brightness(1.2) contrast(1.05)", // Safari compatibility
            }}
          />
        </svg>
      </div>
    </section>
  );
}
