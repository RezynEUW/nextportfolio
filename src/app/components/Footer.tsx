"use client";

import { Mail, Linkedin, ArrowUp, Map, Clock } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  const techStack = [
    "Next.js 15",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Lucide Icons"
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: "hello@lukashedstrom.com",
      href: "mailto:hello@lukashedstrom.com",
      isExternal: false
    },
    {
      icon: Linkedin,
      label: "Lukas Hedström",
      href: "https://linkedin.com/in/lukashedstrom",
      isExternal: true
    }
  ];

  const getCurrentTime = () => {
    const now = new Date();
    const swedenTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Stockholm" }));
    return swedenTime.toLocaleTimeString("en-US", { 
      hour: "numeric", 
      minute: "2-digit",
      hour12: false 
    });
  };

  const scrollToTop = () => {
    gsap.to(window, { 
      duration: 0.7, 
      scrollTo: { y: 0 }, 
      ease: "power3.inOut" 
    });
  };

  return (
    <footer className="min-h-[80vh] bg-gradient-to-b from-gray-900 to-gray-800 text-white relative flex flex-col justify-end overflow-hidden">
      {/* SVG Break-in Effect */}
      <div className="absolute top-[-8px] left-0 right-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1050 158"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
          style={{
            display: "block",
            transform: "rotate(180deg)",
          }}
        >
          <path
            d="M1 157H139.809H902.548H1049L898.524 145.275L874.928 76.5294H826.062H817.563L801.983 61.7059L786.402 76.5294H777.904L722.664 60.2941H712.04L693.627 20.3725L675.214 60.2941H661.758L612.183 40.5294H550.569L510.909 1L495.329 16.5294L479.748 1H348.73L332.441 40.5294V60.2941H282.867L272.952 70.1765H258.079L240.374 52.5294L222.669 70.1765H200.006L161.055 83.5882L143.055 145.784L1 157Z"
            fill="white"
            stroke="none"
          />
        </svg>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-display font-bold">
                Lukas Hedström
                <span className="block text-sm text-gray-400 font-normal mt-1">
                  [heːdˈstrøm] • Heath-Stream
                </span>
              </h3>
              <div className="flex flex-col gap-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Map className="w-4 h-4" />
                  <span>Umeå, Sweden</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Local time: {getCurrentTime()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              Built With
            </h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded-full text-sm text-gray-300 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="p-2 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Discrete Back to Top Banner */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-0 left-0 right-0 bg-white/5 hover:bg-white/10 
        py-2 px-4 flex items-center justify-center gap-2 text-gray-300 
        hover:text-white transition-colors group"
      >
        <span className="text-sm">Back to Top</span>
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}