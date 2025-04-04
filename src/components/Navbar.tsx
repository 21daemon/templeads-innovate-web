
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut, MessageSquare } from 'lucide-react';
import { useAuth } from "@/contexts/AuthContext";
import QuoteButton from "@/components/QuoteButton";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-templeads-primary">
                Temple<span className="text-templeads-secondary">ads</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Home</a>
            <a href="#about" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">About</a>
            <a href="#services" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Services</a>
            <a href="#portfolio" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Portfolio</a>
            <a href="#testimonials" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Testimonials</a>
            <a href="#contact" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors">Contact</a>
            <Link to="/feedback" className="font-medium text-templeads-primary hover:text-templeads-secondary transition-colors flex items-center">
              <MessageSquare size={16} className="mr-1" />
              Feedback
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            {user && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={signOut}
                className="flex items-center gap-2 text-gray-600"
              >
                <LogOut size={16} />
                Sign Out
              </Button>
            )}
            <QuoteButton />
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
        <div className="md:hidden bg-white/95 shadow-lg backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6 space-y-5">
            <a href="#home" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Home</a>
            <a href="#about" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>About</a>
            <a href="#services" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Services</a>
            <a href="#portfolio" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Portfolio</a>
            <a href="#testimonials" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Testimonials</a>
            <a href="#contact" className="block font-medium text-templeads-primary hover:text-templeads-secondary" onClick={toggleMobileMenu}>Contact</a>
            <Link to="/feedback" className="block font-medium text-templeads-primary hover:text-templeads-secondary flex items-center" onClick={toggleMobileMenu}>
              <MessageSquare size={16} className="mr-2" />
              Feedback
            </Link>
            
            <div className="pt-4 flex flex-col space-y-3">
              {user && (
                <Button 
                  variant="outline" 
                  onClick={signOut}
                  className="flex items-center justify-center gap-2"
                >
                  <LogOut size={16} />
                  Sign Out
                </Button>
              )}
              <QuoteButton fullWidth />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
