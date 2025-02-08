"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CaseStudies() {
  const projects = [
    { 
      id: 1, 
      title: "Project 1", 
      src: "/1.jpg",
      description: "Interactive web application"
    },
    { 
      id: 2, 
      title: "Project 2", 
      src: "/2.jpg",
      description: "E-commerce platform"
    },
    { 
      id: 3, 
      title: "Project 3", 
      src: "/3.jpg",
      description: "Mobile-first design"
    },
    { 
      id: 4, 
      title: "Project 4", 
      src: "/4.jpg",
      description: "User experience redesign"
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-white flex items-center">
      {/* Responsive Grid Container */}
      <div className="w-full h-[95vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="relative w-full group overflow-hidden
              h-[70vh] sm:h-[50vh] lg:h-full"
          >
            {/* Frame with padding */}
            <div className={`h-full w-full py-3 px-1.5 lg:py-8 lg:px-1.5 bg-white box-border
              ${index === 0 ? 'lg:pl-0' : ''} 
              ${index === projects.length - 1 ? 'lg:pr-0' : ''}`}
            >
              {/* Image Container with overflow-hidden */}
              <div className="h-full w-full overflow-hidden">
                {/* Image */}
                <img
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover transform 
                    lg:group-hover:-translate-y-8 transition-transform duration-1000
                    filter lg:group-hover:brightness-90"
                />
              </div>
            </div>

            {/* Title Overlay - Always visible on mobile/tablet, hover on desktop */}
            <div
              className="absolute bottom-0 left-0 w-full bg-white text-black 
                lg:transform lg:translate-y-full lg:group-hover:translate-y-0 
                transition-all duration-1000 z-10
                sm:translate-y-0"
            >
              <div className="px-3 py-3 sm:px-4 sm:py-4 lg:px-8 lg:py-6">
                <h3 className="text-xl sm:text-2xl lg:text-5xl font-black font-fixelDisplay mb-1 lg:mb-2">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-fixelDisplay 
                  lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-300
                  opacity-100"
                >
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}