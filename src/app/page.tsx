import { Hero } from "@/components/sections/01-Hero";
import { TrustBar } from "@/components/sections/02-TrustBar";
import { Work } from "@/components/sections/03-Work";
import { Solutions } from "@/components/sections/04-Solutions";
import { Process } from "@/components/sections/05-Process";
import { Quote } from "@/components/sections/06-Quote";
import { Footer } from "@/components/sections/07-Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-midnight/80 backdrop-blur-md border-b border-border/20">
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-copper flex items-center justify-center">
                <span className="font-serif text-xl text-linen font-bold">R</span>
              </div>
              <span className="font-serif text-xl text-linen font-bold hidden sm:block">
                Raylink Select Africa
              </span>
            </div>
            <div className="hidden lg:flex items-center gap-8">
              <a href="#work" className="text-linen/70 hover:text-copper transition-colors text-sm font-medium">
                Work
              </a>
              <a href="#solutions" className="text-linen/70 hover:text-copper transition-colors text-sm font-medium">
                Solutions
              </a>
              <a href="#process" className="text-linen/70 hover:text-copper transition-colors text-sm font-medium">
                Process
              </a>
              <a href="#quote" className="btn-primary text-sm">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16 lg:pt-20">
        <Hero />
        <TrustBar />
        <Work />
        <Solutions />
        <Process />
        <Quote />
      </main>

      <Footer />
      
      <WhatsAppFloat 
        phoneNumber={siteConfig.whatsapp} 
        defaultMessage="Hi Raylink, I'd like a quote for..."
      />
    </>
  );
}