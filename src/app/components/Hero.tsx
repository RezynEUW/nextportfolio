"use client";

import { useEffect, useRef } from "react";

interface HeroProps {
  videoOpacity?: number; // Allow adjustable opacity
  playbackRate?: number; // Control video playback speed
}

export default function Hero({ videoOpacity = 0.7, playbackRate = 0.7 }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Adjust video playback speed
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <section className="relative h-screen flex justify-center items-center bg-background text-foreground">
      {/* Background Video */}
      <div
        className="absolute inset-0 p-0 flex justify-center items-center overflow-hidden"
        style={{
          pointerEvents: "none", // Prevent interaction
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover" // No rounded corners
          src="/video13.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            opacity: videoOpacity, // Control opacity via prop
          }}
        />
      </div>
    </section>
  );
}
