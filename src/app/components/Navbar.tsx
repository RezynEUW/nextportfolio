"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Logo from "@components/Logo";
import { User, Briefcase, Mail } from "lucide-react";
import Spinner from "@components/Spinner";
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("info");
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mounted, setMounted] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLLIElement>(null);
  const workRef = useRef<HTMLLIElement>(null);
  const contactRef = useRef<HTMLLIElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const sections = useMemo(() => ({
    info: "about",
    work: "projects",
    contact: "contact",
  } as const), []);

  const handleSmoothScroll = (id: string, linkType: "info" | "work" | "contact") => {
    setActiveLink(linkType);
    setIsScrolling(true);
    
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (pathname === '/about') return;

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
  }, [isScrolling, sections, pathname]);

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

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <>
      <Logo />
      {pathname !== '/about' && (
        <nav
          className={`fixed top-4 right-4 z-50 h-auto px-2 py-1.5 flex items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300
          max-sm:fixed max-sm:bottom-4 max-sm:top-auto max-sm:right-auto max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:h-fit ${
            isDark ? 'bg-white/10 hover:bg-white/15' : 'bg-white/20 hover:bg-white/25'
          }`}
          style={{
            boxShadow: isDark
              ? `0 4px 12px rgba(0, 0, 0, ${shadowOpacity * 0.25}), inset 0 0 12px rgba(255, 255, 255, ${shadowOpacity * 0.1})`
              : `0 4px 12px rgba(0, 0, 0, ${shadowOpacity * 0.15}), inset 0 0 12px rgba(255, 255, 255, ${shadowOpacity * 0.2})`,
          }}
        >
          <ul className="relative flex gap-5 font-fixelDisplay">
            <div
              ref={indicatorRef}
              className="absolute top-0 left-0 rounded-full pointer-events-none transition-all duration-500"
              style={{
                ...getIndicatorPosition(),
                height: '100%',
                background: isDark
                  ? "linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))"
                  : "linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: isDark
                  ? `0 0px 10px rgba(0, 0, 0, ${shadowOpacity * 0.2}), inset 0 0 12px rgba(255, 255, 255, 0.1)`
                  : `0 0px 10px rgba(0, 0, 0, ${shadowOpacity * 0.1}), inset 0 0 12px rgba(255, 255, 255, 0.15)`,
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
                className="z-10 inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300"
                title="About"
              >
                <User 
                  className={`w-6 h-6 transition-colors duration-800 ${
                    activeLink === "info" 
                      ? isDark ? 'text-indigo-400' : 'text-indigo-700'
                      : isDark ? 'text-blue-400' : 'text-blue-500'
                  }`}
                  style={{ filter: isDark 
                    ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))' 
                    : 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                  }} 
                />
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
                className="z-10 inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300"
                title="Stack"
              >
                <Briefcase 
                  className={`w-6 h-6 transition-colors duration-800 ${
                    activeLink === "work" 
                      ? isDark ? 'text-indigo-400' : 'text-indigo-700'
                      : isDark ? 'text-blue-400' : 'text-blue-500'
                  }`}
                  style={{ filter: isDark 
                    ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))' 
                    : 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                  }}
                />
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
                className="z-10 inline-flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-300"
                title="Email"
              >
                <Mail 
                  className={`w-6 h-6 transition-colors duration-800 ${
                    activeLink === "contact" 
                      ? isDark ? 'text-indigo-400' : 'text-indigo-700'
                      : isDark ? 'text-blue-400' : 'text-blue-500'
                  }`}
                  style={{ filter: isDark 
                    ? 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))' 
                    : 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))'
                  }}
                />
              </a>
            </li>
          </ul>
        </nav>
      )}
      <Spinner />
    </>
  );
}