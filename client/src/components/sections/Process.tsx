export default function Process() {
  const steps = [
    { number: "01", title: "Consultation", desc: "Understanding your vision, requirements, and constraints." },
    { number: "02", title: "Design & Planning", desc: "Creating architectural blueprints and 3D visual renders." },
    { number: "03", title: "Budget & Approval", desc: "Transparent cost estimation and finalizing the timeline." },
    { number: "04", title: "Execution", desc: "Dedicated site supervision and quality construction." },
    { number: "05", title: "Final Handover", desc: "Delivering your dream space on time, ready to live." }
  ];

  return (
    <section className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary pb-1 inline-block mb-4">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Proven 5-Step Process</h2>
          <p className="text-white/70 text-lg">
            A seamless, transparent journey from your initial idea to the final moment you step into your new space.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-secondary border-2 border-white/20 flex items-center justify-center text-2xl font-serif font-bold text-white/50 mb-6 group-hover:border-primary group-hover:text-primary transition-colors duration-300 relative">
                  {step.number}
                  {/* Dot on the line */}
                  <div className="absolute -right-2 top-1/2 w-4 h-4 rounded-full bg-secondary border border-white/20 hidden lg:block -translate-y-1/2 translate-x-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
