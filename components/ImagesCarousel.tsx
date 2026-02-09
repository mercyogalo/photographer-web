'use client';

import { useState, useEffect } from 'react';
import { PORTFOLIO_IMAGES } from "@/lib/constants";
import Image from "next/image";

const getImagesToShow = () => {
  if (typeof window === 'undefined') return 4;
  const w = window.innerWidth;
  if (w < 768) return 1;
  if (w < 1024) return 2;
  return 4;
};

const ImagesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasEnded, setHasEnded] = useState(false);
  const [imagesToShow, setImagesToShow] = useState(4);

  useEffect(() => {
    setImagesToShow(getImagesToShow());
    const onResize = () => setImagesToShow(getImagesToShow());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const maxIndex = Math.max(0, PORTFOLIO_IMAGES.length - imagesToShow);

  useEffect(() => {
    setHasEnded(false);
    setCurrentIndex((i) => Math.min(i, maxIndex));
  }, [imagesToShow, maxIndex]);

  useEffect(() => {
    if (hasEnded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

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

  const displayedImages = PORTFOLIO_IMAGES.slice(currentIndex, currentIndex + imagesToShow);

  return (
    <section className="py-20 md:py-32 bg-black">
        <div className="relative w-full">
          <div className="overflow-hidden w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
              {displayedImages.map((portfolioImages, index) => (
                <div
                  key={`${portfolioImages.id}-${currentIndex}-${index}`}
                  className="relative w-full h-[400px] md:h-[500px] overflow-hidden group cursor-pointer"
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