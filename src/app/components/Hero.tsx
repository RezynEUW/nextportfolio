"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ArrowDownCircle, Sparkles } from "lucide-react";

interface HeroProps {
  backgroundVideoOpacity?: number;
  playbackRate?: number;
}

export default function Hero({
  backgroundVideoOpacity = 0.7,
  playbackRate = 0.7,
}: HeroProps) {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <section className="relative h-screen overflow-hidden bg-background text-foreground">
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          ref={backgroundVideoRef}
          className="w-full h-full object-cover"
          src="/video13.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: backgroundVideoOpacity }}
        />
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col justify-center px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-emerald-500/20">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-medium bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
                  Open for Summer '24 Opportunities
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-[#00B86E] to-[#0099FF] text-transparent bg-clip-text">
                  Hej! I'm Lukas
                </span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-medium text-foreground/80">
                Crafting Tomorrow's Digital Experiences
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-r from-[#00B86E] to-[#0099FF] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all hover:scale-105">
                Explore Projects
              </button>
              <button className="border border-foreground/20 bg-background/50 backdrop-blur-sm px-6 py-3 rounded-lg font-medium hover:bg-background/70 transition-all hover:scale-105">
                Let's Connect
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00B86E]/10 to-[#0099FF]/10 rounded-3xl -rotate-6 scale-95" />
              <Image
                src="/Intersect.png"
                alt="Lukas - Front End Developer & UX Designer"
                width={500}
                height={500}
                className="relative rounded-3xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownCircle className="w-10 h-10 text-foreground/50" />
        </div>
      </div>

      {/* Wave */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}