"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-midnight border-t border-border/20">
      <div className="section-container py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-copper flex items-center justify-center">
                <span className="font-serif text-xl text-linen font-bold">R</span>
              </div>
              <span className="font-serif text-xl text-linen font-bold">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-linen/60 text-sm max-w-xs">
              {siteConfig.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 lg:col-start-1 lg:col-end-4 text-center lg:text-left"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-linen/60">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-copper transition-colors flex items-center gap-1">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-copper transition-colors flex items-center gap-1">
                {siteConfig.email}
              </a>
              <span className="flex items-center gap-1">
                {siteConfig.address}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end gap-6"
          >
            <a 
              href={siteConfig.social.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-linen/60 hover:text-copper hover:border-copper transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a 
              href={siteConfig.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-linen/60 hover:text-copper hover:border-copper transition-all duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a 
              href={siteConfig.social.facebook} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/30 flex items-center justify-center text-linen/60 hover:text-copper hover:border-copper transition-all duration-300"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border/20 text-center text-sm text-linen/40"
        >
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}