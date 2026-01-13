"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import HeroNavbar from "@/components/HeroNavbar";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_IMAGES } from "@/lib/constants";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? PORTFOLIO_IMAGES
      : PORTFOLIO_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <HeroNavbar />
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&h=1080&fit=crop"
            alt="Portfolio"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Explore our collection of stunning photography work
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-semibold transition-all duration-200 relative ${
                  activeCategory === category
                    ? "text-primary"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary"
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 bg-white dark:bg-dark-bg">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover image-zoom"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                    <h3 className="text-white font-semibold text-lg mb-2 text-center">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{image.category}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

