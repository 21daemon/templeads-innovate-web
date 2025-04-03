
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = React.useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
    }
  };

  return (
    <footer className="bg-templeads-primary text-white">
      <div className="container mx-auto pt-16 pb-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">
                Temple<span className="text-templeads-secondary">ads</span>
              </span>
            </div>
            
            <p className="text-white/70 mb-6">
              Innovative technology solutions for businesses of all sizes. We transform ideas into powerful digital experiences.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-templeads-secondary transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-templeads-secondary transition-colors"
              >
                <Twitter size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-templeads-secondary transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-templeads-secondary transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Mobile App Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">AI Product Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">UI/UX & Branding</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Software Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive the latest updates and insights.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex">
              <Input
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-templeads-secondary rounded-r-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-templeads-secondary hover:bg-templeads-accent rounded-l-none">
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Templeads Infotech. All rights reserved.
          </p>
          
          <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
            <li>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
