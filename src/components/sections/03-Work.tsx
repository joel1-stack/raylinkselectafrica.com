"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { portfolioItems } from "@/config/site";

export function Work() {
  return (
    <section id="work" className="bg-alabaster py-20 lg:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="eyebrow">SELECTED WORK</span>
          <h2 className="headline text-anthracite mt-4 font-serif font-normal">
            BUILT TO BE SEEN.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {portfolioItems.map((item, index) => (
            <ProjectCard
              key={item.category}
              src={item.src}
              alt={item.alt}
              category={item.category}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-anthracite/60 mb-4">Want to see more projects?</p>
          <a 
            href="#quote" 
            className="inline-flex items-center gap-2 text-copper hover:text-copper-hover font-medium uppercase tracking-wider transition-colors"
          >
            Start your project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}