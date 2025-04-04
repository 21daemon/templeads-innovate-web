
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Robot, BrainCircuit, Cpu } from 'lucide-react';
import QuoteButton from "@/components/QuoteButton";
import ScheduleMeetingButton from "@/components/ScheduleMeetingButton";

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
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-80px)] flex items-center py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16"
      ref={heroRef}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <style>{`
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
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transform Your Business with <span className="gradient-text">AI-Powered Solutions</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build cutting-edge artificial intelligence applications that automate processes, provide insights, and deliver exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 text-white/80 justify-center lg:justify-start mb-6 md:mb-8">
              <div className="flex items-center gap-2">
                <BrainCircuit size={20} className="text-templeads-secondary" />
                <span>AI Development</span>
              </div>
              <div className="flex items-center gap-2">
                <Robot size={20} className="text-templeads-secondary" />
                <span>Intelligent Assistants</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu size={20} className="text-templeads-secondary" />
                <span>Machine Learning</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <QuoteButton className="px-6 py-3 md:px-10 md:py-6 text-base md:text-lg w-full sm:w-auto" />
              <ScheduleMeetingButton className="px-6 py-3 md:px-10 md:py-6 text-base md:text-lg w-full sm:w-auto" />
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                <div className="bg-gradient-to-br from-templeads-secondary/20 to-templeads-accent/20 backdrop-blur-sm p-4 sm:p-6 rounded-2xl">
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-white/20">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-templeads-primary/90 to-templeads-dark/90">
                      <div className="text-center">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-templeads-secondary/30 rounded-full flex items-center justify-center mb-4">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-templeads-secondary rounded-full flex items-center justify-center pulse-animation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                        <p className="text-white font-medium text-sm sm:text-base">Watch Our AI Showreel</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-24 sm:w-32 h-24 sm:h-32 bg-templeads-secondary/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/4 w-32 sm:w-40 h-32 sm:h-40 bg-templeads-accent/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
