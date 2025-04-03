
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Smartphone, Database, PenTool, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl p-6 h-full flex flex-col justify-between card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div className="w-14 h-14 bg-gradient-to-r from-templeads-secondary/20 to-templeads-accent/20 rounded-lg flex items-center justify-center text-templeads-secondary mb-6">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-templeads-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {isHovered && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-templeads-secondary mr-2">•</span>
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="mt-4">
        <Button variant="outline" className="border-templeads-secondary text-templeads-secondary hover:bg-templeads-secondary hover:text-white">
          Learn More
        </Button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: "Web Development",
      description: "Custom web applications and responsive websites tailored to your business needs.",
      features: [
        "Custom web application development",
        "Frontend and backend development",
        "E-commerce solutions",
        "CMS development",
        "Progressive Web Apps (PWAs)"
      ]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms.",
      features: [
        "Native iOS & Android development",
        "React Native & Flutter apps",
        "App prototyping and UI/UX",
        "App maintenance and updates",
        "App Store optimization"
      ]
    },
    {
      icon: <Database size={24} />,
      title: "AI Product Development",
      description: "AI-powered solutions that automate processes and provide valuable insights.",
      features: [
        "Machine Learning models",
        "Natural Language Processing",
        "Computer Vision systems",
        "Predictive analytics",
        "AI integration with existing systems"
      ]
    },
    {
      icon: <PenTool size={24} />,
      title: "UI/UX & Branding",
      description: "Beautiful, intuitive designs that elevate your digital presence and user experience.",
      features: [
        "User Interface design",
        "User Experience strategy",
        "Design systems",
        "Brand identity design",
        "Usability testing"
      ]
    },
    {
      icon: <BarChart size={24} />,
      title: "Software Solutions",
      description: "Enterprise-grade software solutions that streamline operations and boost productivity.",
      features: [
        "SaaS product development",
        "Enterprise solutions",
        "Legacy system modernization",
        "Cloud migration",
        "DevOps implementation"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-templeads-secondary uppercase tracking-wider">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-templeads-primary mt-2">Comprehensive Technology Solutions for Your Business</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We offer a wide range of services to help businesses leverage technology for growth and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
