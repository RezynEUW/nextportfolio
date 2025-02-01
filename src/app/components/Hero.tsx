"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface HeroProps {
  backgroundVideoOpacity?: number; // Opacity for the fullscreen background video (video13.mp4)
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
      <div className="relative font-display z-10 flex flex-col md:flex-row items-center justify-center gap-8 px-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="text-6xl md:text-9xl font-bold bg-gradient-to-r from-[#00B86E] to-[#0099FF] text-transparent bg-clip-text">
            Hej!
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold">
            I'm Lukas, a Front End Developer &amp; UX Designer.
          </h2>
          <p className="text-xl md:text-3xl">
            I create immersive digital experiences.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/Intersect.png"
            alt="Intersect Graphic"
            width={400}
            height={400}
            className="object-contain rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
