
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-display font-bold text-estate-950 cursor-pointer"
          >
            B-ESTATES
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Home", section: "hero" },
              { name: "Services", section: "services" },
              { name: "About Us", section: "about" },
              { name: "Contact Us", section: "contact" }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className={`font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-estate-800" : "text-estate-900"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-estate-800 hover:bg-estate-50 transition-colors"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open menu</span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {[
              { name: "Home", section: "hero" },
              { name: "Services", section: "services" },
              { name: "About Us", section: "about" },
              { name: "Contact Us", section: "contact" }
            ].map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.section)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-estate-900 hover:bg-estate-50 hover:text-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
