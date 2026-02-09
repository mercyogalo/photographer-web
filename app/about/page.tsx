"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroNavbar from "@/components/HeroNavbar";
import { SERVICES } from "@/lib/constants";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { ArrowRight } from "lucide-react";
export default function AboutPage() {
  return (
    <div className="bg-white">
      <HeroNavbar />

     
      <section className="bg-[#fafafa] py-32 text-center">
        <h1 className="font-playfair text-6xl lg:text-8xl tracking-wide text-brown">
          ABOUT
        </h1>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-600">
          Capturing life's most precious moments with artistry and passion
        </p>
      </section>

    
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            
                    <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-2 gap-6 max-w-md w-full">

              <div
                className="col-span-2 h-[280px] rounded-[36px] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200')",
                  backgroundPosition: "center top",
                }}
              />

                  
          <div
            className="h-[140px] rounded-[36px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200')",
              backgroundPosition: "left center",
            }}
          />

          
          <div
            className="h-[120px] rounded-[36px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200')",
              backgroundPosition: "right bottom",
            }}
          />
        </div>
      </motion.div>


            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-brown">
                Our Story
              </h2>
              <p className="text-black text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                With over a decade of experience in professional photography, PhotoStudio has been dedicated to capturing life's most precious moments. Our journey began with a simple passion for storytelling through images, and has evolved into a full-service photography studio serving clients worldwide.
              </p>
              <p className="text-black text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                We specialize in wedding photography, portrait sessions, corporate events, and commercial photography. Our team of skilled photographers combines technical expertise with creative vision to deliver stunning results that exceed expectations.
              </p>
              <p className="text-black text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                What sets us apart is our commitment to understanding each client's unique vision. We take the time to listen, collaborate, and create images that truly reflect your personality, style, and the essence of your special moments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>




      <section className="py-20 md:py-32 bg-[#fafafa]">
  <div className="container-custom px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden">
          <Image
            src="/images/Hero/hero-3.jpg"
            alt="Our Story"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 text-brown">
          Our Story
        </h2>

        <p className="text-black text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
          With over a decade of experience in professional photography, PhotoStudio has been dedicated to capturing life's most precious moments. Our journey began with a simple passion for storytelling through images, and has evolved into a full-service photography studio serving clients worldwide.
        </p>

        <p className="text-black text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
          We specialize in wedding photography, portrait sessions, corporate events, and commercial photography. Our team of skilled photographers combines technical expertise with creative vision to deliver stunning results that exceed expectations.
        </p>

        <p className="text-black text-sm sm:text-base md:text-lg leading-relaxed">
          What sets us apart is our commitment to understanding each client's unique vision. We take the time to listen, collaborate, and create images that truly reflect your personality, style, and the essence of your special moments.
        </p>
      </motion.div>

    </div>
  </div>
</section>

      


       
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-brown">
              Our Services
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Professional photography services tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
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
                <div className="absolute bottom-0 left-0 right-0 p-6 text-black">
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
      
 
  <section className="py-20 md:py-32 bg-black">
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2  style={{ fontFamily: '"Times New Roman", Times, serif' }}  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Motivation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto">
              Discover what drives us to capture life's most precious moments
            </p>
          </motion.div>

         
          <div className="w-full">
            <FAQ />
          </div>
        </div>
      </section>


      <Testimonials />

        <section className="lg:py-42 md:py-40 py-32 relative">
  <div className="absolute inset-0 ">
    <Image
      src="/images/Hero/hero-3.jpg"
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




    
    </div>
  );
}

