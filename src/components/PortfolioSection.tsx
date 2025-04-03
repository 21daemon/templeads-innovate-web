
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

// Example portfolio items (in a real application, this would come from a database or API)
const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "web",
    image: "https://placehold.co/600x400/2CA6A4/FFFFFF?text=E-commerce+Platform",
    client: "Fashion Retailer",
    description: "A full-featured e-commerce platform with advanced product filtering, cart functionality and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    caseStudy: {
      challenge: "The client needed a modern e-commerce solution to replace their outdated platform that was slow and difficult to maintain.",
      solution: "We developed a custom e-commerce platform with a React frontend and Node.js backend, incorporating advanced features like real-time inventory management and personalized recommendations.",
      results: "50% increase in conversion rates and 30% reduction in cart abandonment after launch."
    }
  },
  {
    id: 2,
    title: "Health Monitoring App",
    category: "mobile",
    image: "https://placehold.co/600x400/0A2342/FFFFFF?text=Health+App",
    client: "Healthcare Provider",
    description: "A mobile application for patients to track their health metrics and communicate with healthcare providers.",
    technologies: ["React Native", "Firebase", "HealthKit"],
    caseStudy: {
      challenge: "The healthcare provider wanted to improve patient engagement and monitoring outside of clinical visits.",
      solution: "We built a cross-platform mobile app that integrates with wearable devices and allows secure communication between patients and providers.",
      results: "86% of patients reported improved health management and communication with their healthcare team."
    }
  },
  {
    id: 3,
    title: "AI Customer Support",
    category: "ai",
    image: "https://placehold.co/600x400/F76C6C/FFFFFF?text=AI+Support",
    client: "SaaS Company",
    description: "An AI-powered customer support system that automates responses to common inquiries and escalates complex issues.",
    technologies: ["Python", "TensorFlow", "NLP", "React"],
    caseStudy: {
      challenge: "The company was struggling to handle the increasing volume of customer support requests efficiently.",
      solution: "We implemented an AI system that could understand and respond to customer queries automatically, while seamlessly integrating with human support agents.",
      results: "70% of routine inquiries now handled by AI, reducing response time from hours to minutes."
    }
  },
  {
    id: 4,
    title: "Corporate Rebrand",
    category: "ui-ux",
    image: "https://placehold.co/600x400/2CA6A4/FFFFFF?text=Corporate+Rebrand",
    client: "Financial Services Firm",
    description: "Complete redesign of brand identity including logo, website, and marketing materials.",
    technologies: ["Figma", "Adobe Creative Suite", "WordPress"],
    caseStudy: {
      challenge: "The client's brand was outdated and inconsistent across different platforms and materials.",
      solution: "We developed a comprehensive brand strategy and design system, implementing it across digital and print touchpoints.",
      results: "Brand recognition improved by 40% within 6 months of the rebrand launch."
    }
  },
  {
    id: 5,
    title: "Inventory Management System",
    category: "software",
    image: "https://placehold.co/600x400/0A2342/FFFFFF?text=Inventory+System",
    client: "Manufacturing Company",
    description: "Custom inventory management software with predictive ordering and real-time tracking capabilities.",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
    caseStudy: {
      challenge: "The client was using manual processes for inventory management, leading to errors and inefficiencies.",
      solution: "We developed a custom system with barcode scanning, real-time updates, and predictive analytics for inventory forecasting.",
      results: "Inventory accuracy improved to 99.8% and ordering costs reduced by 25%."
    }
  },
  {
    id: 6,
    title: "Financial Dashboard",
    category: "web",
    image: "https://placehold.co/600x400/F76C6C/FFFFFF?text=Financial+Dashboard",
    client: "Investment Firm",
    description: "Interactive dashboard for visualizing complex financial data and investment performance.",
    technologies: ["React", "D3.js", "GraphQL", "AWS"],
    caseStudy: {
      challenge: "The client needed a way to visualize complex financial data in an intuitive way for their clients.",
      solution: "We created a responsive dashboard with interactive charts and real-time data updates, allowing users to drill down into specific metrics.",
      results: "Client engagement with financial reports increased by 80%, and time spent analyzing data decreased by 60%."
    }
  }
];

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const filteredProjects = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);
    
  const openCaseStudy = (project: typeof portfolioItems[0]) => {
    setSelectedProject(project);
    setDialogOpen(true);
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-templeads-secondary uppercase tracking-wider">Our Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-templeads-primary mt-2">Showcasing Our Best Work</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Explore our diverse portfolio of successful projects across various industries and technologies.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 bg-gray-100">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
              <TabsTrigger value="web" onClick={() => setFilter("web")}>Web</TabsTrigger>
              <TabsTrigger value="mobile" onClick={() => setFilter("mobile")}>Mobile</TabsTrigger>
              <TabsTrigger value="ai" onClick={() => setFilter("ai")}>AI</TabsTrigger>
              <TabsTrigger value="ui-ux" onClick={() => setFilter("ui-ux")}>UI/UX</TabsTrigger>
              <TabsTrigger value="software" onClick={() => setFilter("software")}>Software</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="overflow-hidden rounded-lg shadow-md bg-white card-hover">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-templeads-primary">{project.title}</h4>
                        <p className="text-gray-500 text-sm">{project.client}</p>
                      </div>
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded text-gray-600 capitalize">
                        {project.category === "ui-ux" ? "UI/UX" : project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{project.description}</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-templeads-secondary font-medium flex items-center gap-1"
                      onClick={() => openCaseStudy(project)}
                    >
                      View Case Study <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Add TabsContent for other tabs if needed for specific layouts */}
        </Tabs>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-gray-500">
                  Client: {selectedProject.client}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-auto rounded-md shadow-md"
                  />
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-templeads-primary mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-xs px-3 py-1 rounded-full text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-4">
                    <h4 className="font-medium text-templeads-primary mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.caseStudy.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-templeads-primary mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.caseStudy.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-templeads-primary mb-2">Results:</h4>
                    <p className="text-gray-600 text-sm">{selectedProject.caseStudy.results}</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
