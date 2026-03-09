import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import heroBg from "@/assets/images/hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Modern luxury home architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl animate-in slide-in-from-bottom-8 duration-700 fade-in fill-mode-both">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Premium Architecture & Construction
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Designing Spaces. <br />
            <span className="text-primary italic font-serif">Building Dreams.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Vijay Infra is your premier partner for end-to-end architecture, luxury interiors, structural engineering, and cutting-edge home automation solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base h-14 px-8" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 bg-transparent text-white border-white hover:bg-white hover:text-secondary" onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}>
              View Our Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
