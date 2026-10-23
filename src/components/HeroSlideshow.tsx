"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  url: string;
  alt: string;
}

const slides: Slide[] = [
  { url: "/images/tractor.webp", alt: "Commercial 4WD Agricultural Tractor" },
  { url: "/images/tanks.webp", alt: "Water Harvesting Tank Installation" },
  { url: "/images/data.webp", alt: "Farm Data Telemetry and Analytics" },
  { url: "/images/equip.webp", alt: "Agro Processing Equipment" },
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950 pointer-events-none">
      {slides.map((slide, index) => (
        <div
          key={slide.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-85 scale-105" : "opacity-0 scale-100"
          } transition-transform duration-7000`}
        >
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
            unoptimized
          />
        </div>
      ))}

      {/* Balanced Overlay: Keeps text razor-sharp while letting full image colors pop */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/30 z-10" />
    </div>
  );
}