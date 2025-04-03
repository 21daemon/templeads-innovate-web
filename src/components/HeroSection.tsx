
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Layers, Palette } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Animation for particles
  useEffect(() => {
    if (!heroRef.current) return;
    
    const createParticles = () => {
      const particles = document.createElement('div');
      particles.className = 'absolute inset-0 overflow-hidden opacity-30';
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 1;
        
        particle.className = 'absolute bg-white rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.2}`;
        
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        
        particles.appendChild(particle);
      }
      
      heroRef.current?.appendChild(particles);
    };
    
    createParticles();
    
    return () => {
      const particles = heroRef.current?.querySelector('.opacity-30');
      if (particles) {
        particles.remove();
      }
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16" ref={heroRef}>
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-100px) translateX(20px); }
          100% { transform: translateY(0); }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Innovating the Future with <span className="gradient-text">Smart Technology Solutions.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto md:mx-0">
              We build cutting-edge digital products that transform businesses and deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 text-white/80 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <Code size={18} className="text-templeads-secondary" />
                <span>Web & App Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers size={18} className="text-templeads-secondary" />
                <span>AI Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette size={18} className="text-templeads-secondary" />
                <span>UI/UX & Branding</span>
              </div>
            </div>
            
            <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white hover:shadow-lg px-8 py-6 text-lg">
                Get a Free Quote
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 flex items-center gap-2 px-8 py-6 text-lg">
                Schedule a Call <ArrowRight size={18} />
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                <div className="bg-gradient-to-br from-templeads-secondary/20 to-templeads-accent/20 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-white/20">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-templeads-primary/90 to-templeads-dark/90">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto bg-templeads-secondary/30 rounded-full flex items-center justify-center mb-4">
                          <div className="w-16 h-16 bg-templeads-secondary rounded-full flex items-center justify-center pulse-animation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                        <p className="text-white font-medium">Watch Our Showreel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-templeads-secondary/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 w-40 h-40 bg-templeads-accent/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
