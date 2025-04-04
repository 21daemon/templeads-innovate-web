
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FeedbackSection from '@/components/FeedbackSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Implement smooth scrolling
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const navbarHeight = 80; // Approximate height of the navbar
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div className="py-6"></div> {/* Spacing element */}
      <AboutSection />
      <div className="py-4"></div> {/* Spacing element */}
      <ServicesSection />
      <div className="py-4"></div> {/* Spacing element */}
      <PortfolioSection />
      <div className="py-4"></div> {/* Spacing element */}
      <WhyChooseUs />
      <div className="py-4"></div> {/* Spacing element */}
      <TestimonialsSection />
      <div className="py-4"></div> {/* Spacing element */}
      <ContactSection />
      <div className="py-4"></div> {/* Spacing element */}
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Index;
