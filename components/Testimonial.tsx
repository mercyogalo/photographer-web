"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  rating: number;
}

export default function Testimonial({ quote, name, role, rating }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-black p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 min-h-[250px] flex flex-col"
    >
      <div className="mb-4">
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating
                  ? "fill-white text-white"
                  : "fill-gray-700 text-gray-700"
              }`}
            />
          ))}
        </div>
        <p className="text-white text-base leading-relaxed italic relative pl-6">
          <span className="absolute left-0 top-0 text-4xl text-white opacity-20 font-serif">
            &ldquo;
          </span>
          {quote}
        </p>
      </div>
      <div className="mt-auto pt-4 border-t border-gray-700">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white">{role}</p>
      </div>
    </motion.div>
  );
}

