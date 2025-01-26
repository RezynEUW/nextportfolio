"use client";

import { useEffect, useRef, useState } from "react";

export default function CaseStudies() {
  const projects = [
    { id: 1, title: "Project 1", src: "/1.jpg" },
    { id: 2, title: "Project 2", src: "/2.jpg" },
    { id: 3, title: "Project 3", src: "/3.jpg" },
    { id: 4, title: "Project 4", src: "/4.jpg" },
  ];

  const [isVisible, setIsVisible] = useState(true); // Track visibility of the Projects text
  const projectsTextRef = useRef<HTMLHeadingElement>(null); // Ref for the Projects heading

  useEffect(() => {
    const handleScroll = () => {
      const textElement = projectsTextRef.current;
      if (!textElement) return;

      const rect = textElement.getBoundingClientRect();
      const isOutOfView = rect.top + rect.height < 0 || rect.bottom > window.innerHeight;

      setIsVisible(isOutOfView); // Update visibility based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="relative h-screen bg-white flex flex-col items-center">
      {/* Projects Text */}
      <h2
        ref={projectsTextRef}
        className={`absolute top-16 text-9xl font-fixelDisplay font-extrathin text-white z-10 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        Projects
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-4 w-full h-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative h-full w-full group overflow-hidden"
          >
            {/* Image */}
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:-translate-y-6 transition-transform duration-300"
            />

            {/* Title */}
            <div
              className="absolute bottom-0 left-0 text-2xl w-full bg-white text-black font-black text-left font-fixelDisplay px-8 py-6 transform translate-y-full group-hover:translate-y-0 opacity-100 group-hover:opacity-100 transition-all duration-500"
            >
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
