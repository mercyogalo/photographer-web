import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import Logo from "@/components/Logo";
import ImagesCarousel from "@/components/ImagesCarousel";


export default function Footer() {
  const midpoint = Math.ceil(NAV_LINKS.length / 2);
  const leftLinks = NAV_LINKS.slice(0, midpoint);
  const rightLinks = NAV_LINKS.slice(midpoint);

  return (
    <div>

     <ImagesCarousel />

    <footer className="bg-black text-white pt-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 mb-10 items-end">

          {/* Left */}
          <div className="space-y-8">
            <Logo size="lg"/>
            <p className="text-[35px]">Refined and timeless imagery for modern day lovers.</p>
          </div>

         
          <div className="grid grid-cols-2 gap-2 font-serif text-lg">
            <ul className="space-y-4">
              {leftLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-400  text-[35px] transition-colors"
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
                    className="hover:text-gray-400 text-[35px] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
        <div className="overflow-hidden mb-16">
          <h1
            className="text-[17vw] leading-none whitespace-nowrap tracking-[0.1em] text-white"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            FULGENCE 
          </h1>
        </div>

       
        <div className="flex flex-col md:flex-row justify-between pb-8 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FULGENCE RABACH. ALL RIGHTS RESERVED.</p>
        </div>

    
    </footer>
    </div>
  );
}