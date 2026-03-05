'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ScrollCarousel() {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const slides: { image: string }[] = [
    {
      image: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=1200&h=1600&fit=crop',
    },
    {
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=1600&fit=crop',
    },
    {
      image: '/images/Portfolio/portfolio12.jpg',
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
        if (!sectionRef.current) return;

        const section = sectionRef.current as HTMLDivElement;
        const rect = section.getBoundingClientRect();
      
      // Calculate scroll progress within the section (0 to 1)
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -sectionTop / sectionHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate transform for each slide based on scroll progress
  const getSlideTransform = (index: number): string => {
    const totalSlides = slides.length;
    const progressPerSlide = 1 / (totalSlides - 1);
    
    // Calculate when this slide should start and finish moving
    const slideStart = index * progressPerSlide;
    const slideEnd = (index + 1) * progressPerSlide;
    
    if (scrollProgress <= slideStart) {
      // Slide hasn't started moving yet
      return 'translateY(0%)';
    } else if (scrollProgress >= slideEnd && index < totalSlides - 1) {
      // Slide has fully moved out
      return 'translateY(-100%)';
    } else if (index < totalSlides - 1) {
      // Slide is currently moving
      const slideProgress = (scrollProgress - slideStart) / progressPerSlide;
      return `translateY(-${slideProgress * 100}%)`;
    }
    
    return 'translateY(0%)';
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-[300vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute inset-0 will-change-transform"
            style={{
              transform: getSlideTransform(index),
              zIndex: slides.length - index,
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt="Gallery Image"
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        ))}

        {/* Static Content - Visible across all slides */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="max-w-5xl mx-auto px-6 text-center text-white">
            <p className="text-lg md:text-xl font-light mb-4 tracking-wider uppercase">
              SOMETHING BEAUTIFUL
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Let's Create
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light">
              I'd love to hear from you. Enquire to explore my collections and reserve your wedding date.
            </p>
            <a
              href="#your-link"
              className="inline-block text-white text-lg font-semibold tracking-wider uppercase hover:opacity-80 transition-opacity duration-300 pointer-events-auto"
            >
              <span>ENQUIRE</span><ArrowRight
                  className="w-4 h-4"
                  style={{ transform: "rotate(-45deg)" }}
                />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}