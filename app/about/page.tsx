"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroNavbar from "@/components/HeroNavbar";
import { SERVICES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <HeroNavbar />

      {/* Hero Section - reuse portfolio layout */}
      <section className="bg-[#fafafa] py-32 text-center">
        <h1 className="font-playfair text-6xl lg:text-8xl tracking-wide text-brown">
          ABOUT
        </h1>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-600">
          Capturing life's most precious moments with artistry and passion
        </p>
      </section>

      {/* About Content Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image with Decorative Border */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-3/4 aspect-[4/5] mx-auto">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop"
                  alt="Photographer"
                  fill
                  className="object-cover"
                />
                {/* Decorative Border - Top and Left */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-4 border-l-4 border-white rounded-tl-lg" />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-brown">
                Our Story
              </h2>
              <p className="text-black mb-4 leading-relaxed">
                With over a decade of experience in professional photography, PhotoStudio has been dedicated to capturing life's most precious moments. Our journey began with a simple passion for storytelling through images, and has evolved into a full-service photography studio serving clients worldwide.
              </p>
              <p className="text-black mb-4 leading-relaxed">
                We specialize in wedding photography, portrait sessions, corporate events, and commercial photography. Our team of skilled photographers combines technical expertise with creative vision to deliver stunning results that exceed expectations.
              </p>
              <p className="text-black mb-4 leading-relaxed">
                What sets us apart is our commitment to understanding each client's unique vision. We take the time to listen, collaborate, and create images that truly reflect your personality, style, and the essence of your special moments.
              </p>
              <p className="text-black leading-relaxed">
                Every photograph we create is a work of art, carefully composed and edited to perfection. We believe that great photography is not just about capturing what you see, but about revealing the emotions, stories, and beauty that lie beneath the surface.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


         {/* Services Section */}
      <section className="py-20 md:py-32 bg-white">
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
            <p className="text-black max-w-2xl mx-auto">
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
      

    
    </div>
  );
}

