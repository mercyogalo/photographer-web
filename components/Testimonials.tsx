'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

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
        setDirection(1);
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 8000); 

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

  return (
    <section className="w-full py-24 px-4 bg-[#E3E4E2]">
        <div className="row">
          <div className="col-12">
           
            <h4 className="text-3xl md:text-3xl lg:text-3xl font-bold text-center mb-5 text-black">
              CLIENTS LOVE
            </h4>

           
            <div 
              className="relative max-w-5xl mx-auto overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
            
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 lg:-translate-x-16 z-10 text-black hover:text-gray-300 transition-colors"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 lg:translate-x-16 z-10 text-black hover:text-gray-300 transition-colors"
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

             
              <div className="flex flex-col justify-center min-h-[400px] relative">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="text-center"
                  >
                    <h3  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    className="text-2xl md:text-2xl italic font-semibold lg:text-3xl italic mb-6 text-black">
                      "{testimonials[currentIndex].headline}"
                    </h3>

                    <p className="text-lg md:text-xl text-black leading-relaxed mb-8 max-w-3xl mx-auto">
                      {testimonials[currentIndex].review}
                    </p>

                    <p  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    className="text-xl md:text-2xl font-semibold text-black">
                      {testimonials[currentIndex].reviewer}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}