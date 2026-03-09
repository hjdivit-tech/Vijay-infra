import { PencilRuler, Building2, PaintBucket, Sofa, Cpu, HardHat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <PencilRuler className="w-10 h-10" />,
    title: "Architecture Planning",
    description: "Visionary architectural designs that blend aesthetic appeal with functional brilliance for modern living.",
  },
  {
    icon: <Building2 className="w-10 h-10" />,
    title: "Structural Engineering",
    description: "Robust structural designs ensuring safety, longevity, and compliance with the highest industry standards.",
  },
  {
    icon: <PaintBucket className="w-10 h-10" />,
    title: "Renovation & Remodeling",
    description: "Transforming existing spaces into contemporary masterpieces with meticulous attention to detail.",
  },
  {
    icon: <Sofa className="w-10 h-10" />,
    title: "Interior Design",
    description: "Curating bespoke, luxurious interiors that reflect your personal style and enhance comfort.",
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    title: "Smart Home Automation",
    description: "Integrating future-ready technology for lighting, security, and climate control in your spaces.",
  },
  {
    icon: <HardHat className="w-10 h-10" />,
    title: "Site Supervision",
    description: "Dedicated on-site management ensuring precision execution and timely delivery of your project.",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary pb-1 inline-block mb-4">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">Comprehensive Services Under One Roof</h2>
          <p className="text-muted-foreground text-lg">
            From the first sketch to the final handover, we provide end-to-end solutions to bring your vision to life with uncompromising quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-background border border-border p-8 rounded-lg group hover:border-primary/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-primary/5 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 pointer-events-none">
                {service.icon}
              </div>
              
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <Button variant="ghost" className="p-0 hover:bg-transparent text-secondary hover:text-primary group">
                Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
