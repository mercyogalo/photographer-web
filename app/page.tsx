
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Button from "@/components/ui/Button";
import HeroNavbar from "@/components/HeroNavbar";
import Logo from "@/components/Logo";
import { PORTFOLIO_IMAGES, BEST_SHOTS, SERVICES } from "@/lib/constants";
import ScrollCarousel from "@/components/Scrollcarousel";
import Testimonials from "@/components/Testimonials";

function HeroCarousel({ images, interval = 4000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((i) => (i + 1) % images.length),
      interval
    );
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const portfolioImages = PORTFOLIO_IMAGES.slice(0, 10);
  const bestShotsImages = BEST_SHOTS;
  const maxBestShotsSlides = Math.max(0, bestShotsImages.length - 3);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(
      () =>
        setCurrentSlide(
          (prev) => (prev + 1) % (maxBestShotsSlides + 1)
        ),
      3000
    );
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxBestShotsSlides]);

   const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (maxBestShotsSlides + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxBestShotsSlides + 1) % (maxBestShotsSlides + 1));
  };


  return (
    <div>
      <section className="relative h-screen bg-white overflow-hidden">
        <HeroNavbar />

       
        <div className=" top-16 md:top-20 left-0 right-0 z-40 bg-white py-6">
          <h1
            className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.1em] text-black"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            FULGENCE RABACH
          </h1>
        </div>

        {/* CAROUSELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          <HeroCarousel
            images={[
              "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
              "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&q=80",
            ]}
          />
          <HeroCarousel
            images={[
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1200&q=80",
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
            ]}
            interval={4500}
          />
        </div>

        {/* CENTERED LOGO + TEXT + CTA */}
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center gap-8 text-center">
            <Logo size="lg" animated />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-[0.2em]"
            >
              Where Beauty Meets Love
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              className="pointer-events-auto"
            >
              <Link href="/portfolio" className="text-white">
                EXPLORE MY WORK 
                <ArrowRight
                  className="w-4 h-4"
                  style={{ transform: "rotate(-45deg)" }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-center">
        <h3 className="text-lg font-playfair">FULGENCE RABACH CREATIONS</h3>
        <h2 className="lg:text-5xl font-montserrat">CAPTURING STORIES</h2>
        <h2 className="lg:text-5xl mt-2 font-montserrat">THAT LAST A LIFETIME</h2>
      </section>

    {/* About Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[420px] md:h-[520px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
                alt="Artist"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2
                className="lg:text-7xl md:text-5xl mb-6"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Welcome to <span className="italic">Rabach Creations</span>
              </h2>

              <p className="mb-6 text-white/90">
                We believe every moment tells a story. From weddings and special events to wildlife and documentary photography, we capture life’s beauty with creativity, precision and passion. Every image is crafted to preserve memories, evoke emotion and celebrate the world around us.
              </p>

              <p className="mb-10 text-white/90">
               Our work goes beyond just taking pictures it’s about telling stories that matter. Whether it’s the laughter of a wedding, the elegance of a bird in flight, or the raw truth of a documentary moment, Rabach Creations turns fleeting instants into timeless memories you’ll cherish forever.
              </p>

              <Link
                href="/about"
                className="inline-flex items-center gap-3 uppercase tracking-widest text-sm"
              >
                Meet the artist
                <ArrowRight
                  className="w-4 h-4"
                  style={{ transform: "rotate(-45deg)" }}
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


       <section className="bg-white py-20 text-center">
        <h3 className="text-lg font-playfair">Featured WEDDINGS</h3>
        <h2 className="lg:text-5xl mt-2 font-montserrat">A visual journey of love and timeless wedding stories.</h2>
      </section>

          <section className="py-20 md:py-32 bg-white">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {SERVICES.slice(0,3).map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative w-full h-[600px] md:h-[700px] lg:h-screen overflow-hidden group"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
</section>
            
      <section className="bg-white py-20 text-center">
        <h3 className="text-lg font-playfair">FULGENCE RABACH CREATIONS</h3>
        <h2 className="lg:text-5xl font-montserrat">CAPTURING STORIES</h2>
        <h2 className="lg:text-5xl mt-2 font-montserrat">THAT LAST A LIFETIME</h2>
      </section>


   {/* Best Shots Section */}
<section className="py-20 md:py-32 bg-white">
  <div className="container-custom">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-12 relative">
        <div className="relative overflow-visible">
          <div className="overflow-hidden mx-[-7.14%]">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${currentSlide * 28.57}% + 7.14%))` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {bestShotsImages.map((image, index) => (
                <div key={image.id} className="w-[28.57%] flex-shrink-0 px-2">
                  <div className="relative aspect-[3/4] overflow-hidden group">
                    <Image
                      src={image.url}
                      alt={image.title}
                      fill
                      className="object-cover image-zoom"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/90 p-2 rounded-full shadow-lg hover:bg-black transition-colors z-10"
          aria-label="Previous"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/90 p-2 rounded-full shadow-lg hover:bg-black transition-colors z-10"
          aria-label="Next"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  </div>
</section>

   
     
      <section className="lg:py-42 md:py-40 py-32 relative">
  <div className="absolute inset-0 ">
    <Image
      src="/images/Global/video-section-image.jpg"
      alt="Background"
      fill
      className="object-cover"
    />
  </div>
  <div className="container-custom relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-end min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center items-center"
      >
        <a 
          href="/about" 
          className="flex items-center gap-3 text-white text-lg font-semibold tracking-wider uppercase hover:opacity-80 transition-opacity duration-300 group"
        >
          <span>EXPLORE MY SERVICES</span>
           <ArrowRight
                  className="w-4 h-4"
                  style={{ transform: "rotate(-45deg)" }}
                />
        </a>
      </motion.div>
    </div>
  </div>
</section>



      <Testimonials />

      <ScrollCarousel />

             
           

    </div>
  );
}