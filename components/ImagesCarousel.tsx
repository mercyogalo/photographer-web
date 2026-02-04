'use client';

import { useState, useEffect } from 'react';
import { PORTFOLIO_IMAGES } from "@/lib/constants";
import Image from "next/image";


const ImagesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  
  const IMAGES_TO_SHOW = 4;
  const maxIndex = Math.max(0, PORTFOLIO_IMAGES.length - IMAGES_TO_SHOW);

  useEffect(() => {
    if (hasEnded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        
        // Stop when we reach the last set of 4 images
        if (nextIndex > maxIndex) {
          setHasEnded(true);
          clearInterval(interval);
          return prevIndex;
        }
        
        return nextIndex;
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, [hasEnded, maxIndex]);

  // Get exactly 4 images to display
  const displayedImages = PORTFOLIO_IMAGES.slice(currentIndex, currentIndex + IMAGES_TO_SHOW);

  return (
    <section className="py-20 md:py-32 bg-black">
        <div className="relative w-full">
          <div className="overflow-hidden w-full">
            <div 
              className="flex gap-2 w-full"
            >
              {displayedImages.map((portfolioImages, index) => (
                <div
                  key={`${portfolioImages.id}-${currentIndex}-${index}`}
                  className="relative flex-shrink-0 w-[calc(25%-0.375rem)] h-[400px] md:h-[500px] overflow-hidden group cursor-pointer"
                >
                  
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                  
                  <Image
                    src={portfolioImages.url}
                    alt={portfolioImages.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};


export default ImagesCarousel;