'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Rocket, Coffee, GraduationCap, HeartHandshake, BookOpen, Globe, LucideIcon } from 'lucide-react';
import Image from 'next/image';

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
    content: "Born in Varberg on Sweden's west coast, I discovered my passion for creativity early through Lego builds and countless hours at the computer. This evolved into a love for photography and digital design. Now, combining technical knowledge with creative vision, I craft digital experiences that seamlessly blend beauty with function.",
    imageSrc: "/images/1.jpg",
    imageAlt: "Personal journey illustration",
    gradient: "from-rose-500 to-orange-500",
    iconColor: "text-rose-500",
    align: "left"
  },
  {
    title: "The Background",
    subtitle: "Education & Experience",
    icon: GraduationCap,
    content: "At Umeå University, I'm pursuing my M.Sc. in Interaction Technology & Design, blending academic theory with hands-on practice. Through collaborative coursework and personal projects, I've developed both teamwork skills and individual craftsmanship, shaping my approach to building thoughtful, user-centered solutions. I'm very socially driven, which makes me often considered cheerful and chatty by my peers.",
    imageSrc: "/images/2.jpg",
    imageAlt: "Education background",
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    align: "right"
  },
  {
    title: "The Journey",
    subtitle: "Where it all began",
    icon: Rocket,
    content: "My journey into development grew from curiosity about both web and game creation. What started with HTML and CSS evolved alongside interests in game modification and development. Through years of hands-on projects, I've cultivated an approach that balances technical functionality with compelling design.",
    imageSrc: "/images/3.jpg",
    imageAlt: "Journey illustration",
    gradient: "from-emerald-500 to-teal-500",
    iconColor: "text-emerald-500",
    align: "left"
  },
  {
    title: "The Approach",
    subtitle: "How I work",
    icon: Coffee,
    content: "I believe in the power of iterative development and continuous learning. Every project starts with research and planning, followed by rapid prototyping and refinement. I focus on creating scalable, maintainable solutions that not only look great but perform excellently across all devices. Even if I sometimes end up in the deep end, it works out!",
    imageSrc: "/images/7.jpg",
    imageAlt: "Work process illustration",
    gradient: "from-teal-500 to-cyan-500",
    iconColor: "text-teal-500",
    align: "right"
  },
  {
    title: "The Learning",
    subtitle: "Never stop growing",
    icon: BookOpen,
    content: "Beyond coding, I'm passionate about continuous learning and personal growth. I actively participate in tech communities, contribute to modding projects, and stay updated with the latest industry trends especially regarding AI. I believe that the best developers are those who never stop being students of their craft, and keeping up with the times is essential. I truly believe in learn by doing, and seeing!",
    imageSrc: "/images/4.jpg",
    imageAlt: "Learning journey",
    gradient: "from-cyan-500 to-blue-500",
    iconColor: "text-cyan-500",
    align: "left"
  },
  {
    title: "The Stack",
    subtitle: "Tools of choice",
    icon: Code2,
    content: "My technical toolkit is built around modern web technologies. I currently specialize in React and Next.js for frontend development, enhanced by Tailwind CSS for styling. I'm experienced with various state management solutions and building responsive, accessible interfaces that deliver sustainable user experiences.",
    imageSrc: "/images/6.jpg",
    imageAlt: "Technology stack illustration",
    gradient: "from-blue-500 to-indigo-500",
    iconColor: "text-blue-500",
    align: "right"
  },
  {
    title: "The Vision",
    subtitle: "Looking forward",
    icon: Globe,
    content: "Looking ahead, I'm excited about the evolving landscape of web development. I'm particularly interested in exploring the intersection of design and functionality, creating interfaces that are not just beautiful but intuitive and accessible to all users. I'm always eager to learn new technologies and methodologies that can enhance the user experience, so feel free to give suggestions to broaden my skill set!",
    imageSrc: "/images/5.jpg",
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
        <div className="max-w-4xl py-20 mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-transparent bg-clip-text relative z-10 drop-shadow-[0_2px_10px_rgba(99,102,241,0.2)]">
              About Me
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto">
          Crafting digital experiences where creative vision meets technical precision, driven by a passion for game design, photography, and web solutions.
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
                <div className="relative group overflow-hidden">
                  <div className="relative aspect-w-4 aspect-h-3">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                      priority={index === 0}
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