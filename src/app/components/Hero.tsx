"use client";

import Image from "next/image";
import { 
  Code2, 
  Palette
} from "lucide-react";
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/2xlow.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(0,184,110,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.15),transparent_50%)]" />
      </div>

      {/* Main Content Container with minimum top padding */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto text-center flex-1 flex flex-col justify-center space-y-8 sm:space-y-12">
          {/* Title Section */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
              <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
                Designer & Developer
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
            Focused on crafting engaging digital experiences through the perfect blend of design and technology.
          </p>

          {/* Image Section */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto mb-6 sm:mb-8">
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
            <div className="absolute inset-0 -m-6 sm:-m-8 rounded-full border border-emerald-500/20 
              animate-[spin_8s_linear_infinite]" 
              style={{
                transform: `rotate(${scrollY * 0.2}deg)`,
              }}
            />
            <div className="absolute inset-0 -m-12 sm:-m-16 rounded-full border border-indigo-500/20 
              animate-[spin_12s_linear_infinite_reverse]"
              style={{
                transform: `rotate(${-scrollY * 0.1}deg)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Floating Icons - Hidden on very small screens */}
      <div 
        className="hidden sm:block absolute left-1/4 top-1/4"
        style={{ 
          transform: `translate(-50%, ${scrollY * -0.2}px) rotate(-5deg)`,
        }}
      >
        <Palette className="w-16 sm:w-24 h-16 sm:h-24 text-emerald-500/20" />
      </div>
      <div 
        className="hidden sm:block absolute right-1/4 bottom-1/4"
        style={{ 
          transform: `translate(50%, ${scrollY * 0.2}px) rotate(5deg)`,
        }}
      >
        <Code2 className="w-16 sm:w-24 h-16 sm:h-24 text-indigo-500/20" />
      </div>
      
      {/* Decorative Wave Separator */}
      <div className="absolute -bottom-1 left-0 right-0 z-30">
        <svg 
          viewBox="0 0 1440 140" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full drop-shadow-2xl filter"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 40C240 120 480 120 720 80C960 40 1200 40 1440 80V140H0V40Z" 
            fill="currentColor" 
            className="text-background filter drop-shadow-2xl"
            style={{
              filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.25))'
            }}
          />
        </svg>
      </div>
    </section>
  );
}