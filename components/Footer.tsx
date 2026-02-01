import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const midpoint = Math.ceil(NAV_LINKS.length / 2);
  const leftLinks = NAV_LINKS.slice(0, midpoint);
  const rightLinks = NAV_LINKS.slice(midpoint);

  return (
    <footer className="bg-black text-white pt-20">
      <div className="container-custom">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          {/* Left */}
          <div className="space-y-8">
            <div className="w-16 h-16 border border-white flex items-center justify-center text-xl font-serif">
              D
            </div>

            <p className="text-gray-300 text-lg max-w-sm">
              Refined and timeless imagery for modern day lovers.
            </p>
          </div>

          {/* Right: Auto-generated Nav */}
          <div className="grid grid-cols-2 gap-16 font-serif text-lg">
            <ul className="space-y-4">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              {rightLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brand Text */}
        <div className="overflow-hidden mb-16">
          <h1
            className="text-[18vw] leading-none whitespace-nowrap"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
          FULGENCE
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between pb-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FULGENCE RABACH. ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>
  );
}
