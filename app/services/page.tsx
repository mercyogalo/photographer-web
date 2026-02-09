"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroNavbar from "@/components/HeroNavbar";
import VideoPlayer from "@/components/VideoPlayer";
import { SERVICES } from "@/lib/constants";

export default function ServicesPage() {
  const blogVideos = [
    {
      id: 1,
      title: "Wedding Photography Tips",
      description: "Learn the secrets to capturing perfect wedding moments with our expert tips and techniques.",
      videoSrc: "/videos/Blog/blog1.mp4",
    },
    {
      id: 2,
      title: "Portrait Lighting Masterclass",
      description: "Master the art of portrait lighting and create stunning professional portraits every time.",
      videoSrc: "/videos/Blog/blog2.mp4",
    },
    {
      id: 3,
      title: "Event Photography Essentials",
      description: "Discover the essential equipment and techniques for successful event photography.",
      videoSrc: "/videos/Blog/blog3.mp4",
    },
    {
      id: 4,
      title: "Editing Workflow Guide",
      description: "Streamline your editing process with our comprehensive workflow guide and best practices.",
      videoSrc: "/videos/Blog/blog4.mp4",
    },
  ];

  return (
    <div>
    
      <section className="relative h-[100vh] lg:h-[100vh] md:h-[70vh] sm-[60vh] flex items-center overflow-hidden">
        <HeroNavbar />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Hero/hero-3.jpg"
            alt="Services"
            fill
            className="object-cover "
          />
        </div>
        <div className="absolute inset-0 bg-gray-900/60 z-10" />
        <div className="relative z-20 text-left text-white px-4 md:px-8 lg:px-12 xl:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-brown text-left"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl text-white text-left"
          >
            Professional photography services tailored to your needs
          </motion.p>
        </div>
      </section>

    
      <section className="py-20 md:py-32 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, index) => (
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
                  <h3 className="text-2xl font-heading font-bold mb-2 text-brown">{service.title}</h3>
                  <p className="text-white">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Videos Section */}
      <section id="blog" className="py-20 md:py-32 bg-[#fafafa]">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 text-brown">
              Blog
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mx-auto">
              Tips, tutorials, and insights from our photography experts
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {blogVideos.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
    
                  <div className="relative aspect-[9/16] md:aspect-[9/16] lg:aspect-auto">
                    <VideoPlayer
                      src={blog.videoSrc}
                      className="w-full h-full"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-6 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-black">
                      {blog.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-black mb-4 leading-relaxed">
                      {blog.description}
                    </p>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

