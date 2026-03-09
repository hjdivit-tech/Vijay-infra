import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold mb-4">
              VIJAY <span className="text-primary">INFRA</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Designing spaces and building dreams. We are a premier architecture and construction firm delivering excellence across residential and commercial projects.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">Architecture Planning</li>
              <li className="text-muted-foreground">Interior Design</li>
              <li className="text-muted-foreground">Structural Design</li>
              <li className="text-muted-foreground">Home Renovation</li>
              <li className="text-muted-foreground">Home Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-white/20 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 shrink-0" size={20} />
                <span className="text-muted-foreground">
                  123 Business Avenue, Tech Park,<br />
                  Bangalore, Karnataka 560001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={20} />
                <a href="mailto:info@vijayinfra.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@vijayinfra.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vijay Infra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
