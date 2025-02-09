"use client";

import { 
  Mail, 
  Linkedin, 
  Copy, 
  Download, 
  Eye, 
  MessageSquare, 
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
    <section className="w-full min-h-screen bg-background px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-emerald-500 to-indigo-500 text-transparent bg-clip-text 
              relative z-10 drop-shadow-[0_2px_10px_rgba(99,102,241,0.2)]">
              Let's Connect!
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology and design,
            I'm always excited to connect with like-minded individuals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 text-sm">
              <Sparkles className="w-4 h-4" />
              Summer Internship 2025
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 text-sm">
              <GraduationCap className="w-4 h-4" />
              Master Thesis Fall 2025
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-500 text-sm">
              <Briefcase className="w-4 h-4" />
              Full-time Position 2026
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="space-y-6">
          {/* Message Card */}
          <div className="group rounded-3xl bg-gradient-to-b from-teal-500/10 to-blue-500/5 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Send a Message</h3>
                    <p className="text-sm text-teal-500 font-medium mb-4">Quick and easy way to reach out</p>
                    <p className="text-foreground/60">
                      Want to discuss a project or just say hello? Drop me a line through the contact form.
                    </p>
                  </div>
                  <button className="text-xl font-medium flex items-center gap-2 px-4 py-4 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 transition-colors text-teal-500">
                    <MessageSquare className="w-5 h-5" />
                    <span>Open Form</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Quick Connect Card */}
            <div className="group rounded-3xl bg-gradient-to-b from-blue-500/10 to-blue-500/5 p-8 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Quick Connect</h3>
                    <p className="text-sm text-blue-500 font-medium">Direct email communication</p>
                  </div>
                </div>
                <button
                  onClick={handleEmailCopy}
                  className="p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors mb-6 w-full text-left"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-500" />
                    <p className="text-xl font-medium text-blue-500 break-all">
                      hello@lukashedstrom.com
                    </p>
                  </div>
                </button>
                <div className="flex gap-4 mt-auto">
                  <button
                    onClick={handleEmailCopy}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors flex-1 justify-center"
                  >
                    <Copy className="w-4 h-4 text-blue-500" />
                    <span className="text-blue-500">{emailCopied ? 'Copied!' : 'Copy Email'}</span>
                  </button>
                  <a
                    href="mailto:hello@lukashedstrom.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4 text-blue-500" />
                    <span className="text-blue-500">Open Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Network Card */}
            <div className="group rounded-3xl bg-gradient-to-b from-indigo-500/10 to-indigo-500/5 p-8 backdrop-blur-sm">
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Professional Network</h3>
                    <p className="text-sm text-indigo-500 font-medium">Let's connect and grow together</p>
                  </div>
                </div>
                <a
                  href="https://linkedin.com/in/lukashedstrom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors mb-6 w-full text-left"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-indigo-500" />
                    <p className="text-xl font-medium text-indigo-500">
                      Visit Profile
                    </p>
                  </div>
                </a>
                <div className="flex gap-4">
                  <a 
                    href="/cv.pdf" 
                    download
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors flex-1 justify-center"
                  >
                    <Download className="w-4 h-4 text-purple-500" />
                    <span className="text-purple-500">Resume</span>
                  </a>
                  <a 
                    href="/cv.pdf" 
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors flex-1 justify-center"
                  >
                    <Eye className="w-4 h-4 text-purple-500" />
                    <span className="text-purple-500">Preview</span>
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