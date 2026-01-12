"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {FAQS.map((faq, index) => (
        <div
          key={faq.id}
          className="border-b border-gray-200 dark:border-gray-700 first:border-t"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full py-5 px-0 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-dark-bgSecondary transition-colors duration-200 group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${faq.id}`}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-8 group-hover:text-primary transition-colors">
              {faq.question}
            </h3>
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                )}
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
                className="overflow-hidden"
              >
                <p className="pb-5 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

