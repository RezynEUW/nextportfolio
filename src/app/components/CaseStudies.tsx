"use client";

import Image from "next/image";
import { useTheme } from 'next-themes';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { X, ExternalLink, Github } from 'lucide-react';

// Define project type for type-safety
interface Project {
  id: number;
  title: string;
  src: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  links: {
    demo: string;
    github: string;
  };
}

export default function CaseStudies() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { resolvedTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  
  // Use direct element references instead of React refs
  const projectElements: (HTMLDivElement | null)[] = [];
  const setProjectRef = (index: number, element: HTMLDivElement | null) => {
    projectElements[index] = element;
  };

  useEffect(() => {
    setMounted(true);

    // Get initial window width
    setWindowWidth(window.innerWidth);

    // Add resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add global click handler
    const handleGlobalClick = (e: MouseEvent) => {
      if (selectedProject !== null && overlayRef.current && !overlayRef.current.contains(e.target as Node)) {
        handleCloseExpanded();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [selectedProject]);

  const projects: Project[] = [
    { 
      id: 1, 
      title: "Pokedle.day", 
      src: "/images/project1v3.png",
      description: "Daily Pokémon guessing game",
      fullDescription: "A daily Pokémon guessing game inspired by Wordle, built with Next.js 15 and TypeScript. Features include a comprehensive comparison system for multiple Pokémon attributes, progressive hint system, autocomplete search, and streak tracking with game statistics.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "CSS", "Neon DB"],
      features: [
        "Daily Pokémon guessing game with Wordle-inspired mechanics",
        "Comprehensive comparison system for multiple Pokémon attributes",
        "Progressive hint system unlocking at 10 and 15 guesses",
        "Autocomplete search with filtered suggestions",
        "Daily shiny Pokémon feature using seeded randomization",
        "Mobile-responsive design with accessibility features"
      ],
      links: {
        demo: "https://pokedle.day",
        github: "https://github.com/username/pokedle"
      }
    },
    { 
      id: 2, 
      title: "Project 2", 
      src: "/2.jpg",
      description: "E-commerce platform",
      fullDescription: "A fully-featured e-commerce platform with product catalog, shopping cart, secure checkout, and user accounts. Integrated with Stripe for payments and a headless CMS for content management.",
      technologies: ["Next.js", "React", "Stripe", "Sanity CMS", "Tailwind CSS"],
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart with persistent storage",
        "Secure checkout with Stripe integration",
        "User accounts and order history",
        "Content management with Sanity CMS",
        "Responsive design for all devices"
      ],
      links: {
        demo: "https://project2.example.com",
        github: "https://github.com/username/project2"
      }
    },
    { 
      id: 3, 
      title: "Project 3", 
      src: "/3.jpg",
      description: "Mobile-first design",
      fullDescription: "A mobile-first web application with responsive design that provides an optimal viewing experience across all devices. Features include offline support, push notifications, and app-like interactions.",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "Styled Components"],
      features: [
        "Cross-platform compatibility (iOS & Android)",
        "Offline support with local data storage",
        "Push notifications for user engagement",
        "Smooth app-like transitions and animations",
        "Responsive layouts for all screen sizes",
        "Integration with Firebase backend services"
      ],
      links: {
        demo: "https://project3.example.com",
        github: "https://github.com/username/project3"
      }
    },
    { 
      id: 4, 
      title: "Halls of Despair", 
      src: "/images/project4.png",
      description: "PS1-style horror game",
      fullDescription: "A PS1/PSX-style survival horror game developed from scratch using Godot 4. All textures, models, and rigging were created in Blender, Krita, and Laigter. The game features AI pathfinding, third-person character control, low-poly aesthetics, and atmospheric lighting in a dungeon environment.",
      technologies: ["Godot 4", "Blender", "Krita", "Laigter", "GDScript"],
      features: [
        "AI pathfinding and enemy navigation system",
        "Custom 3D character model with rigging and animations",
        "Low-poly PS1/PSX-inspired visual aesthetic",
        "Dynamic lighting with custom torch effects",
        "Horror-focused gameplay inspired by Slender",
        "Fully custom dungeon environment creation"
      ],
      links: {
        demo: "https://rezyn.itch.io/halls-of-despair",
        github: "https://github.com/username/halls-of-despair"
      }
    },
  ];

  const isDark = mounted && resolvedTheme === 'dark';

  // Determine device type based on window width
  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  const handleProjectClick = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();

    // If already selected, close it
    if (selectedProject === id) {
      handleCloseExpanded();
      return;
    }

    // Set the selected project
    setSelectedProject(id);

    const index = projects.findIndex(p => p.id === id);
    if (index === -1) return;

    const card = projectElements[index];
    if (!card || !gridRef.current) return;

    // Get card position for overlay positioning
    const cardRect = card.getBoundingClientRect();
    const gridRect = gridRef.current.getBoundingClientRect();

    // Position and show the overlay
    if (overlayRef.current) {
      const overlay = overlayRef.current;

      // Set initial position to match the clicked card
      gsap.set(overlay, {
        x: cardRect.left - gridRect.left,
        y: cardRect.top - gridRect.top,
        width: cardRect.width,
        height: cardRect.height,
        opacity: 0,
        display: 'block',
        zIndex: 50,
        overflow: 'hidden',
        borderRadius: '0.375rem',
        filter: 'none',
        boxShadow: 'none'
      });

      if (isDesktop) {
        // DESKTOP: Full expansion animation
        gsap.to(overlay, {
          x: 0, // No margin
          y: cardRect.top - gridRect.top,
          width: '100%', // Full width
          opacity: 1,
          duration: 0.5,
          ease: "power3.inOut",
          onComplete: () => {
            // After width animation completes, animate height to auto
            gsap.to(overlay, {
              height: 'auto',
              duration: 0.2, // Speed up height animation too
              ease: "power3.inOut",
              onComplete: () => {
                // When height animation completes, enable overflow scrolling
                gsap.set(overlay, { overflow: 'auto' });

                // Ensure it's visible and scrolled into view
                gsap.to(window, {
                  duration: 0.5,
                  scrollTo: { y: cardRect.top + window.scrollY - 100, autoKill: false },
                  ease: "power3.inOut"
                });
              }
            });
          }
        });

        // Animate the image saturation inside the overlay
        const overlayImage = overlay.querySelector('.overlay-image') as HTMLElement;
        if (overlayImage) {
          gsap.to(overlayImage, {
            filter: 'saturate(1)',
            duration: 0.8,
            delay: 0.1,
            ease: "power2.out"
          });
        }
      } else {
        // MOBILE & TABLET: Stay within card bounds
        // Just fade in - maintain the exact size of the card
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.3,
          ease: "power3.inOut",
          onComplete: () => {
            // Ensure content is visible without scrolling
            gsap.set(overlay, { overflow: 'auto' });
          }
        });
      }

      // Dim ALL cards to make the overlay stand out
      projectElements.forEach(element => {
        if (element) {
          gsap.to(element, { opacity: 0.2, duration: 0.15 });
        }
      });
    }
  };

  const handleCloseExpanded = () => {
    if (selectedProject === null || !overlayRef.current || !gridRef.current) return;

    const index = projects.findIndex(p => p.id === selectedProject);
    if (index === -1) return;

    const card = projectElements[index];
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const gridRect = gridRef.current.getBoundingClientRect();

    if (isDesktop) {
      // Reset image saturation
      const overlayImage = overlayRef.current.querySelector('.overlay-image') as HTMLElement;
      if (overlayImage) {
        gsap.to(overlayImage, {
          filter: 'saturate(0.6)',
          duration: 0.6,
          ease: "power2.in"
        });
      }

      // Set overflow to hidden to prevent content overflow during animation
      gsap.set(overlayRef.current, { overflow: 'hidden' });

      // First animate height back to card height
      gsap.to(overlayRef.current, {
        height: cardRect.height,
        duration: 0.2,
        ease: "power3.inOut",
        onComplete: () => {
          // Then animate back to card position
          gsap.to(overlayRef.current, {
            x: cardRect.left - gridRect.left,
            y: cardRect.top - gridRect.top,
            width: cardRect.width,
            opacity: 0,
            duration: 0.3,
            ease: "power3.inOut",
            onComplete: () => {
              setSelectedProject(null);
              if (overlayRef.current) {
                overlayRef.current.style.display = 'none';
              }
            }
          });
        }
      });
    } else {
      // For mobile and tablet, just fade out
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power3.inOut",
        onComplete: () => {
          setSelectedProject(null);
          if (overlayRef.current) {
            overlayRef.current.style.display = 'none';
          }
        }
      });
    }

    // Restore opacity of ALL cards
    projectElements.forEach(element => {
      if (element) {
        gsap.to(element, { opacity: 1, duration: 0.3 });
      }
    });
  };

  // Function to determine project color scheme
  const getProjectColor = (projectId: number) => {
    switch(projectId) {
      case 1: return {
        primary: 'emerald-500',
        light: 'emerald-400',
        dark: 'emerald-600',
        bg: 'emerald-500/5',
        border: 'emerald-500/20',
        bgLight: 'emerald-500/10'
      };
      case 2: return {
        primary: 'blue-500',
        light: 'blue-400',
        dark: 'blue-600',
        bg: 'blue-500/5',
        border: 'blue-500/20',
        bgLight: 'blue-500/10'
      };
      case 3: return {
        primary: 'indigo-500',
        light: 'indigo-400',
        dark: 'indigo-600',
        bg: 'indigo-500/5',
        border: 'indigo-500/20',
        bgLight: 'indigo-500/10'
      };
      default: return {
        primary: 'purple-500',
        light: 'purple-400',
        dark: 'purple-600',
        bg: 'purple-500/5',
        border: 'purple-500/20',
        bgLight: 'purple-500/10'
      };
    }
  };

  return (
    <section id="projects" ref={containerRef} className="relative bg-background py-12 lg:py-24 overflow-x-hidden">
      {/* Responsive Grid Container */}
      <div ref={gridRef} className="relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 gap-y-6 lg:gap-y-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => setProjectRef(index, el)}
            className="relative w-full group overflow-hidden cursor-pointer
              h-[60vh] sm:h-[50vh] lg:h-[85vh] transition-opacity duration-700"
            onClick={(e) => handleProjectClick(project.id, e)}
          >
            {/* Frame with padding */}
            <div className={`h-full w-full py-3 px-1.5 lg:py-8 lg:px-1.5 bg-background box-border
              ${index === 0 ? 'lg:pl-0' : ''} 
              ${index === projects.length - 1 ? 'lg:pr-0' : ''}`}
            >
              {/* Image Container with overflow-hidden */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover 
                    saturate-60 transition-all duration-1000 ease-in-out 
                    group-hover:saturate-100
                    lg:group-hover:-translate-y-8 
                    filter lg:group-hover:brightness-100 ${
                      isDark ? 'brightness-75 hover:brightness-90' : ''
                    }`}
                  priority={index < 2}
                />
              </div>
            </div>

            {/* Title Overlay - Always visible on mobile/tablet, hover on desktop */}
            <div
              className={`absolute bottom-0 left-0 w-full bg-background
                lg:transform lg:translate-y-full lg:group-hover:translate-y-0 
                transition-all duration-1000 z-10
                sm:translate-y-0 ${
                  isDark ? 'backdrop-blur-md bg-background/90' : ''
                }`}
            >
              <div className="px-3 py-3 sm:px-4 sm:py-4 lg:px-8 lg:py-6">
                <h3 className={`text-xl sm:text-2xl lg:text-5xl font-black font-fixelDisplay mb-1 lg:mb-2 
                  ${isDark ? 'text-foreground' : 'text-black'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm sm:text-base lg:text-lg font-fixelDisplay 
                  lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-300
                  opacity-100 ${
                    isDark ? 'text-foreground/70' : 'text-gray-600'
                  }`}>
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Expanded Project Overlay - Inside the grid container */}
        <div 
          ref={overlayRef}
          className="absolute overflow-hidden overflow-y-auto max-h-[90vh] sm:max-h-[85vh] lg:max-h-[90vh] z-50 bg-background"
          style={{ display: 'none', left: 0, right: 0, boxShadow: 'none', filter: 'none' }}
          onClick={(e) => e.stopPropagation()}
        >
          {selectedProject !== null ? (
            (() => {
              const project = projects.find(p => p.id === selectedProject);
              if (!project) return null;
              
              const colors = getProjectColor(project.id);

              // Different content based on device type
              if (isDesktop) {
                // DESKTOP: New minimalist design without labels
                return (
                  <div className="flex flex-col w-full" onClick={handleCloseExpanded}>
                    {/* Simple two-column layout with controlled height */}
                    <div className="grid grid-cols-12 gap-0 w-full h-[85vh]">
                      {/* Left column - Project image */}
                      <div className="col-span-5 bg-black relative h-full">
                        <div className="absolute inset-0">
                          <div className="relative w-full h-full">
                            <Image
                              src={project.src}
                              alt={project.title}
                              fill
                              priority
                              className="object-cover object-center overlay-image"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                              <h1 className="text-4xl font-bold text-white mb-2">
                                {project.title}
                              </h1>
                              <p className="text-white/80 text-xl">{project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Right column - Project details */}
                      <div className="col-span-7 p-8 py-12 h-full overflow-y-auto">
                        {/* Description */}
                        <div className="mb-12">
                          <p className="text-lg leading-relaxed">
                            {project.fullDescription}
                          </p>
                        </div>
                        
                        {/* Features list - clean and simple */}
                        <div className="mb-12">
                          <div className={`w-full h-0.5 bg-${colors.primary} mb-6`}></div>
                          <div className="space-y-4">
                            {project.features.map((feature, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <div className={`w-6 h-6 flex-shrink-0 bg-${colors.primary} flex items-center justify-center text-white`}>
                                  {i + 1}
                                </div>
                                <p className="text-lg pt-0.5">{feature}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Technologies - simple horizontal layout */}
                        <div className="mb-12">
                          <div className={`w-full h-0.5 bg-${colors.primary} mb-6`}></div>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className={`px-3 py-2 text-sm bg-${colors.bgLight} text-${colors.primary}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action buttons - simple rectangular buttons */}
                        <div className="flex gap-4">
                          <a 
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-6 py-4 flex-1 text-center bg-${colors.primary} text-white`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="flex items-center justify-center gap-2">
                              <ExternalLink className="w-4 h-4" />
                              View Demo
                            </span>
                          </a>
                          <a 
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-4 flex-1 text-center border border-white/20 bg-white/5"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="flex items-center justify-center gap-2">
                              <Github className="w-4 h-4" />
                              View Code
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                // MOBILE & TABLET: Simplified Card View
                return (
                  <div 
                    className="flex flex-col h-full w-full overflow-auto bg-background justify-center cursor-pointer"
                    style={{ boxShadow: 'none', filter: 'none' }}
                    onClick={() => handleCloseExpanded()}
                  >
                    <div className="px-4 py-4 text-center my-auto">
                      <h2 className="text-2xl font-semibold mb-1">
                        <span className={`bg-gradient-to-r 
                          ${
                            selectedProject === 1 ? 'from-emerald-500 to-emerald-400' :
                            selectedProject === 2 ? 'from-blue-500 to-blue-400' :
                            selectedProject === 3 ? 'from-indigo-500 to-indigo-400' :
                            'from-purple-500 to-purple-400'
                          } text-transparent bg-clip-text`}>
                          {project.title}
                        </span>
                      </h2>
                      <p className="text-sm text-foreground/60 mb-5">
                        {project.fullDescription}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 text-xs sm:text-sm 
                                ${
                                  selectedProject === 1 ? 'bg-emerald-500/20 text-emerald-500' :
                                  selectedProject === 2 ? 'bg-blue-500/20 text-blue-500' :
                                  selectedProject === 3 ? 'bg-indigo-500/20 text-indigo-500' :
                                  'bg-purple-500/20 text-purple-500'
                                }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features list */}
                      <div className="mb-8">
                        <ul className="inline-block text-left">
                          {project.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-start mb-3">
                              <span className={`${
                                selectedProject === 1 ? 'text-emerald-500' :
                                selectedProject === 2 ? 'text-blue-500' :
                                selectedProject === 3 ? 'text-indigo-500' :
                                'text-purple-500'
                              } mt-1 mr-2`}>•</span>
                              <span className="text-sm text-foreground/70">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 justify-center">
                        <a 
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-3 text-base font-medium flex items-center justify-center gap-2 flex-1
                            ${
                              selectedProject === 1 
                                ? 'bg-gradient-to-r from-emerald-500/80 to-emerald-400/80 text-white' :
                              selectedProject === 2 
                                ? 'bg-gradient-to-r from-blue-500/80 to-blue-400/80 text-white' :
                              selectedProject === 3 
                                ? 'bg-gradient-to-r from-indigo-500/80 to-indigo-400/80 text-white' :
                              'bg-gradient-to-r from-purple-500/80 to-purple-400/80 text-white'
                            } shadow-sm hover:shadow-md transition-all`}
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </a>
                        <a 
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-3 text-base font-medium flex items-center justify-center gap-2 flex-1
                            bg-white/10 backdrop-blur-sm border border-white/20 text-white
                            shadow-sm hover:shadow-md transition-all`}
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
            })()
          ) : null}
        </div>
      </div>
    </section>
  );
}