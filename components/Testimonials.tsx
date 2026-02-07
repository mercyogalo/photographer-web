'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      headline: "Absolutely Stunning Work",
      review: "Working with this team was an absolute dream. From the initial consultation to the final delivery, every step was handled with professionalism and creativity. The attention to detail was remarkable, and the final product exceeded all our expectations. I couldn't be happier with the results!",
      reviewer: "Sarah Johnson"
    },
    {
      headline: "Exceeded All Expectations",
      review: "I was blown away by the quality and creativity. The team took the time to understand my vision and brought it to life in ways I never imagined possible. Their dedication to excellence is evident in every aspect of their work. Highly recommend to anyone looking for top-tier service!",
      reviewer: "Michael Chen"
    },
    {
      headline: "Professional and Creative",
      review: "The level of professionalism and artistic vision is unmatched. Every interaction was smooth, every deadline was met, and the final results were breathtaking. This team truly understands how to blend technical skill with creative artistry. I will definitely be working with them again!",
      reviewer: "Emily Rodriguez"
    },
    {
      headline: "A True Artist at Work",
      review: "From start to finish, the experience was exceptional. The attention to every small detail, the willingness to go above and beyond, and the stunning final product made this collaboration unforgettable. I'm so grateful for the beautiful work and the wonderful experience throughout the process.",
      reviewer: "David Thompson"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        changeSlide('next');
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length, currentIndex]);

  const changeSlide = (direction) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    
    setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      } else {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
      }
      
      // Wait a bit then fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400); // Duration of fade out
  };

  const nextSlide = () => {
    changeSlide('next');
  };

  const prevSlide = () => {
    changeSlide('prev');
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  return (
    <section className="w-full py-24 px-4 bg-[#fafafa]">
        <div className="row">
          <div className="col-12">
            {/* Main Heading */}
            <h4 className="text-3xl md:text-3xl lg:text-3xl font-bold text-center mb-16 text-gray-900">
              CLIENTS LOVE
            </h4>

            {/* Carousel Container */}
            <div 
              className="relative max-w-5xl mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 lg:-translate-x-16 z-10 text-black hover:text-gray-600 transition-colors disabled:opacity-50"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 lg:translate-x-16 z-10 text-black hover:text-gray-600 transition-colors disabled:opacity-50"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

             
              <div className="flex flex-col justify-center min-h-[400px]">
                <div 
                  className={`text-center transition-opacity duration-400 ${
                    isTransitioning ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                 
                  <h3 className="text-2xl md:text-3xl italic lg:text-4xl font-semibold mb-6 text-black">
                    "{testimonials[currentIndex].headline}"
                  </h3>

                  
                  <p className="text-lg md:text-xl text-black leading-relaxed mb-8 max-w-3xl mx-auto">
                    {testimonials[currentIndex].review}
                  </p>

                 
                  <p className="text-xl md:text-2xl font-semibold text-black">
                    {testimonials[currentIndex].reviewer}
                  </p>
                </div>
              </div>

             

            </div>
          </div>
        </div>
    </section>
  );
}