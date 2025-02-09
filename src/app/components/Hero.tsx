"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Sparkles, ExternalLink, MessageSquare } from "lucide-react";

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
    <section className="relative h-screen bg-background text-foreground overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#0099FF]/5" />
      
      {/* Background Video */}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light">
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
      <div className="relative h-full flex items-center px-6 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          {/* Summer '25 Badge - Preserved exactly as is */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-emerald-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text">
              Open for Summer '25 Opportunities
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Text */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="inline-block">Creative</span>{" "}
                  <span className="bg-gradient-to-r from-[#00B86E] to-[#0099FF] text-transparent bg-clip-text">
                    Developer
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-foreground/80 max-w-2xl leading-relaxed">
                  Focused on crafting engaging digital experiences through the perfect blend of design and technology.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-6 items-center">
                <a href="#work" className="group relative px-8 py-4 bg-[#0099FF] hover:bg-[#00B86E] transition-colors">
                  <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                    View Work
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
                <a href="#contact" className="group px-8 py-4 border border-foreground/20 hover:bg-white/5 transition-colors">
                  <span className="flex items-center gap-2 font-medium">
                    Let's Talk
                    <MessageSquare className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src="/Intersect.png"
                  alt="Lukas - Creative Developer"
                  width={600}
                  height={600}
                  className="w-full opacity-image-fade rounded-[3rem]"
                  priority
                />
                <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-[#00B86E]/5 to-[#0099FF]/5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave effect */}
      <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,160 C320,260 720,200 1440,160 L1440,320 L0,320 Z"
            className="fill-white/20"
          >
            <animate
              attributeName="d"
              dur="25s"
              repeatCount="indefinite"
              values="
                M0,160 C320,260 720,200 1440,160 L1440,320 L0,320 Z;
                M0,160 C320,200 720,260 1440,160 L1440,320 L0,320 Z;
                M0,160 C320,260 720,200 1440,160 L1440,320 L0,320 Z"
              calcMode="spline"
              keySplines="0.42,0,0.58,1; 0.42,0,0.58,1"
            />
          </path>
          <path
            d="M0,220 C480,280 960,240 1440,220 L1440,320 L0,320 Z"
            className="fill-white/40"
          >
            <animate
              attributeName="d"
              dur="20s"
              repeatCount="indefinite"
              values="
                M0,220 C480,280 960,240 1440,220 L1440,320 L0,320 Z;
                M0,220 C480,240 960,280 1440,220 L1440,320 L0,320 Z;
                M0,220 C480,280 960,240 1440,220 L1440,320 L0,320 Z"
              calcMode="spline"
              keySplines="0.42,0,0.58,1; 0.42,0,0.58,1"
            />
          </path>
          <path
            d="M0,280 C360,290 720,280 1440,280 L1440,320 L0,320 Z"
            className="fill-white"
          >
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M0,280 C360,290 720,280 1440,280 L1440,320 L0,320 Z;
                M0,280 C360,270 720,290 1440,280 L1440,320 L0,320 Z;
                M0,280 C360,290 720,280 1440,280 L1440,320 L0,320 Z"
              calcMode="spline"
              keySplines="0.42,0,0.58,1; 0.42,0,0.58,1"
            />
          </path>
        </svg>
      </div>

      {/* Styles for the image fade */}
      <style jsx global>{`
        .opacity-image-fade {
          -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
        }
      `}</style>
    </section>
  );
}