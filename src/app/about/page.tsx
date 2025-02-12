'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Rocket, Coffee, GraduationCap, HeartHandshake, BookOpen, Globe, LucideIcon } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Section {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  content: string;
  imageSrc: string;
  imageAlt: string;
  gradient: string;
  iconColor: string;
  align: 'left' | 'right';
}

const sections: Section[] = [
  {
    title: "The Beginning",
    subtitle: "A bit about me",
    icon: HeartHandshake,
    content: "Born and raised in Sweden, I discovered my passion for technology and design at an early age. From customizing MySpace layouts to building my first websites, I've always been drawn to the creative possibilities of the digital world. My background in both design and development gives me a unique perspective on creating user experiences that are both beautiful and functional.",
    imageSrc: "https://picsum.photos/seed/aboutme/800/600",
    imageAlt: "Personal journey illustration",
    gradient: "from-rose-500 to-orange-500",
    iconColor: "text-rose-500",
    align: "left"
  },
  {
    title: "The Background",
    subtitle: "Education & Experience",
    icon: GraduationCap,
    content: "Currently pursuing my Master's in Computer Science, I combine academic rigor with practical experience. Through internships and personal projects, I've had the opportunity to work with diverse teams and technologies. Each experience has shaped my understanding of what makes great software and how to build it.",
    imageSrc: "https://picsum.photos/seed/education/800/600",
    imageAlt: "Education background",
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    align: "right"
  },
  {
    title: "The Journey",
    subtitle: "Where it all began",
    icon: Rocket,
    content: "My journey into web development started with a simple curiosity about how websites work. What began as tinkering with HTML and CSS evolved into a deep passion for creating seamless digital experiences. Through years of learning and hands-on projects, I've developed a keen eye for both aesthetic appeal and technical functionality.",
    imageSrc: "https://picsum.photos/seed/journey/800/600",
    imageAlt: "Journey illustration",
    gradient: "from-emerald-500 to-teal-500",
    iconColor: "text-emerald-500",
    align: "left"
  },
  {
    title: "The Approach",
    subtitle: "How I work",
    icon: Coffee,
    content: "I believe in the power of iterative development and continuous learning. Every project starts with thorough research and planning, followed by rapid prototyping and refinement. I focus on creating scalable, maintainable solutions that not only look great but perform excellently across all devices.",
    imageSrc: "https://picsum.photos/seed/approach/800/600",
    imageAlt: "Work process illustration",
    gradient: "from-teal-500 to-cyan-500",
    iconColor: "text-teal-500",
    align: "right"
  },
  {
    title: "The Learning",
    subtitle: "Never stop growing",
    icon: BookOpen,
    content: "Beyond coding, I'm passionate about continuous learning and personal growth. I actively participate in tech communities, contribute to open-source projects, and stay updated with the latest industry trends. I believe that the best developers are those who never stop being students of their craft.",
    imageSrc: "https://picsum.photos/seed/learning/800/600",
    imageAlt: "Learning journey",
    gradient: "from-cyan-500 to-blue-500",
    iconColor: "text-cyan-500",
    align: "left"
  },
  {
    title: "The Stack",
    subtitle: "Tools of choice",
    icon: Code2,
    content: "My technical toolkit is built around modern web technologies. I specialize in React and Next.js for frontend development, enhanced by Tailwind CSS for styling. I'm experienced with various state management solutions and building responsive, accessible interfaces that deliver exceptional user experiences.",
    imageSrc: "https://picsum.photos/seed/stack/800/600",
    imageAlt: "Technology stack illustration",
    gradient: "from-blue-500 to-indigo-500",
    iconColor: "text-blue-500",
    align: "right"
  },
  {
    title: "The Vision",
    subtitle: "Looking forward",
    icon: Globe,
    content: "Looking ahead, I'm excited about the evolving landscape of web development. I'm particularly interested in exploring the intersection of design and functionality, creating interfaces that are not just beautiful but intuitive and accessible to all users. I'm always eager to learn new technologies and methodologies that can enhance the user experience.",
    imageSrc: "https://picsum.photos/seed/vision/800/600",
    imageAlt: "Future vision illustration",
    gradient: "from-indigo-500 to-violet-500",
    iconColor: "text-indigo-500",
    align: "left"
  }
];

export default function Page() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only run animations on larger screens
    if (window.innerWidth >= 640) {
      sectionsRef.current.forEach((section) => {
        if (!section) return;

        gsap.fromTo(
          section,
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
              trigger: section,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    // Cleanup function
    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  const setSectionRef = (el: HTMLDivElement | null, index: number) => {
    sectionsRef.current[index] = el;
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-transparent bg-clip-text relative z-10 drop-shadow-[0_2px_10px_rgba(99,102,241,0.2)]">
              About Me
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto">
            Exploring the intersection of design and development to create meaningful digital experiences.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-32">
        {sections.map((section, index) => (
          <div
            key={section.title}
            ref={(el) => setSectionRef(el, index)}
            className="mb-32 last:mb-0"
          >
            <div className={`flex flex-col ${section.align === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 aspect-square bg-gradient-to-br ${section.gradient} flex items-center justify-center`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{section.title}</h2>
                    <p className={`text-sm ${section.iconColor} font-medium`}>
                      {section.subtitle}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className={`h-px w-24 bg-gradient-to-r ${section.gradient} opacity-50`} />
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {section.content}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    <img
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}