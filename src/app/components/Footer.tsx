"use client";

import { Mail, Linkedin, ArrowUp } from "lucide-react";

export default function Footer() {
  const techStack = [
    "Next.js 14",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GSAP",
    "Lucide Icons"
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="h-[50vh] bg-gray-800 text-white relative flex flex-col justify-end overflow-hidden">
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

      {/* Rest of the footer remains the same */}
      <div className="relative w-full max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-bold">
                Lukas Hedström
                <span className="block text-sm text-gray-400 font-normal mt-1">
                  [heːdˈstrøm] • Heath-Stream
                </span>
              </h3>
              <p className="text-gray-400 max-w-sm">
                Stationed in Umeå, Sweden. Open for summer internships, master thesis opportunities, 
                and future employment.
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:lukas@heathstream.dev" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>lukas@heathstream.dev</span>
              </a>
              <a href="https://linkedin.com" 
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button with Tooltip */}
      <div className="group absolute top-8 right-8">
        <button
          onClick={scrollToTop}
          className="p-2 bg-white/10 rounded-full 
            hover:bg-white/20 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 
          whitespace-nowrap px-2 py-1 rounded bg-white/10 text-sm
          opacity-0 group-hover:opacity-100 transition-opacity">
          Back to top
        </span>
      </div>
    </footer>
  );
}