
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-templeads-primary">
                Temple<span className="text-templeads-secondary">ads</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Home</a>
            <a href="#about" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">About</a>
            <a href="#services" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Services</a>
            <a href="#portfolio" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Portfolio</a>
            <a href="#testimonials" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Testimonials</a>
            <a href="#contact" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white hover:shadow-lg transition-all">
              Get a Free Quote
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-templeads-primary focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-5 space-y-4">
            <a href="#home" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>About</a>
            <a href="#services" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Services</a>
            <a href="#portfolio" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Portfolio</a>
            <a href="#testimonials" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Contact</a>
            <Button className="w-full bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white">
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
