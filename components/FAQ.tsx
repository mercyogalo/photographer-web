"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-0 bg-black">
      {FAQS.map((faq, index) => (
        <div
          key={faq.id}
          className="border-b border-gray-700 first:border-b bg-black"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full py-5 px-4 md:px-6 lg:px-8 flex items-center justify-between text-left transition-colors duration-200 group bg-black"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <div className="flex items-center gap-4 md:gap-6 flex-1">
              <span  style={{ fontFamily: '"Times New Roman", Times, serif' }}
              className="text-white text-lg md:text-xl font-semibold flex-shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3  style={{ fontFamily: '"Times New Roman", Times, serif' }}
              className="text-[4vw] md:text-[4vw] sm:text-[3vw] lg:text-[4vw] text-white pr-8 transition-colors">
                {faq.question}
              </h3>
            </div>
            <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Plus className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.div>
            </div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`faq-answer-${faq.id}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden bg-black"
              >
                <div className="px-4 md:px-6 lg:px-8 pb-5">
                  <div className="flex items-start gap-4 md:gap-6">
                    <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed pt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

