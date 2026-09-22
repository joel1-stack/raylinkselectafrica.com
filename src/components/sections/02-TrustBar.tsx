"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Shield } from "lucide-react";
import { trustIndicators } from "@/config/site";

const icons = {
  award: Award,
  users: Users,
  target: Target,
  shield: Shield,
};

export function TrustBar() {
  return (
    <section className="bg-alabaster py-16 lg:py-24 border-y border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-serif text-2xl sm:text-3xl text-anthracite font-normal">
            Quality you can trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {trustIndicators.map((item, index) => {
            const IconComponent = icons[item.icon as keyof typeof icons];
            return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-4"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <IconComponent 
                  className="w-8 h-8 text-copper stroke-[1.5]" 
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-satoshi font-semibold text-anthracite mb-1">
                {item.label}
              </h3>
              <p className="text-sm text-anthracite/60">
                {item.desc}
              </p>
            </motion.div>
          );
          })}
        </div>
      </div>
    </section>
  );
}