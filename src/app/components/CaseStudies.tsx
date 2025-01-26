"use client";

import { useEffect, useRef, useState } from "react";

export default function CaseStudies() {
  const projects = [
    { id: 1, title: "Project 1", src: "/1.jpg" },
    { id: 2, title: "Project 2", src: "/2.jpg" },
    { id: 3, title: "Project 3", src: "/3.jpg" },
    { id: 4, title: "Project 4", src: "/4.jpg" },
  ];

  return (
    <section id="projects" className="relative h-screen bg-white flex flex-col items-center">
      {/* Image Grid */}
      <div className="grid grid-cols-4 w-full h-full px-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative h-full w-full group overflow-hidden"
          >
            {/* Frame with padding */}
            <div className="h-full w-full py-4 px-2 bg-white box-border">
              {/* Image Container with overflow-hidden */}
              <div className="h-full w-full overflow-hidden">
                {/* Image */}
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:-translate-y-8 transition-transform duration-1000"
                />
              </div>
            </div>

            {/* Title */}
            <div
              className="absolute bottom-0 left-0 text-5xl w-full bg-white text-black font-black text-left font-fixelDisplay px-8 py-8 transform translate-y-full group-hover:translate-y-0 opacity-100 group-hover:opacity-100 transition-all duration-1000"
            >
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
