"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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
    <section className="relative h-screen flex justify-center items-center bg-background text-foreground">
      {/* Fullscreen Background Video */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
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

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:max-w-2xl">
            <h1 className="text-6xl md:text-8xl xl:text-9xl font-display font-bold">
              <span className="bg-gradient-to-r from-[#00B86E] to-[#0099FF] text-transparent bg-clip-text">
                Hej!
              </span>
            </h1>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-sans font-semibold">
                I'm Lukas, a Front End Developer &amp; UX Designer.
              </h2>
              <p className="text-xl md:text-3xl font-serif">
                I create immersive digital experiences.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-[#00B86E] to-[#0099FF] text-white rounded-lg font-sans hover:opacity-90 transition-all"
              >
                View Work
              </a>
            </div>
          </div>

          {/* Image with Enhanced Container */}
          <div className="relative md:w-2/5">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B86E]/10 to-[#0099FF]/10 rounded-3xl transform -rotate-3" />
              <Image
                src="/Intersect.png"
                alt="Intersect Graphic"
                width={500}
                height={500}
                className="relative rounded-3xl object-contain transform transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}