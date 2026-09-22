"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const MessageSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

interface WhatsAppFloatProps {
  phoneNumber: string;
  defaultMessage?: string;
}

export function WhatsAppFloat({ phoneNumber, defaultMessage = "Hi Raylink, I need a quote for..." }: WhatsAppFloatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <>
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50",
          isOpen && "hidden"
        )}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <div className="w-16 h-16 rounded-full bg-green-600 shadow-[0_10px_30px_rgba(37,211,102,0.4)] flex items-center justify-center">
          <MessageSquareIcon className="w-8 h-8 text-white" />
        </div>
      </motion.a>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          className="bg-midnight rounded-2xl p-6 w-80 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-border/20"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                <MessageSquareIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-satoshi font-semibold text-linen">Chat with us</p>
                <p className="text-sm text-linen/60">Typically replies within 2 hours</p>
              </div>
            </div>
            <motion.button
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-linen/50 hover:text-linen transition-colors"
              aria-label="Close chat"
            >
              <XIcon className="w-5 h-5" />
            </motion.button>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full text-center"
          >
            Start Conversation
          </a>
          
          <p className="text-center text-xs text-linen/40 mt-4">
            Powered by WhatsApp Business
          </p>
        </motion.div>
      </motion.div>
    </>
  );
}