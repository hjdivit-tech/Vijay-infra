import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <span className={`text-2xl font-serif font-bold ${isScrolled ? "text-secondary" : "text-white"} transition-colors`}>
              VIJAY <span className="text-primary">INFRA</span>
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                    isScrolled ? "text-secondary" : "text-white/90"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            className="bg-primary text-white hover:bg-primary/90"
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Quote
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-secondary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-secondary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-secondary font-medium py-2 border-b border-border/50"
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="mt-2 w-full"
            onClick={() => {
              setMobileMenuOpen(false);
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Quote
          </Button>
        </div>
      )}
    </nav>
  );
}
