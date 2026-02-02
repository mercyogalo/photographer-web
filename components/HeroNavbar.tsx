"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 w-full bg-[#fafafa]">
        <div className="max-w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black hover:opacity-70 transition-opacity"
              aria-label="Toggle menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>

        
            <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 lg:gap-12">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs lg:text-sm font-normal uppercase tracking-[0.2em] transition-colors duration-200 ${
                    pathname === link.href
                      ? "text-black"
                      : "text-black/70 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

          
            <Link
              href="/contact"
              className="md:hidden text-xs uppercase tracking-widest text-black/70 hover:text-black transition-colors"
            >
              CONTACT
            </Link>

           
            <div className="hidden md:block w-10"></div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="w-full h-px bg-black/10"></div>
      </nav>


      {/* Full Page Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-white"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[70] flex flex-col"
            >
              {/* Close Button */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-black hover:opacity-70 transition-opacity"
                  aria-label="Close menu"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Centered Menu Items */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-8 md:space-y-10 p-8">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-[0.15em] transition-colors duration-200 ${
                        pathname === link.href
                          ? "text-black"
                          : "text-black/60 hover:text-black"
                      }`}
                      style={{ fontFamily: '"Times New Roman", Times, serif' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}