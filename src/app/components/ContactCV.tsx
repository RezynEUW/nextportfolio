"use client";

import { MessageCircle } from "lucide-react"; // Importing from Lucide

interface ContactCVProps {
  active?: boolean; // Optional prop for active state styling
  onClick?: () => void; // Optional onClick handler
}

export default function ContactCV({ active, onClick }: ContactCVProps) {
  return (
    <div className="fixed top-5 right-4 z-50">
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          if (onClick) onClick(); // Call optional onClick handler
        }}
        className={`relative z-10 inline-flex text-xl items-center px-8 py-3 rounded-full transition-all duration-200 bg-white/20 backdrop-blur-sm shadow border border-white/30 ${
          active ? "text-black font-fixelDisplay" : "text-black font-fixelDisplay"
        }`}
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.10), inset 0 0 10px rgba(255, 255, 255, 0.10)",
        }}
      >
        {/* Icon */}
        <MessageCircle className="w-5 h-5 mr-2 text-current" />
        Contact
      </a>
    </div>
  );
}
