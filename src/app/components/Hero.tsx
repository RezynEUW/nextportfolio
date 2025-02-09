"use client";

import Image from "next/image";
import { 
  Sparkles, 
  Code2, 
  Palette,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineItems = [
    {
      icon: Sparkles,
      title: "Summer Internship",
      date: "2025",
      gradient: "from-emerald-500/20 to-blue-500/20",
      textGradient: "from-emerald-500 to-blue-500",
      border: "border-emerald-500/20"
    },
    {
      icon: GraduationCap,
      title: "Master Thesis",
      date: "Fall 2025",
      gradient: "from-blue-500/20 to-indigo-500/20",
      textGradient: "from-blue-500 to-indigo-500",
      border: "border-blue-500/20"
    },
    {
      icon: Briefcase,
      title: "Full-time Position",
      date: "2026",
      gradient: "from-indigo-500/20 to-purple-500/20",
      textGradient: "from-indigo-500 to-purple-500",
      border: "border-indigo-500/20"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % timelineItems.length);
    }, 3000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,184,110,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.15),transparent_50%)]" />
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center px-6">
        {/* Main Content */}
        <div className="max-w-8xl mx-auto text-center">
          {/* Title Section */}
          <div className="relative mb-8">
            <h1 className="text-8xl lg:text-9xl font-bold flex items-baseline justify-center gap-4">
              <span className="py-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
                Designer & Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="py-1 text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Focused on crafting engaging digital experiences through the perfect blend of design and technology.
          </p>

          {/* Image Section */}
          <div className="relative w-48 h-48 lg:w-64 lg:h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-indigo-500/20 
              backdrop-blur-sm animate-pulse"
              style={{
                transform: `scale(${1 + scrollY * 0.0005})`,
              }} 
            />
            <Image
              src="/Intersect.png"
              alt="Lukas - Creative Developer"
              width={256}
              height={256}
              className="rounded-full object-cover w-full h-full relative z-10"
              priority
            />
            
            {/* Orbital Rings */}
            <div className="absolute inset-0 -m-8 rounded-full border border-emerald-500/20 
              animate-[spin_8s_linear_infinite]" 
              style={{
                transform: `rotate(${scrollY * 0.2}deg)`,
              }}
            />
            <div className="absolute inset-0 -m-16 rounded-full border border-indigo-500/20 
              animate-[spin_12s_linear_infinite_reverse]"
              style={{
                transform: `rotate(${-scrollY * 0.1}deg)`,
              }}
            />
          </div>
        </div>

        {/* Timeline Pills */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-24">
          {timelineItems.map((item, index) => (
            <div
              key={item.title}
              className={`transition-all duration-500 w-full sm:w-auto ${
                index === activeIndex ? 'opacity-100 scale-100' : 'opacity-70 scale-95'
              }`}
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 w-full sm:w-auto 
                bg-gradient-to-r ${item.gradient} rounded-full backdrop-blur-sm border ${item.border}`}>
                {index === 0 && <item.icon className="w-4 h-4 text-emerald-500" />}
                {index === 1 && <item.icon className="w-4 h-4 text-blue-500" />}
                {index === 2 && <item.icon className="w-4 h-4 text-indigo-500" />}
                <span className={`text-sm font-medium bg-gradient-to-r ${item.textGradient} 
                  text-transparent bg-clip-text whitespace-nowrap`}>
                  {item.title} {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Icons */}
        <div 
          className="absolute left-1/4 top-1/4"
          style={{ 
            transform: `translate(-50%, ${scrollY * -0.2}px) rotate(-5deg)`,
          }}
        >
          <Palette className="w-24 h-24 text-emerald-500/20" />
        </div>
        <div 
          className="absolute right-1/4 bottom-1/4"
          style={{ 
            transform: `translate(50%, ${scrollY * 0.2}px) rotate(5deg)`,
          }}
        >
          <Code2 className="w-24 h-24 text-indigo-500/20" />
        </div>
      </div>
    </section>
  );
}