import { useState } from "react";
import portfolio1 from "@/assets/images/portfolio_1.jpg";
import portfolio2 from "@/assets/images/portfolio_2.jpg";
import portfolio3 from "@/assets/images/portfolio_3.jpg";
import portfolio4 from "@/assets/images/portfolio_4.jpg";

const categories = ["All", "Residential", "Commercial", "Interiors", "Renovation"];

const projects = [
  { id: 1, title: "Modern Luxury Villa", category: "Residential", image: portfolio1 },
  { id: 2, title: "Corporate Headquarters", category: "Commercial", image: portfolio2 },
  { id: 3, title: "Minimalist Apartment", category: "Interiors", image: portfolio3 },
  { id: 4, title: "Heritage Home Upgrade", category: "Renovation", image: portfolio4 },
  { id: 5, title: "Boutique Hotel Design", category: "Commercial", image: portfolio1 },
  { id: 6, title: "Contemporary Kitchen", category: "Interiors", image: portfolio2 },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-sm border-b-2 border-primary pb-1 inline-block mb-4">Our Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary">
              Masterpieces We've <span className="italic font-light text-primary">Delivered</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? "bg-secondary text-white" 
                    : "bg-white text-secondary border border-border hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-primary font-medium text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                <h3 className="text-white text-2xl font-serif font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
