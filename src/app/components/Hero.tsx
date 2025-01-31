"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  backgroundVideoOpacity?: number; // Opacity for fullscreen background video
  frostedVideoOpacity?: number; // Opacity for video inside the frosted glass
  playbackRate?: number;
}

export default function Hero({
  backgroundVideoOpacity = 0.7,
  frostedVideoOpacity = 0,
  playbackRate = 0.7,
}: HeroProps) {
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);
  const frostedVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (backgroundVideoRef.current) backgroundVideoRef.current.playbackRate = playbackRate;
    if (frostedVideoRef.current) frostedVideoRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <section className="relative h-screen flex justify-center items-center bg-background text-foreground">
      {/* Fullscreen Background Video (video13.mp4) */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden pointer-events-none">
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

      {/* Frosted Glass Container (No Blur Applied Here) */}
      <div
        className="absolute rounded-md backdrop-blur-md opacity-80 bg-white/10 border border-white/30 shadow-lg overflow-hidden flex justify-center items-center"
        style={{
          width: "80vw",
          height: "65vh",
        }}
      >
        {/* Blurred Video Inside the Frosted Glass (video14.mp4) */}
        <div className="w-full h-full">
          <video
            ref={frostedVideoRef}
            className="w-full h-full object-cover"
            src="/video14.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              opacity: frostedVideoOpacity,
              filter: "blur(15px)", // This applies the blur effect **only to the video**
            }}
          />
        </div>
      </div>
    </section>
  );
}
