import aboutImg from "@/assets/images/about.jpg";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Completed Projects", value: "250+" },
    { label: "Expert Engineers", value: "40+" },
    { label: "Happy Clients", value: "100%" }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative z-10">
              <img 
                src={aboutImg} 
                alt="Vijay Infra Architects" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-primary/10 rounded-lg -z-0 hidden md:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-primary/20 rounded-full -z-0 hidden md:block"></div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/4 -right-12 bg-white shadow-xl p-6 rounded-lg z-20 hidden lg:block border-l-4 border-primary">
              <div className="text-4xl font-bold text-secondary mb-1">15+</div>
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Years of<br/>Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6 inline-block">
              <span className="text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary pb-1">About Us</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              Building Legacy Through <span className="italic font-light text-primary">Precision & Innovation</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At Vijay Infra, we don't just construct buildings; we craft experiences. With a deep-rooted commitment to quality and architectural brilliance, we have established ourselves as a trusted name in the construction and interior design industry.
            </p>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our multidisciplinary team of architects, structural engineers, and designers work seamlessly to deliver end-to-end solutions—from visionary planning to impeccable execution, ensuring every project reflects our clients' unique aspirations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Innovative Architectural Design",
                "Uncompromising Quality Control",
                "Transparent Pricing Model",
                "On-Time Project Delivery"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5 shrink-0" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
