"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Button from "@/components/ui/Button";
import HeroNavbar from "@/components/HeroNavbar";
import { SERVICES, PORTFOLIO_IMAGES, BEST_SHOTS } from "@/lib/constants";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const portfolioImages = PORTFOLIO_IMAGES.slice(0, 10);
  const bestShotsImages = BEST_SHOTS;




  // Auto-scroll carousel for best shots
  const maxBestShotsSlides = Math.max(0, bestShotsImages.length - 3);
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (maxBestShotsSlides + 1));
    }, 3000);
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
     
    {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
  <HeroNavbar />
  
 {/* Blurred background layer */}
<div className="absolute inset-0 z-0">
  <Image
    src='/images/Global/personal-image1.jpeg'
    alt="Hero Background Blur"
    fill
    className="object-cover object-center scale-110"
    priority
  />
</div>

{/* Gradient overlay for seamless blending */}
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 z-10" />

<div className="relative z-20 text-center text-white px-4">
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-brown drop-shadow-2xl"
  >
    Capturing Moments That Last Forever
  </motion.h1>
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-lg"
  >
    Professional photography services for weddings, events, portraits, and more
  </motion.p>
</div>

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
>
  {/* Add scroll indicator or CTA button here if needed */}
</motion.div>
</section>
   

{/* About Section */}
<section className="py-15 md:py-20 bg-gray-900">
  <div className="container-custom">
    <div className="relative max-w-6xl mx-auto">
      
      {/* Main container with overlap effect */}
      <div className="relative">
        
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full md:w-1/2"
        >
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
              alt="Photographer"
              fill
              className="object-cover shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Right side - White content box overlapping image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 md:p-12 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[55%] shadow-2xl mt-8 md:mt-0"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-black uppercase tracking-wide">
            ABOUT US
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            What a range unnamed that requires about Ipsum ipsam wh in reprehen It in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections and contains the plus ultra sections progress and efforts.
          </p>
          
          {/* Three dots indicator */}
          <div className="flex gap-2 mt-8">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </motion.div>
        
      </div>
    </div>
  </div>
</section>


      {/* Best Shots Section */}
      <section className="py-20 md:py-32 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - col-3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 relative h-96 lg:h-auto"
            >
              <Image
                src="/images/Bestshots/bestshot7.jpg"
                alt="Best Shots"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-8 text-white">
                <h3 className="text-3xl font-heading font-bold mb-4 text-brown">Best Shots</h3>
                <p className="text-center mb-6 text-white">
                  Explore our curated collection of stunning photography work
                </p>
                <Button href="/portfolio" variant="secondary">
                  BROWSE ALL IMAGES
                </Button>
              </div>
            </motion.div>

            {/* Right Side - col-9 Carousel */}
            <div className="lg:col-span-9 relative">
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  {bestShotsImages.map((image, index) => (
                    <div key={image.id} className="w-1/3 flex-shrink-0 px-2">
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
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/90 p-2 rounded-full shadow-lg hover:bg-black transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/90 p-2 rounded-full shadow-lg hover:bg-black transition-colors"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-20 md:py-32 bg-black">
  <div className="container-custom">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-brown">
        Our Services
      </h2>
      <p className="text-white max-w-2xl mx-auto">
        Professional photography services tailored to your needs
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
      {SERVICES.slice(0, 4).map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative h-96 overflow-hidden group cursor-pointer ${
            index % 2 === 1 ? 'md:mt-10' : ''
          }`}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover image-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-heading font-bold mb-2 text-brown">
              {service.title}
            </h3>
            <p className="text-white">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Video Showcase Section */}
      <section className="py-10 md:py-32 bg-grey-200 relative">
        <div className="absolute inset-0">
          <Image
            src="/images/Global/video-section-image.jpg"
            alt="Background"
            fill
            className="object-cover opacity-95"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex justify-center items-center"
            >
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
                <VideoPlayer
                  src="/videos/homepageBlog/blog1.mp4"
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-brown">
                Behind the Lens
              </h2>
              <p className="text-white mb-4 leading-relaxed">
                Experience the artistry and passion that goes into every photograph. Our team combines technical expertise with creative vision to deliver stunning results.
              </p>
              <p className="text-white mb-8 leading-relaxed">
                From intimate portraits to grand celebrations, we capture the essence of every moment with precision and artistry.
              </p>
              <Button href="/services#blog">See More</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 md:py-32 bg-black overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-brown">
              Portfolio Preview
            </h2>
            <p className="text-white">
              A glimpse of our recent work
            </p>
          </motion.div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {portfolioImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex-shrink-0 w-80 h-96 relative overflow-hidden group"
              >
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/portfolio">Browse More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

