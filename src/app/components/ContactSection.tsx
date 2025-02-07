"use client";

import { useEffect, useRef } from "react";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import { gsap } from "gsap";

export default function ContactSection() {
  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!streamRef.current) return;

    // Animate the stream effect
    gsap.to(streamRef.current, {
      y: "20px",
      opacity: 0.7,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-background to-gray-900 flex items-center justify-center py-20">
      <div className="max-w-4xl w-full mx-auto px-6">
        {/* Name Concept Visual */}
        <div className="relative mb-16 text-center">
          <div className="flex items-center justify-center gap-1 text-6xl md:text-7xl font-display font-bold">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-transparent bg-clip-text">
              Heath
            </span>
            <div className="relative mx-1">
              <div 
                ref={streamRef}
                className="absolute -top-2 left-0 w-full h-12 bg-gradient-to-b from-blue-400/20 to-transparent blur-sm"
              />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                stream
              </span>
            </div>
          </div>
          <p className="mt-4 text-lg text-gray-400 font-serif max-w-md mx-auto">
            Where design flows naturally into development
          </p>
        </div>

        {/* Contact Content */}
        <div className="space-y-8 max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-bold text-white">Get in Touch</h2>
            <p className="text-xl text-gray-400 font-serif">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Email */}
            <a
              href="mailto:lukas@heathstream.dev"
              className="flex items-center justify-center gap-3 px-6 py-4 
                bg-white/5 border border-white/10 rounded-lg 
                hover:bg-white/10 transition-colors group"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-lg text-gray-200">lukas@heathstream.dev</span>
            </a>

            {/* CV Download */}
            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-between px-6 py-4 
                bg-white/5 border border-white/10 rounded-lg 
                hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-sans font-medium text-gray-200">Download CV</h3>
                  <p className="text-sm text-gray-400">Get my latest resume</p>
                </div>
              </div>
              <span className="text-gray-400 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                  bg-white/5 border border-white/10 rounded-lg 
                  hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-200">LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                  bg-white/5 border border-white/10 rounded-lg 
                  hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5 text-gray-200" />
                <span className="text-gray-200">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}