"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Apply infinite hue rotation to the video background
    if (videoElement) {
      gsap.to(videoElement, {
        filter: "hue-rotate(360deg)", // Rotate through all hues
        duration: 20, // Duration for one full rotation
        repeat: -1, // Infinite repetition
        ease: "linear", // Smooth looping
      });
    }

    // Title cycling animation
    const titles = ["UX Designer", "Developer", "Creator", "Innovator"]; // List of titles
    const textElement = textRef.current;

    if (textElement) {
      let currentIndex = 0;

      // Function to update the text content
      const updateText = () => {
        gsap.to(textElement, {
          opacity: 0, // Fade out
          y: 100, // Slide down slightly
          duration: 1.2,
          ease: "power4.inOut", // Smooth ease for slide out
          onComplete: () => {
            currentIndex = (currentIndex + 1) % titles.length; // Cycle through titles
            textElement.innerText = titles[currentIndex];

            gsap.fromTo(
              textElement,
              { y: -100 }, // Start position (slide in from above)
              {
                opacity: 1, // Fade in
                y: 0, // Reset position
                duration: 1.0,
                ease: "power4.out", // Smooth ease for slide in
              }
            );
          },
        });
      };

      // Loop through titles with a delay
      const interval = setInterval(updateText, 5000); // Change every 5 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, []);

  return (
    <section
      id="about"
      className="h-screen bg-gray-100 flex items-center justify-center"
    >
      {/* Video Background */}
      <div
        className="relative flex justify-center items-center"
        style={{
          width: "80vw", // Video width: 80% of the viewport width
          height: "65vh", // Video height: 65% of the viewport height
        }}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video10.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Tint Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-20 pointer-events-none"></div>

        {/* Animated Text */}
        <div className="absolute text-center">
          <h1
            ref={textRef}
            className="text-9xl font-fixelDisplay font-black text-transparent"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0)", // Frosted-like edge
              WebkitTextFillColor: "rgba(255, 255, 255, 1)", // Ensures the inside stays transparent
            }}
          >
            UX Designer
          </h1>
        </div>
      </div>
    </section>
  );
}
