
import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Templeads Infotech transformed our business with their exceptional web development expertise. The team understood our requirements perfectly and delivered a solution that exceeded our expectations.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    company: "Global Retail Inc.",
    rating: 5,
    image: "https://placehold.co/100x100/0A2342/FFFFFF?text=SJ"
  },
  {
    quote: "Working with Templeads was a game-changer for our startup. Their mobile app development team created an intuitive, high-performance app that our users love. The attention to detail was impressive.",
    name: "Michael Chen",
    title: "CEO",
    company: "TechNova Startup",
    rating: 5,
    image: "https://placehold.co/100x100/2CA6A4/FFFFFF?text=MC"
  },
  {
    quote: "The AI solution developed by Templeads has automated our customer support process, saving us countless hours and improving customer satisfaction. Their technical expertise is truly outstanding.",
    name: "Emma Rodriguez",
    title: "Operations Manager",
    company: "ServiceFirst Solutions",
    rating: 4,
    image: "https://placehold.co/100x100/F76C6C/FFFFFF?text=ER"
  },
  {
    quote: "Templeads delivered a complete brand overhaul that perfectly captured our company's vision. The new website and visual identity have significantly increased our market presence and customer engagement.",
    name: "David Thompson",
    title: "Brand Manager",
    company: "Innovative Dynamics",
    rating: 5,
    image: "https://placehold.co/100x100/0A2342/FFFFFF?text=DT"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const goToPrevious = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  // Auto-advance testimonials
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Add entrance animation when component mounts
  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <section id="testimonials" className="section-padding gradient-bg text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-templeads-secondary uppercase tracking-wider">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">What Our Clients Say</h3>
          <p className="text-white/80 mt-4 leading-relaxed">
            We've helped businesses of all sizes achieve their technology goals. Here's what they have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div 
            ref={testimonialRef}
            className={`bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:p-10 shadow-xl transition-all duration-300 hover:scale-105 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i}
                    size={20}
                    className={i < testimonials[currentIndex].rating ? 'fill-templeads-secondary text-templeads-secondary' : 'text-gray-400'}
                  />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl font-medium mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div>
                <p className="font-bold text-white">{testimonials[currentIndex].name}</p>
                <p className="text-white/70 text-sm">
                  {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8">
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full w-10 h-10"
              onClick={goToPrevious}
            >
              <ChevronLeft size={24} />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8">
            <Button 
              variant="outline" 
              size="icon"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-full w-10 h-10"
              onClick={goToNext}
            >
              <ChevronRight size={24} />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white/10 p-4 rounded-lg flex items-center justify-center h-20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="text-white font-bold text-xl">Company 1</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-center justify-center h-20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="text-white font-bold text-xl">Company 2</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-center justify-center h-20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="text-white font-bold text-xl">Company 3</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg flex items-center justify-center h-20 transition-all duration-300 hover:bg-white/20 hover:scale-105">
              <div className="text-white font-bold text-xl">Company 4</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
