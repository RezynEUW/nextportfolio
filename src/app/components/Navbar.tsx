"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@components/Logo";
import { gsap } from "gsap";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("info"); // Default active link
  const indicatorRef = useRef<HTMLDivElement>(null); // Ref for the sliding indicator
  const infoRef = useRef<HTMLLIElement>(null); // Ref for Info link
  const workRef = useRef<HTMLLIElement>(null); // Ref for Work link

  const sections = {
    info: "about", // Matches the id in AboutSection.tsx
    work: "projects", // Matches the id in CaseStudies.tsx
    contact: "contact", // Matches the id in ContactSection.tsx
  };

  // Smooth scrolling to sections
  const handleSmoothScroll = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll observer to update the active link dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3; // Adjust threshold

      Object.entries(sections).forEach(([key, id]) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveLink(key);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Animate sliding indicator
  useEffect(() => {
    const indicator = indicatorRef.current;
    const activeElement =
      activeLink === "info" ? infoRef.current : workRef.current;

    if (indicator && activeElement) {
      const { offsetLeft, offsetWidth, offsetHeight } = activeElement;

      gsap.to(indicator, {
        x: offsetLeft,
        width: offsetWidth,
        height: offsetHeight,
        duration: 0.2, // Snappier transition
        ease: "power2.out", // Quicker easing
      });
    }
  }, [activeLink]);

  return (
    <>
      {/* Logo */}
      <Logo />

      {/* Frosted Navbar */}
      <nav
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[16%] max-w-3xl px-3 py-1 flex items-center justify-center rounded-full backdrop-blur-sm bg-white/20 shadow-lg border border-white/30"
      >
        <ul className="relative flex gap-5 font-fixelDisplay">
          {/* Sliding Indicator */}
          <div
            ref={indicatorRef}
            className="absolute top-0 left-0 rounded-full bg-black/5 pointer-events-none transition-all duration-200"
          ></div>

          {/* Info Link */}
          <li
            ref={infoRef}
            className="relative group transition-all duration-200"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(sections.info);
              }}
              className={`z-10 inline-flex text-8 items-center px-8 py-2 rounded-full transition-all duration-200 ${
                activeLink === "info" ? "text-black" : "text-black"
              }`}
            >
              Info
            </a>
          </li>

          {/* Work Link */}
          <li
            ref={workRef}
            className="relative group transition-all duration-200"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(sections.work);
              }}
              className={`z-10 inline-flex items-center px-8 py-2 rounded-full transition-all duration-200 ${
                activeLink === "work" ? "text-black" : "text-black"
              }`}
            >
              Work
            </a>
          </li>
        </ul>
      </nav>

      {/* "Get in Touch" Button */}
      <div className="fixed top-4 right-4 z-50">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll(sections.contact);
          }}
          className={`relative z-10 inline-flex items-center px-8 py-3 rounded-full transition-all duration-200 bg-white/20 backdrop-blur-sm shadow-lg border border-white/30 ${
            activeLink === "contact" ? "text-black font-fixelDisplay" : "text-black font-fixelDisplay"
          }`}
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
