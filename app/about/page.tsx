"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import HeroNavbar from "@/components/HeroNavbar";
import Testimonial from "@/components/Testimonial";
import { TESTIMONIALS } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <HeroNavbar />
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop"
            alt="About"
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/60 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 text-brown"
          >
            About PhotoStudio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Capturing life's most precious moments with artistry and passion
          </motion.p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20 md:py-32 bg-black">
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
              <p className="text-white mb-4 leading-relaxed">
                With over a decade of experience in professional photography, PhotoStudio has been dedicated to capturing life's most precious moments. Our journey began with a simple passion for storytelling through images, and has evolved into a full-service photography studio serving clients worldwide.
              </p>
              <p className="text-white mb-4 leading-relaxed">
                We specialize in wedding photography, portrait sessions, corporate events, and commercial photography. Our team of skilled photographers combines technical expertise with creative vision to deliver stunning results that exceed expectations.
              </p>
              <p className="text-white mb-4 leading-relaxed">
                What sets us apart is our commitment to understanding each client's unique vision. We take the time to listen, collaborate, and create images that truly reflect your personality, style, and the essence of your special moments.
              </p>
              <p className="text-white leading-relaxed">
                Every photograph we create is a work of art, carefully composed and edited to perfection. We believe that great photography is not just about capturing what you see, but about revealing the emotions, stories, and beauty that lie beneath the surface.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Clients Say
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, index) => (
              <Testimonial
                key={testimonial.id}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

