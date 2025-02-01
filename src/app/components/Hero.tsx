"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

interface HeroProps {
  backgroundVideoOpacity?: number; // Opacity for fullscreen background video
  frostedVideoOpacity?: number;   // Opacity for video inside the frosted glass
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
    if (backgroundVideoRef.current) {
      backgroundVideoRef.current.playbackRate = playbackRate;
    }
    if (frostedVideoRef.current) {
      frostedVideoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <section
      className="relative min-h-screen flex justify-center items-center bg-background text-foreground"
      // ↑ Using min-h-screen so that if text is taller than screen, it can still expand
    >
      {/* Fullscreen Background Video (video13.mp4) */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        {/* Removed overflow-hidden so absolutely positioned content in front won't get clipped */}
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

      {/* Frosted Glass Container */}
      <div
        className="absolute rounded-md backdrop-blur-none bg-white/10 border border-white/30 shadow-lg"
        style={{
          width: "80vw",
          minHeight: "65vh",    // Allow height to expand
          overflow: "visible",  // Prevent clipping large text
        }}
      >
        {/* Wrapper to hold the blurred video and content */}
        <div className="relative w-full h-full">
          {/* Blurred Video (video14.mp4) */}
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
              filter: "blur(15px)", // blur on the video only
            }}
          />

          {/* Content overlay: Two columns (text left, image right) */}
          <div className="absolute inset-0 flex flex-row py-8 pl-32 pr-8 font-display">
            {/* Left Column - Text */}
            <div className="w-1/2 px-40 flex flex-col justify-center items-start space-y-4 text-left">
              <h1 className="text-9xl font-bold bg-gradient-to-r from-[#00B86E] to-[#0099FF] text-transparent bg-clip-text leading-[1.1]">
                Hej!
              </h1>
              <h2 className="text-5xl font-semibold text-black">Front End &amp; UX</h2>
              <p className="text-3xl text-black">Building Engaging Interfaces</p>
            </div>

            {/* Right Column - Space for Intersect.png */}
            <div className="w-1/2 flex justify-center items-center">
              <Image
                src="/Intersect.png"
                alt="Intersect Graphic"
                width={400}  // adjust as needed
                height={400} // adjust as needed
                className="object-contain rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
