"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { generateWhatsAppUrl, generateQuoteMessage } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

const SendIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const AlertCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Enter a valid phone number"),
  service: z.string().min(3, "Please specify the service you need"),
  quantity: z.string().min(1, "Please specify quantity or size"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export function Quote() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const message = generateQuoteMessage(data);
      const whatsappUrl = generateWhatsAppUrl(siteConfig.whatsapp, message);
      
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      
      setSubmitStatus("success");
      reset();
      
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Something went wrong. Please try again or contact us directly.");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section id="quote" className="bg-midnight relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-midnight to-obsidian" />
      
      <WaveDivider className="absolute top-0 left-0 right-0" />
      
      <div className="section-container relative z-10 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:pr-12"
          >
            <span className="eyebrow">GET IN TOUCH</span>
            <h2 className="headline text-linen mt-4 font-serif font-normal">
              LET&apos;S BUILD IT.
            </h2>
            <p className="text-lg text-linen/70 mt-6 max-w-lg">
              Send the brief. We&apos;ll reply within 2 hours with a clear proposal and timeline.
            </p>
            
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href={generateWhatsAppUrl(siteConfig.whatsapp, "Hi Raylink, I'd like to discuss a project...")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-3 mt-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.426 3.426 0 01-.382-.378C1.534 19.292.667 18.108.422 16.824a48.22 48.22 0 010-2.818c-.244-1.285.62-2.47 1.788-3.277a3.432 3.432 0 01.38-.378 9.868 9.868 0 015.03-1.378h.005a9.868 9.868 0 015.032 1.378 3.43 3.43 0 01.382.378c1.168.806 2.033 1.99 1.787 3.277a48.536 48.536 0 010 2.818c-.245 1.284-1.112 2.469-2.364 3.128a3.428 3.428 0 01-.382.378 9.87 9.87 0 01-5.032 1.378z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="bg-midnight/50 border border-border/30 rounded-2xl p-6 lg:p-10 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {submitStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  className="text-center py-12"
                >
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-linen mb-2">Message Sent!</h3>
                  <p className="text-linen/70 mb-6">We&apos;ll get back to you within 2 hours on WhatsApp.</p>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSubmitStatus("idle")}
                    className="w-full"
                  >
                    Send Another Request
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-linen mb-2">
                        Name *
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-midnight/50 border border-border/30 rounded-lg px-4 py-3 text-linen placeholder-linen/30 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent transition-all"
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400" role="alert">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-linen mb-2">
                        WhatsApp Number *
                      </label>
                      <input
                        {...register("phone")}
                        id="phone"
                        type="tel"
                        placeholder="+254 7XX XXX XXX"
                        className="w-full bg-midnight/50 border border-border/30 rounded-lg px-4 py-3 text-linen placeholder-linen/30 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent transition-all"
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-400" role="alert">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-linen mb-2">
                      Service Needed *
                    </label>
                    <input
                      {...register("service")}
                      id="service"
                      type="text"
                      placeholder="e.g., Vehicle wrap for 5 vans"
                      className="w-full bg-midnight/50 border border-border/30 rounded-lg px-4 py-3 text-linen placeholder-linen/30 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent transition-all"
                      aria-invalid={errors.service ? "true" : "false"}
                    />
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-400" role="alert">{errors.service.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-linen mb-2">
                      Quantity / Size *
                    </label>
                    <input
                      {...register("quantity")}
                      id="quantity"
                      type="text"
                      placeholder="e.g., 5 units, 3x2m, 500 pcs"
                      className="w-full bg-midnight/50 border border-border/30 rounded-lg px-4 py-3 text-linen placeholder-linen/30 focus:outline-none focus:ring-2 focus:ring-copper focus:border-transparent transition-all"
                      aria-invalid={errors.quantity ? "true" : "false"}
                    />
                    {errors.quantity && (
                      <p className="mt-1 text-sm text-red-400" role="alert">{errors.quantity.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    isLoading={submitStatus === "submitting"}
                    className="w-full"
                    aria-busy={submitStatus === "submitting"}
                  >
                    <SendIcon className="w-5 h-5 mr-2" />
                    SUBMIT REQUEST
                  </Button>

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                      role="alert"
                    >
                      <AlertCircleIcon className="w-5 h-5 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <p className="text-center text-xs text-linen/40">
                    By submitting, you agree to be contacted via WhatsApp regarding your request.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}