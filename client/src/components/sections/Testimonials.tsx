import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Desai",
      role: "Villa Owner",
      content: "Vijay Infra transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality is unparalleled.",
      rating: 5
    },
    {
      name: "Sneha Reddy",
      role: "Corporate Client",
      content: "The structural engineering and interior design team worked flawlessly to deliver our new office space ahead of schedule.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Real Estate Investor",
      content: "Transparent pricing, clear communication, and exceptional execution. They are truly the best architecture firm I've worked with.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative large quote icon */}
      <Quote className="absolute top-10 left-10 w-64 h-64 text-background -z-0 opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary pb-1 inline-block mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-background p-10 rounded-lg border border-border relative">
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-lg mb-8 italic leading-relaxed">
                "{review.content}"
              </p>
              <div>
                <h4 className="font-bold text-secondary text-lg">{review.name}</h4>
                <span className="text-sm text-primary font-medium uppercase tracking-wider">{review.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
