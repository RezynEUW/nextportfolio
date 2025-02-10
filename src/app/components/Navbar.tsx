"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@components/Logo";
import { User, Code2, Mail } from "lucide-react";
import Spinner from "@components/Spinner";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("info");
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLLIElement>(null);
  const workRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);

  const sections = {
    info: "about",
    work: "projects",
    contact: "contact",
  } as const;

  const handleSmoothScroll = (id: string, linkType: "info" | "work" | "contact") => {
    setActiveLink(linkType);
    setIsScrolling(true);
    
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const scrollY = window.scrollY;
      const threshold = window.innerHeight / 3;

      Object.entries(sections).forEach(([key, id]) => {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollY + threshold >= offsetTop && scrollY + threshold < offsetTop + offsetHeight) {
            setActiveLink(key as "info" | "work" | "contact");
          }
        }
      });

      const maxScroll = 100;
      const newOpacity = Math.min(scrollY / maxScroll, 1);
      setShadowOpacity(newOpacity);
    };

    let scrollTimeout: NodeJS.Timeout;
    const handleScrollEnd = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollEnd);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollEnd);
      clearTimeout(scrollTimeout);
    };
  }, [isScrolling, sections]); // Added sections as dependency

  const getIndicatorPosition = () => {
    const activeElement = {
      info: infoRef.current,
      work: workRef.current,
      contact: contactRef.current,
    }[activeLink];

    if (activeElement) {
      return {
        width: activeElement.offsetWidth,
        transform: `translateX(${activeElement.offsetLeft}px)`
      };
    }
    return {};
  };

  return (
    <>
      <Logo />

      <nav
        className="fixed top-4 right-4 z-50 px-2 py-1.5 flex items-center justify-center rounded-full backdrop-blur-sm bg-white/20 transition-shadow duration-300"
        style={{
          boxShadow: `0 4px 8px rgba(0, 0, 0, ${shadowOpacity * 0.05}), inset 0 0 10px rgba(255, 255, 255, ${shadowOpacity * 0.1})`,
        }}
      >
        <ul className="relative flex gap-5 font-fixelDisplay">
          <div
            ref={indicatorRef}
            className="absolute top-0 left-0 rounded-full pointer-events-none transition-all duration-500"
            style={{
              ...getIndicatorPosition(),
              height: '100%',
              background: "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: `0 2px 4px rgba(0, 0, 0, ${shadowOpacity * 0.05}), inset 0 0 10px rgba(255, 255, 255, 0.05)`,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />

          <li
            ref={infoRef}
            className="relative group transition-all duration-500"
          >
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(sections.info, "info");
              }}
              className="z-10 inline-flex items-center gap-2 px-6 py-1.5 rounded-full transition-all duration-500 text-black antialiased"
            >
              <User className="w-4 h-4" />
              <span className="text-xl">About</span>
            </a>
          </li>

          <li
            ref={workRef}
            className="relative group transition-all duration-500"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(sections.work, "work");
              }}
              className="z-10 inline-flex items-center gap-2 px-6 py-1.5 rounded-full transition-all duration-500 text-black antialiased"
            >
              <Code2 className="w-4 h-4" />
              <span className="text-xl">Stack</span>
            </a>
          </li>

          <li
            ref={contactRef}
            className="relative group transition-all duration-500"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleSmoothScroll(sections.contact, "contact");
              }}
              className="z-10 inline-flex items-center gap-2 px-6 py-1.5 rounded-full transition-all duration-500 text-black antialiased"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xl">Email</span>
            </a>
          </li>
        </ul>
      </nav>
      <Spinner />
    </>
  );
}