
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counterItems = statsRef.current?.querySelectorAll('.counter-item');
            counterItems?.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animated');
              }, index * 200); // Stagger the animation
            });
            observer.disconnect(); // Only animate once
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-sm font-semibold text-templeads-secondary uppercase tracking-wider">About Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-templeads-primary mt-2">Pioneering Digital Excellence Since 2018</h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Templeads Infotech is a forward-thinking software development company committed to delivering innovative technology solutions that empower businesses to achieve their digital transformation goals.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our team of passionate technologists, designers, and strategists work collaboratively with clients to solve complex challenges through custom software development, web applications, mobile apps, and AI-powered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-templeads-primary text-lg">Our Vision</h4>
                <p className="text-gray-600 text-sm mt-2">To be the catalyst for digital innovation, enabling businesses to thrive in the ever-evolving technological landscape.</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-templeads-primary text-lg">Our Mission</h4>
                <p className="text-gray-600 text-sm mt-2">To deliver exceptional technology solutions that solve real business problems with uncompromising quality and client satisfaction.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-templeads-secondary/10 to-templeads-primary/10 rounded-2xl blur-lg"></div>
            <div className="relative bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
              <div className="grid grid-cols-2 gap-8" ref={statsRef}>
                <div className="text-center p-4 counter-item">
                  <div className="text-4xl font-bold text-templeads-primary" style={{'--num': '100'} as React.CSSProperties}>
                    <span className="animated-counter">0</span><span>+</span>
                  </div>
                  <p className="text-gray-500 mt-2 font-medium">Projects Completed</p>
                </div>
                
                <div className="text-center p-4 counter-item">
                  <div className="text-4xl font-bold text-templeads-primary" style={{'--num': '50'} as React.CSSProperties}>
                    <span className="animated-counter">0</span><span>+</span>
                  </div>
                  <p className="text-gray-500 mt-2 font-medium">Happy Clients</p>
                </div>
                
                <div className="text-center p-4 counter-item">
                  <div className="text-4xl font-bold text-templeads-primary" style={{'--num': '5'} as React.CSSProperties}>
                    <span className="animated-counter">0</span><span>+</span>
                  </div>
                  <p className="text-gray-500 mt-2 font-medium">Years Experience</p>
                </div>
                
                <div className="text-center p-4 counter-item">
                  <div className="text-4xl font-bold text-templeads-primary" style={{'--num': '15'} as React.CSSProperties}>
                    <span className="animated-counter">0</span><span>+</span>
                  </div>
                  <p className="text-gray-500 mt-2 font-medium">Team Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
