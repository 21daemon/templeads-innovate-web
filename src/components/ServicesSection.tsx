
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Smartphone, Database, PenTool, BarChart, Bot, BrainCircuit, Cpu, FlaskConical, Network } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  highlighted?: boolean;
}

const ServiceCard = ({ title, description, icon, features, highlighted = false }: ServiceProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const alwaysShowFeatures = isMobile || highlighted;
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl p-6 h-full flex flex-col justify-between transform hover:scale-105 ${
        highlighted 
          ? 'border-2 border-templeads-secondary ring-2 ring-templeads-secondary/20' 
          : 'card-hover'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-6 ${
          highlighted 
            ? 'bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white' 
            : 'bg-gradient-to-r from-templeads-secondary/20 to-templeads-accent/20 text-templeads-secondary'
        }`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold text-templeads-primary mb-3">
          {highlighted && <span className="inline-block mr-2 px-2 py-0.5 bg-templeads-secondary/10 text-templeads-secondary text-xs rounded-full">Featured</span>}
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {(isHovered || alwaysShowFeatures) && (
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
        <Button 
          variant={highlighted ? "default" : "outline"} 
          className={highlighted 
            ? "bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white w-full sm:w-auto" 
            : "border-templeads-secondary text-templeads-secondary hover:bg-templeads-secondary hover:text-white w-full sm:w-auto"
          }
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <BrainCircuit size={24} />,
      title: "AI Product Development",
      description: "Cutting-edge artificial intelligence solutions to automate processes and provide valuable business insights.",
      highlighted: true,
      features: [
        "Custom Machine Learning models",
        "Natural Language Processing systems",
        "Computer Vision applications",
        "Predictive analytics dashboards",
        "Intelligent recommendation engines"
      ]
    },
    {
      icon: <Bot size={24} />,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational agents that enhance customer service and automate routine tasks.",
      highlighted: true,
      features: [
        "Customer support chatbots",
        "Virtual assistants for business",
        "Industry-specific AI agents",
        "Voice-enabled assistants",
        "Multi-language support"
      ]
    },
    {
      icon: <Network size={24} />,
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities with your existing systems and workflows.",
      features: [
        "AI integration with legacy systems",
        "API development for AI services",
        "Cloud-based AI deployment",
        "AI-powered automation",
        "Continuous training & improvement"
      ]
    },
    {
      icon: <Cpu size={24} />,
      title: "AI Strategy Consulting",
      description: "Strategic guidance on implementing AI to drive growth and competitive advantage.",
      features: [
        "AI readiness assessment",
        "Data strategy planning",
        "AI implementation roadmap",
        "ROI analysis for AI initiatives",
        "AI ethics and governance"
      ]
    },
    {
      icon: <FlaskConical size={24} />,
      title: "Data Science Solutions",
      description: "Transform raw data into actionable insights and predictive models.",
      features: [
        "Data preparation & cleaning",
        "Exploratory data analysis",
        "Statistical modeling",
        "Data visualization dashboards",
        "Model deployment & maintenance"
      ]
    },
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-sm font-semibold text-templeads-secondary uppercase tracking-wider">Our Services</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-templeads-primary mt-2">
            AI-Powered Technology Solutions for Your Business
          </h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We specialize in artificial intelligence and advanced technology services to help businesses innovate and grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
              highlighted={service.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
