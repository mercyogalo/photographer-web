"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import Button from "@/components/ui/Button";
import HeroNavbar from "@/components/HeroNavbar";
import { SERVICES, COMPANY_LOGOS, PORTFOLIO_IMAGES } from "@/lib/constants";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const portfolioImages = PORTFOLIO_IMAGES.slice(0, 10);

  // Hero images for slideshow
  const heroImages = [
    "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=1080&fit=crop",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop",
  ];

  // Auto-scroll hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (portfolioImages.length - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, portfolioImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (portfolioImages.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length - 2) % (portfolioImages.length - 2));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroNavbar />
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentHeroImage ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt={`Hero ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6"
          >
            Capturing Moments That Last Forever
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
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
         
        </motion.div>
      </section>

   
{/* About Section */}
<section className="py-20 md:py-32 bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px]"
            >
              {/* Large image - back layer */}
              <div className="absolute top-0 left-0 w-3/5 aspect-[4/5] z-0">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                  alt="Photographer"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              {/* Tag positioned with spacing from both images */}
              <div className="absolute top-[42%] left-[50%] bg-primary text-white p-4 rounded-lg shadow-lg z-20">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-sm">Top Projects Done</div>
              </div>
              
              {/* Small image - front layer, overlapping the large image */}
              <div className="absolute bottom-0 right-0 w-2/5 aspect-square z-10">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop"
                  alt="Photography work"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-4">
                FEEL THE LENSE
              </p>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-gray-100">
                Make your photos stand out from the rest
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <Button href="/about">Discover More</Button>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Company Logos Section */}
      <section className="py-12 bg-gray-50 dark:bg-dark-bgSecondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {COMPANY_LOGOS.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo}
                  alt={`Company ${index + 1}`}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Shots Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-dark-bg">
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
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=800&fit=crop"
                alt="Best Shots"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-8 text-white">
                <h3 className="text-3xl font-heading font-bold mb-4">Best Shots</h3>
                <p className="text-center mb-6 text-gray-200">
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
                  {portfolioImages.map((image, index) => (
                    <div key={image.id} className="w-1/3 flex-shrink-0 px-2">
                      <div className="relative aspect-[3/4] overflow-hidden group">
                        <Image
                          src={image.url}
                          alt={image.title}
                          fill
                          className="object-cover image-zoom"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white font-semibold">{image.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors"
                aria-label="Previous"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-900 transition-colors"
                aria-label="Next"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-dark-bgSecondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-gray-100">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional photography services tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-96 overflow-hidden group cursor-pointer"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-heading font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-200">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-dark-bg relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-10"
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
              className="lg:col-span-1"
            >
              <div className="relative aspect-video overflow-hidden">
                <VideoPlayer
                  src="/videos/showcase-video.mp4"
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
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-gray-900 dark:text-gray-100">
                Behind the Lens
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Experience the artistry and passion that goes into every photograph. Our team combines technical expertise with creative vision to deliver stunning results.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                From intimate portraits to grand celebrations, we capture the essence of every moment with precision and artistry.
              </p>
              <Button href="/portfolio">See More</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 md:py-32 bg-gray-50 dark:bg-dark-bgSecondary overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-gray-100">
              Portfolio Preview
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
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

