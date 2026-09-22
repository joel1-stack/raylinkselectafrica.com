"use client";

import { motion } from "framer-motion";
import { solutions } from "@/config/site";

export function Solutions() {
  return (
    <section className="bg-alabaster py-20 lg:py-32 border-y border-border">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:sticky lg:top-24 lg:py-12"
          >
            <span className="eyebrow">WHAT WE CREATE</span>
            <h2 className="headline text-anthracite mt-4 font-serif font-normal leading-tight">
              EVERYTHING YOUR BRAND NEEDS IN THE REAL WORLD.
            </h2>
            <p className="text-lg text-anthracite/60 mt-6 max-w-lg">
              From concept to installation, we handle every touchpoint your brand has with the physical world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-6">
              {solutions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative pl-12 pb-8 border-b border-border last:border-0 hover:border-copper/50 transition-colors"
                >
                  <div className="absolute left-0 top-1 w-2 h-2 bg-copper rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300" />
                  <h3 className="font-satoshi font-bold text-xl sm:text-2xl text-anthracite mb-2">
                    {item.title}
                  </h3>
                  <p className="text-anthracite/70 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}