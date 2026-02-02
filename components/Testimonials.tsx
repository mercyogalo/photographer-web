'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full py-32 px-4 bg-white">
        <div className="row">
          <div className="col-12">
            {/* Main Heading */}
            <h4 className="text-3xl md:text-3xl lg:text-3xl font-bold text-center mb-16 text-gray-900">
              CLIENTS LOVE
            </h4>

            {/* Carousel Container */}
            <div className="relative max-w-5xl mx-auto">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 lg:-translate-x-16 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <svg 
                  className="w-6 h-6 text-gray-800" 
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
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 lg:translate-x-16 z-10 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <svg 
                  className="w-6 h-6 text-gray-800" 
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

              {/* Testimonial Content */}
              <div className="flex flex-col justify-center">
                <div className="text-center">
                  {/* Review Headline */}
                  <h3 className="text-2xl md:text-3xl italic lg:text-4xl font-semibold mb-6 text-gray-900">
                    "{testimonials[currentIndex].headline}"
                  </h3>


                  {/* Review Text */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                    {testimonials[currentIndex].review}
                  </p>

                  {/* Reviewer Name */}
                  <p className="text-xl md:text-2xl font-semibold text-gray-900">
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