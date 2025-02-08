"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Palette, Code2, Database } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const cards = [
    {
      title: "UX Design",
      subtitle: "The Foundation",
      icon: Palette,
      description: "UX is at the core of how I approach development. With a background in user-centered design, accessibility, and system architecture, I focus on making digital experiences intuitive and functional. Understanding what makes design work helps me bridge the gap between users and technology.",
      gradient: "from-emerald-500/20 to-emerald-500/5",
      borderGradient: "from-emerald-500 via-emerald-400 to-transparent",
      iconColor: "text-emerald-500",
      step: "01"
    },
    {
      title: "Front-End Development",
      subtitle: "The Focus",
      icon: Code2,
      description: "I enjoy working with modern web frameworks like React, Next.js, and React Native, building intuitive and scalable interfaces. Front-End development is where design and logic meet, and I'm particularly interested in performance optimization, accessibility, and creating seamless user experiences.",
      gradient: "from-blue-500/20 to-blue-500/5",
      borderGradient: "from-blue-500 via-blue-400 to-transparent",
      iconColor: "text-blue-500",
      featured: true,
      step: "02"
    },
    {
      title: "Full-Stack Journey",
      subtitle: "The Goal",
      icon: Database,
      description: "While Front-End is my main focus, I'm interested in expanding my Full-Stack knowledge—especially in APIs, databases, and performance-driven architectures. Learning more about the backend will help me build more holistic and efficient web applications.",
      gradient: "from-indigo-500/20 to-indigo-500/5",
      borderGradient: "from-indigo-500 via-indigo-400 to-transparent",
      iconColor: "text-indigo-500",
      step: "03"
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-gradient-to-b from-background to-background/95 flex items-center"
    >
      <div className="w-full py-24 px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Bridging Creativity & Technology
          </h2>
          <p className="text-xl font-serif text-foreground/60 max-w-3xl mx-auto">
            I've always been fascinated by the intersection of design and development.
            Here's how I bring both worlds together.
          </p>
        </div>

        {/* Cards Container */}
        <div className="max-w-7xl mx-auto grid gap-8 
          grid-cols-1 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.title}
              ref={(el) => cardsRef.current[index] = el}
              className="relative group"
            >
              {/* Card */}
              <div
                className={`h-full p-8 rounded-2xl backdrop-blur-sm 
                  border border-white/10 
                  bg-gradient-to-br ${card.gradient}
                  hover:shadow-lg transition-all duration-500
                  ${card.featured ? 'border-opacity-50' : 'border-opacity-30'}`}
              >
                {/* Step indicator */}
                <div className="absolute top-4 right-4 text-sm font-mono opacity-50">
                  {card.step}
                </div>

                {/* Title with Icon */}
                <div className="mb-6 relative">
                  <div className="flex items-center gap-3 mb-2">
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                    <div>
                      <h3 className="text-2xl font-sans font-semibold">
                        {card.title}
                      </h3>
                      <p className={`text-sm ${card.iconColor} font-medium`}>
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                  {/* Enhanced gradient line with animation */}
                  <div className="relative h-1 w-24 group-hover:w-32 transition-all duration-500">
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${card.borderGradient} opacity-50`} />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${card.borderGradient} blur-sm`} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg font-serif leading-relaxed text-foreground/80">
                  {card.description}
                </p>
              </div>

              {/* Connector line for timeline (visible on mobile) */}
              {index < cards.length - 1 && (
                <div className="lg:hidden h-8 w-px mx-auto my-0 bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </div>
          ))}
        </div>

        {/* Button Section */}
        <div className="mt-16 text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <a
              href="/about"
              className="relative px-8 py-4 bg-background/90 border border-white/10 rounded-lg leading-none flex items-center divide-x divide-white/20 hover:bg-background/70 transition duration-300"
            >
              <span className="pr-6 text-gray-100">Learn more about my journey</span>
              <span className="pl-6 text-indigo-400 group-hover:text-blue-400 transition duration-300">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}