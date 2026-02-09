"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroNavbar from "@/components/HeroNavbar";
import { PORTFOLIO_IMAGES } from "@/lib/constants";

function ParallaxCard({
  image,
  speed,
  fixedHeight,
  extraClass,
}: {
  image: { id: string; url: string; title: string };
  speed: number;
  fixedHeight?: string;
  extraClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">(
    "portrait"
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-60 * speed, 60 * speed]);

  const aspectClass = fixedHeight
    ? fixedHeight
    : orientation === "portrait"
    ? "aspect-[3/4]"
    : "aspect-[4/3]";

  return (
    <motion.div ref={ref} style={{ y }} className={`w-full ${extraClass ?? ""}`}>
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <Image
          src={image.url}
          alt={image.title}
          fill
          className="object-cover"
          sizes="100vw"
          onLoadingComplete={(img) => {
            const isLandscape = img.naturalWidth > img.naturalHeight;
            setOrientation(isLandscape ? "landscape" : "portrait");
          }}
        />
      </div>
    </motion.div>
  );
}

export default function PortfolioPage() {
  const col0 = PORTFOLIO_IMAGES.filter((_, i) => i % 3 === 0);
  const col1 = PORTFOLIO_IMAGES.filter((_, i) => i % 3 === 1);
  const col2 = PORTFOLIO_IMAGES.filter((_, i) => i % 3 === 2);

  const cinematicHeight = "h-[720px] lg:h-[900px]";
  const gapBetween = "mb-10";

  return (
    <div className="bg-white">
      <HeroNavbar />

      <section className="bg-[#fafafa] py-32 text-center">
        <h1 className="font-playfair text-6xl lg:text-8xl tracking-wide">
          PORTFOLIO
        </h1>
        <p className="mt-6 text-xs uppercase tracking-[0.3em] text-neutral-600">
          A curated collection of timeless imagery
        </p>
      </section>

      <section className="py-32">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col lg:flex-row gap-x-3 w-full">
            <div className="flex-1">
                <ParallaxCard image={col0[0]} speed={0.5} fixedHeight={cinematicHeight} extraClass="my-2" className="sm:mb-2 "  />
            </div>
            <div className="flex-1">
                <ParallaxCard image={col1[0]} speed={0.8} fixedHeight={cinematicHeight} extraClass="my-2" className="sm:mb-2 "  />
            </div>
            <div className="flex-1">
                <ParallaxCard image={col2[0]} speed={1.1} fixedHeight={cinematicHeight} extraClass="my-2" className="sm:mb-2 "  />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-3">
            <div className="flex flex-col gap-y-10">
              {col0.slice(1).map((image) => (
                <ParallaxCard key={image.id} image={image} speed={0.5} extraClass="my-10" />
              ))}
            </div>
            <div className="flex flex-col gap-y-10">
              {col1.slice(1).map((image) => (
                <ParallaxCard key={image.id} image={image} speed={0.8} extraClass="my-10" />
              ))}
            </div>
            <div className="flex flex-col gap-y-10">
              {col2.slice(1).map((image) => (
                <ParallaxCard key={image.id} image={image} speed={1.1} extraClass="my-10" />
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
