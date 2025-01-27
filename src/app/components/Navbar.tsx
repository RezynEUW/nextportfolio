"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@components/Logo";
import { gsap } from "gsap";
import { MessageCircle } from "lucide-react"; // Importing from Lucide
import Spinner from "@components/Spinner";

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
        className="fixed top-4 left-1/2 transform antialiased -translate-x-1/2 z-50 max-w-3xl px-2 py-2 flex items-center justify-center rounded-full backdrop-blur-sm bg-white/20 shadow border border-white/30"
        style={{
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.05), inset 0 0 10px rgba(255, 255, 255, 0.10)", // Inner and outer shadow combined
        }}
      >
        <ul className="relative flex gap-5 font-fixelDisplay">
          {/* Sliding Indicator with Glass Effect */}
          <div
            ref={indicatorRef}
            className="absolute top-0 left-0 rounded-full pointer-events-none transition-all duration-200"
            style={{
              background:
                "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))", // Subtle frosted effect
              border: "1px solid rgba(255, 255, 255, 0.3)", // Glass border effect
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05), inset 0 0 10px rgba(255, 255, 255, 0.05)", // Frosted glow
              backdropFilter: "blur(10px)", // Frosted effect
              WebkitBackdropFilter: "blur(10px)", // For Safari
            }}
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
              className={`z-10 inline-flex text-xl items-center px-8 py-2 rounded-full transition-all duration-200 ${
                activeLink === "info"
                  ? "text-black antialiased"
                  : "text-black antialiased"
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
              className={`z-10 inline-flex text-xl items-center px-8 py-2 rounded-full transition-all duration-200 ${
                activeLink === "work"
                  ? "text-black antialiased"
                  : "text-black antialiased"
              }`}
            >
              Work
            </a>
          </li>
        </ul>
      </nav>

      {/* "Contact" Button */}
      <div
        className="fixed top-5 right-5 z-50 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30"
        style={{
          boxShadow:
            "0 4px 8px rgba(0, 0, 0, 0.05), inset 0 0 10px rgba(255, 255, 255, 0.10)", // Same shadow as the navbar
        }}
      >
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleSmoothScroll(sections.contact);
          }}
          className="relative z-10 inline-flex text-xl items-center transition-all duration-200 text-black font-fixelDisplay"
        >
          <MessageCircle className="w-5 h-5 mr-2 text-current" />
          Contact
        </a>
      </div>
      <Spinner />
    </>
  );
}
