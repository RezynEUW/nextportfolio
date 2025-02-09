"use client";

import { useEffect, useRef } from "react";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import { gsap } from "gsap";

export default function ContactSection() {
  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!streamRef.current) return;

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
    <section id="contact" className="min-h-screen bg-gradient-to-b from-background to-background/95 flex items-center justify-center py-20">
      <div className="max-w-7xl w-full mx-auto px-6">
        {/* Header */}
        <div className="relative mb-16 text-center">
          <div className="flex items-center justify-center gap-1 text-6xl md:text-7xl font-display font-bold">
            <span className="bg-gradient-to-r from-[#00B86E] to-[#0099FF] text-transparent bg-clip-text">
              Let's Connect
            </span>
          </div>
          <p className="mt-4 text-xl font-serif text-foreground/60 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology and design,
            I'm always excited to connect with like-minded individuals.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <form className="space-y-6">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 
                    backdrop-blur-sm border border-emerald-500/20 rounded-full
                    focus:outline-none focus:border-emerald-500/50 transition-all
                    placeholder:text-foreground/40"
                />
                <textarea
                  placeholder="Your message"
                  rows={6}
                  className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 
                    backdrop-blur-sm border border-emerald-500/20 rounded-2xl
                    focus:outline-none focus:border-emerald-500/50 transition-all
                    placeholder:text-foreground/40"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm 
                  border border-emerald-500/20 px-8 py-4 rounded-full
                  hover:scale-105 transition-all duration-300"
              >
                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text font-medium">
                  Send Message
                </span>
              </button>
            </form>
          </div>

          {/* Right Column - Additional Links */}
          <div className="space-y-6">
            {/* CV Download */}
            <a
              href="/cv.pdf"
              download
              className="block p-[1px] rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 group-hover:opacity-100 opacity-50 transition-opacity" />
              <div className="relative p-6 bg-background/50 backdrop-blur-sm rounded-2xl 
                flex items-center gap-4 group-hover:bg-background/40 transition-colors">
                <Download className="w-6 h-6 text-emerald-500" />
                <div className="flex-1">
                  <h3 className="font-medium">Download CV</h3>
                  <p className="text-sm text-foreground/60">Get my latest resume</p>
                </div>
                <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="mailto:lukas@heathstream.dev"
                className="p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm 
                  border border-emerald-500/20 rounded-xl hover:scale-105 transition-all
                  flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5 text-emerald-500" />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text font-medium">
                  Email
                </span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm 
                  border border-emerald-500/20 rounded-xl hover:scale-105 transition-all
                  flex items-center justify-center gap-2"
              >
                <Linkedin className="w-5 h-5 text-blue-500" />
                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-transparent bg-clip-text font-medium">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* GitHub Link */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-[1px] rounded-2xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 group-hover:opacity-100 opacity-50 transition-opacity" />
              <div className="relative p-6 bg-background/50 backdrop-blur-sm rounded-2xl 
                flex items-center gap-4 group-hover:bg-background/40 transition-colors">
                <Github className="w-6 h-6 text-blue-500" />
                <div className="flex-1">
                  <h3 className="font-medium">GitHub Profile</h3>
                  <p className="text-sm text-foreground/60">Check out my projects</p>
                </div>
                <span className="text-emerald-500 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}