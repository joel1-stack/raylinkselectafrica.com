"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { siteConfig, heroImage, backgroundImages } from "@/config/site";

export function Hero() {
  return (
    <section className="relative bg-midnight min-h-screen flex items-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23C96A40%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight/90 to-midnight/70" />
      
      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="pr-8 lg:pr-16"
          >
            <motion.span
              className="eyebrow inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              BRANDING • PRINTING • DESIGN • CORPORATE SOLUTIONS
            </motion.span>
            
            <motion.h1
              className="headline text-linen mt-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We make brands{" "}
              <span className="text-copper italic font-serif">physical.</span>
            </motion.h1>
            
            <motion.p
              className="subtext mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Signage, vehicles, apparel, printing and corporate branding — built to be seen and remembered.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mobile-stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#quote">
                <Button size="lg" className="w-full sm:w-auto touch-target-lg">START A PROJECT →</Button>
              </a>
              <a href="#work">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto touch-target-lg">SEE OUR WORK</Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
              <Image
                src={heroImage}
                alt="Premium 3D illuminated reception signage by Raylink Select Africa"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
              />
            </div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 -right-6 h-16 bg-gradient-to-t from-midnight to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>

      <WaveDivider reverse className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}