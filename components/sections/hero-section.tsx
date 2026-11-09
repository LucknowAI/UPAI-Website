"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import Tilt from "react-parallax-tilt";

export default function HeroSection() {
  const images = [
    { src: "/6.jpg", alt: "Bara Imambara, Lucknow", x: 225, y: 225 },
    { src: "/5.jpg", alt: "The ghats of Varanasi", x: 225, y: 75 },
    { src: "/4.jpg", alt: "The Taj Mahal, Agra", x: 360, y: 150 },
    { src: "/3.jpg", alt: "Rumi Darwaza, Lucknow", x: 360, y: 300 },
    { src: "/7.jpg", alt: "Kanpur Museum", x: 225, y: 375 },
    { src: "/33.JPG", alt: "Speakers at the Gen AI Awadh Summit, Lucknow", x: 90, y: 300 },
    { src: "/9.jpg", alt: "Agra Fort", x: 90, y: 150 },
  ];

  const hexSize = 165;

  return (
    <section id="hero" className="py-6 relative">
    <div className="container mx-auto bg-black text-white overflow-hidden relative">

        {/* Main content */}
        <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left section */}
        <div className="flex-1 flex flex-col px-8 md:px-16 py-16 mt-12">
          <div className="flex  mb-6">
          <div className="px-5 py-1.5 bg-[#111] border border-white/10 rounded-full shadow-lg">
            <p className="text-xl font-medium text-white flex items-center">
              <span className="mr-2">•</span> नमस्ते, एआई उत्तर प्रदेश
            </p>
          </div>
        </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white/90">
            UPAI Labs
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-6">Uttar Pradesh AI Labs Foundation</p>
          <p className="text-xl md:text-2xl text-white/70 mb-12">
            Building AI talent, open source and research <br className="hidden md:block" />in Uttar Pradesh, starting with Lucknow
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://chat.whatsapp.com/IAM2fp4IoLiGbuI6ZeNfzH"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-white/90 transition-colors"
            >
              Join Our Community
            </Link>
            <Link
              href="/contact_us"
              className="flex items-center gap-2 text-white font-medium px-4 py-3 hover:text-white/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>

          {/* Right Section: Honeycomb collage grid */}
        
        <div className="flex-1 flex items-center justify-center relative">
          <Tilt>
          <div className="relative scale-[0.75] sm:scale-100 origin-center" style={{ width: 450, height: 450 }}>
            {images.map((img, idx) => (
              <div
                key={idx}
                className="absolute overflow-hidden shadow-lg"
                style={{
                  width: hexSize,
                  height: hexSize,
                  left: img.x - hexSize / 2,
                  top: img.y - hexSize / 2,
                  clipPath: 'polygon(25% 6.7%,75% 6.7%,100% 50%,75% 93.3%,25% 93.3%,0% 50%)',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="165px"
                  priority={idx < 3}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          </Tilt>
        </div>
      </div>
    </div>
    </section>
  )
}