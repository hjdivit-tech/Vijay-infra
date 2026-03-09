import { Lightbulb, ShieldCheck, Thermometer, Smartphone } from "lucide-react";

export default function HomeAutomation() {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Abstract Tech Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary pb-1 inline-block mb-4">Future Ready</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Smart Homes for a <br/><span className="text-primary italic font-light">Smarter Lifestyle</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Experience the pinnacle of modern living with our integrated home automation solutions. Control lighting, climate, security, and entertainment seamlessly from your smartphone or via voice commands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Smart Lighting</h4>
                  <p className="text-white/60 text-sm">Automated ambiance control to suit your mood.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Advanced Security</h4>
                  <p className="text-white/60 text-sm">24/7 surveillance and smart locks for peace of mind.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Thermometer size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Climate Control</h4>
                  <p className="text-white/60 text-sm">Intelligent HVAC systems for optimal energy efficiency.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Centralized App</h4>
                  <p className="text-white/60 text-sm">Control your entire home ecosystem from one app.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            {/* Using one of the portfolio images as placeholder for smart home visual */}
            <img src="/src/assets/images/portfolio_3.jpg" alt="Smart Home Interface" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary via-transparent to-primary/20"></div>
            
            {/* Mock UI Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
              <div className="flex justify-between items-center mb-8">
                <span className="text-white font-medium">Living Room</span>
                <div className="w-8 h-4 bg-primary rounded-full relative">
                  <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-12 bg-white/10 rounded-xl flex items-center px-4 gap-3">
                  <Lightbulb size={18} className="text-primary" />
                  <span className="text-white/80 text-sm">Lights (80%)</span>
                </div>
                <div className="h-12 bg-white/10 rounded-xl flex items-center px-4 gap-3">
                  <Thermometer size={18} className="text-primary" />
                  <span className="text-white/80 text-sm">AC (22°C)</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
