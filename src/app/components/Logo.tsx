"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Logo() {
  const logoRef = useRef<HTMLDivElement>(null);
  const brandingRef = useRef<HTMLDivElement>(null);
  const logoSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const heroSection = document.querySelector("section"); // Assuming Hero is the first <section>
    const aboutSection = document.querySelector("#about"); // About section

    if (!heroSection || !aboutSection) return;

    const handleScroll = () => {
      const heroRect = heroSection.getBoundingClientRect();
      const aboutRect = aboutSection.getBoundingClientRect();

      const isHeroOutOfView = heroRect.bottom <= 0;
      const isAboutOutOfView = aboutRect.bottom <= 0; // Trigger on "About" being out of view

      // Show/hide logo and branding
      if (isHeroOutOfView) {
        // Show Logo and Hide Branding
        gsap.to(logoRef.current, {
          autoAlpha: 1,
          x: 0, // Slide in from the left
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(brandingRef.current, {
          autoAlpha: 0,
          x: -50, // Slide out to the left
          duration: 1,
          ease: "power2.out",
        });
      } else {
        // Show Branding and Hide Logo
        gsap.to(logoRef.current, {
          autoAlpha: 0,
          x: 50, // Slide out to the right
          duration: 1,
          ease: "power2.out",
        });
        gsap.to(brandingRef.current, {
          autoAlpha: 1,
          x: 0, // Slide in from the left
          duration: 1,
          ease: "power2.out",
        });
      }

      // Change Logo SVG Color
      if (isAboutOutOfView) {
        gsap.to(logoSvgRef.current, {
          color: "white", // Set logo to white when "About" is out of view
          duration: 1.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(logoSvgRef.current, {
          color: "black", // Default to black when "About" is in view
          duration: 1.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Hero Page Branding */}
      <div
        ref={brandingRef}
        className="fixed top-4 left-4 z-50 opacity-1"
        style={{ visibility: "visible", transform: "translateX(0)" }}
      >
        <div className="relative z-10 inline-flex items-center px-8 py-4 rounded-full text-black transition-all duration-500 bg-white/20 backdrop-blur-sm shadow-lg dark:bg-black/20 border border-white/30 dark:border-black/30">
          <span
            className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400/10 via-gray-400/10 to-transparent
              opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></span>
          <span className="relative z-10 text-xl font-fixelDisplay font-">Lukas</span><span className="relative z-10 text-xl font-fixelDisplay whitespace-pre"> Hedström</span>
        </div>
      </div>

      {/* Logo (Appears after Hero) */}
      <div
        ref={logoRef}
        className="fixed top-4 left-4 z-50 opacity-0"
        style={{ visibility: "hidden", transform: "translateX(-50px)" }}
      >
        <Link href="/">
          <svg
            ref={logoSvgRef}
            className="w-24 h-auto text-current"
            width="520"
            height="312"
            viewBox="0 0 650 390"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
          <path
          d="M0 0H130V130H0V0ZM0 130H130V260H0V130ZM130 130H260V260H130V130ZM260 130H390V260H260V130ZM260 0H390V130H260V0ZM390 130H520V260H390V130ZM520 130H650V260H520V130ZM520 0H650V130H520V0ZM520 260H650V390H520V260ZM260 260H390V390H260V260Z"
          fill="currentColor"
          />
        </svg>
        </Link>
      </div>
    </>
  );
}
