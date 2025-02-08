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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold">Get in Touch</h2>
              <p className="text-lg text-gray-400 font-serif">
                Have a project in mind? Let's create something amazing together.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                    focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                    focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 
                  text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Additional Links */}
          <div className="space-y-8">
            <div className="space-y-6">
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 
                  rounded-lg hover:bg-white/10 transition-colors group"
              >
                <Download className="w-5 h-5 text-emerald-400" />
                <div>
                  <h3 className="font-sans font-medium">Download CV</h3>
                  <p className="text-sm text-gray-400">Get my latest resume</p>
                </div>
                <span className="ml-auto text-gray-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>

              <div className="flex gap-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                    bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                    bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-white/10 
                  rounded-lg hover:bg-white/10 transition-colors group"
              >
                <Github className="w-5 h-5" />
                <div>
                  <h3 className="font-sans font-medium">Check My Code</h3>
                  <p className="text-sm text-gray-400">View my projects on GitHub</p>
                </div>
                <span className="ml-auto text-gray-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}