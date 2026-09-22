"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/config/site";

export function Process() {
  return (
    <section className="bg-alabaster py-20 lg:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="eyebrow">HOW IT WORKS</span>
          <h2 className="headline text-anthracite mt-4 font-serif font-normal">
            FOUR STEPS. NO CONFUSION.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px bg-warm-grey" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center lg:px-4"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-alabaster border-2 border-warm-grey rounded-full">
                    <span className="font-satoshi font-bold text-2xl text-anthracite">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-satoshi font-bold text-xl text-anthracite mb-2">
                    {step.title}
                  </h3>
                  <p className="text-anthracite/60 text-sm sm:text-base">
                    {step.desc}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-[40px] left-1/2 right-1/2 h-px bg-warm-grey"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
                    style={{ transformOrigin: "left center" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}