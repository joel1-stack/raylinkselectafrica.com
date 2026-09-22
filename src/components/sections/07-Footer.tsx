"use client";

import { motion } from "framer-motion";
import { siteConfig, backgroundImages } from "@/config/site";

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
    <footer className="relative bg-midnight overflow-hidden">
      {/* Wave curve top */}
      <div className="absolute top-0 left-0 right-0 h-32 lg:h-48" aria-hidden="true">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full text-midnight">
          <path 
            fill="currentColor" 
            d="M0,128 C300,80 600,80 900,128 C1200,176 1440,160 1440,160 L1440,160 L0,160 Z"
            opacity="0.15"
          />
          <path 
            fill="currentColor" 
            d="M0,96 C350,48 700,48 1050,96 C1400,144 1440,128 1440,128 L1440,160 L0,160 Z"
            opacity="0.1"
          />
          <path 
            fill="#C96A40" 
            d="M0,64 C400,16 800,16 1200,64 C1400,112 1440,96 1440,96 L1440,160 L0,160 Z"
            opacity="0.08"
          />
        </svg>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23C96A40%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="section-container relative z-10 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid lg:grid-cols-3 gap-10 lg:gap-16"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-copper to-copper-hover flex items-center justify-center shadow-[0_10px_30px_rgba(201,106,64,0.3)]">
                <span className="font-serif text-2xl text-linen font-bold">R</span>
              </div>
              <span className="font-serif text-2xl text-linen font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-linen/70 text-base leading-relaxed mb-8 max-w-xs">
              {siteConfig.tagline}
            </p>
            
            {/* Services quick links */}
            <div className="space-y-2">
              <p className="font-satoshi uppercase tracking-wider text-xs text-copper/70 mb-3">WHAT WE DO</p>
              <ul className="space-y-1.5 text-sm text-linen/60">
                <li className="hover:text-copper transition-colors cursor-default">3D & Illuminated Signage</li>
                <li className="hover:text-copper transition-colors cursor-default">Vehicle Branding</li>
                <li className="hover:text-copper transition-colors cursor-default">Corporate Spaces</li>
                <li className="hover:text-copper transition-colors cursor-default">Apparel & Uniforms</li>
                <li className="hover:text-copper transition-colors cursor-default">Event Environments</li>
                <li className="hover:text-copper transition-colors cursor-default">Print & Packaging</li>
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-1 lg:col-start-2">
            <p className="font-satoshi uppercase tracking-wider text-xs text-copper/70 mb-5">GET IN TOUCH</p>
            <address className="not-italic space-y-4 text-linen/80">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 group hover:text-copper transition-colors">
                <span className="w-10 h-10 rounded-lg bg-midnight/50 border border-border/20 flex items-center justify-center group-hover:border-copper/50 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 group hover:text-copper transition-colors">
                <span className="w-10 h-10 rounded-lg bg-midnight/50 border border-border/20 flex items-center justify-center group-hover:border-copper/50 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-3 text-linen/60">
                <span className="w-10 h-10 rounded-lg bg-midnight/50 border border-border/20 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span>{siteConfig.address}</span>
              </div>
            </address>
          </div>

          {/* Social Column */}
          <div className="lg:col-span-1">
            <p className="font-satoshi uppercase tracking-wider text-xs text-copper/70 mb-5">FOLLOW OUR WORK</p>
            <div className="flex gap-3 mb-8 touch-target-lg">
              <a 
                href={siteConfig.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-midnight/50 border border-border/20 flex items-center justify-center text-linen/70 hover:text-copper hover:border-copper hover:bg-midnight/80 transition-all duration-300 group touch-target-lg"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={siteConfig.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-midnight/50 border border-border/20 flex items-center justify-center text-linen/70 hover:text-copper hover:border-copper hover:bg-midnight/80 transition-all duration-300 group touch-target-lg"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href={siteConfig.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-midnight/50 border border-border/20 flex items-center justify-center text-linen/70 hover:text-copper hover:border-copper hover:bg-midnight/80 transition-all duration-300 group touch-target-lg"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* WhatsApp CTA in footer - full width on mobile */}
            <a 
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hi Raylink, I'd like to discuss a project...")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-xl hover:from-green-700 hover:to-green-800 hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 touch-target-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <span className="whitespace-nowrap">Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Bottom wave separator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="h-20 lg:h-24" aria-hidden="true">
            <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full text-midnight">
              <path 
                fill="currentColor" 
                d="M0,32 C300,80 600,80 900,32 C1200,-16 1440,0 1440,0 L1440,100 L0,100 Z"
                opacity="0.15"
              />
              <path 
                fill="currentColor" 
                d="M0,64 C350,112 700,112 1050,64 C1400,16 1440,32 1440,32 L1440,100 L0,100 Z"
                opacity="0.1"
              />
              <path 
                fill="#C96A40" 
                d="M0,96 C400,144 800,144 1200,96 C1400,48 1440,64 1440,64 L1440,100 L0,100 Z"
                opacity="0.08"
              />
            </svg>
          </div>

          <div className="mt-8 pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-linen/40">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-linen/30">
              <span>Premium Branding & Signage</span>
              <span>•</span>
              <span>Nairobi, Kenya</span>
              <span>•</span>
              <span>Quality You Can Trust</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}