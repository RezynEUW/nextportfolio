"use client";

import { 
  Mail, 
  Linkedin, 
  Copy, 
  Download, 
  Eye, 
  ExternalLink,
  Sparkles,
  GraduationCap,
  Briefcase
} from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('hello@lukashedstrom.com').then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="w-full min-h-screen bg-background px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold mb-4 sm:mb-6 relative">
            <span className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-transparent bg-clip-text 
              relative z-10 drop-shadow-[0_2px_10px_rgba(99,102,241,0.2)]">
              Let&apos;s Connect!
            </span>
          </h2>
          <p className="text-base sm:text-lg text-foreground/60 max-w-2xl mx-auto px-4">
            Whether you have a project in mind or just want to chat about technology and design,
            I&apos;m always excited to connect with like-minded individuals.
          </p>
          <div className="mt-6 sm:mt-8 mb-8 sm:mb-12 flex flex-wrap gap-2 sm:gap-4 justify-center">
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-xs sm:text-sm">
              <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
              Summer Internship 2025
            </span>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-blue-500/10 text-blue-500 text-xs sm:text-sm">
              <GraduationCap className="w-3 sm:w-4 h-3 sm:h-4" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
              Master Thesis Fall 2025
            </span>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-indigo-500/10 text-indigo-500 text-xs sm:text-sm">
              <Briefcase className="w-3 sm:w-4 h-3 sm:h-4" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
              Full-time Position 2026
            </span>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="group rounded-3xl bg-gradient-to-b from-teal-500/10 to-blue-500/5 p-4 sm:p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="flex-shrink-0 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500">
                <Mail className="w-4 sm:w-6 h-4 sm:h-6 text-white" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))' }} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">Email</h3>
                <p className="text-xs sm:text-sm text-teal-500 font-medium">Direct communication</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={handleEmailCopy}
                className="p-3 sm:p-4 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 transition-colors flex-1 text-left"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5 text-teal-600" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
                  <p className="text-base sm:text-xl font-medium text-teal-600 truncate">
                    hello@lukashedstrom.com
                  </p>
                </div>
              </button>
              <div className="flex gap-2 sm:flex-shrink-0">
                <button
                  onClick={handleEmailCopy}
                  className="p-3 sm:p-4 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 transition-colors text-left flex-1 sm:flex-initial"
                  aria-label={emailCopied ? "Email copied!" : "Copy email"}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Copy className={`w-4 sm:w-5 h-4 sm:h-5 ${emailCopied ? 'text-teal-600' : 'text-teal-500'}`} 
                          style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
                    <p className={`text-base sm:text-xl font-medium ${emailCopied ? 'text-teal-600' : 'text-teal-500'}`}>
                      {emailCopied ? 'Copied!' : 'Copy'}
                    </p>
                  </div>
                </button>
                <a
                  href="mailto:hello@lukashedstrom.com"
                  className="p-3 sm:p-4 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 transition-colors text-left flex-1 sm:flex-initial"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5 text-teal-500" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
                    <p className="text-base sm:text-xl font-medium text-teal-500">
                      Open
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="group rounded-3xl bg-gradient-to-b from-blue-500/10 to-blue-500/5 p-4 sm:p-8 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500">
                    <Linkedin className="w-4 sm:w-6 h-4 sm:h-6 text-white" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))' }} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">LinkedIn</h3>
                    <p className="text-xs sm:text-sm text-blue-500 font-medium">Let&apos;s connect and grow together</p>
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/lukashedstrom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors mb-2 w-full text-left"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Linkedin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <p className="text-base sm:text-xl font-medium text-blue-500 flex items-center gap-1 sm:gap-2">
                        Visit Profile
                        <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
                      </p>
                      <span className="text-xs sm:text-sm text-blue-400/70 font-light hidden sm:block">- Lukas Hedström</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="group rounded-3xl bg-gradient-to-b from-indigo-500/10 to-indigo-500/5 p-4 sm:p-8 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="flex-shrink-0 p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500">
                    <Download className="w-4 sm:w-6 h-4 sm:h-6 text-white" style={{ filter: 'drop-shadow(0 0 4px rgba(255, 255, 255, 0.4))' }} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">Resume</h3>
                    <p className="text-xs sm:text-sm text-indigo-500 font-medium">Download or preview my CV</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href="/cv.pdf" 
                    download
                    className="p-3 sm:p-4 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors flex-1 text-left"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Download className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
                      <p className="text-base sm:text-xl font-medium text-indigo-500">
                        Download CV
                      </p>
                    </div>
                  </a>
                  <a 
                    href="/cv.pdf" 
                    target="_blank"
                    className="p-3 sm:p-4 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors flex-1 text-left"
                  >
                    <div className="flex items-center justify-between gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Eye className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-500" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
                        <p className="text-base sm:text-xl font-medium text-indigo-500">
                          Preview CV
                        </p>
                      </div>
                      <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4 text-indigo-500" style={{ filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.3))' }} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}