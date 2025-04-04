
import React from 'react';
import { Lightbulb, Users, Scale, Clock } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Feature = ({ title, description, icon }: FeatureProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="w-12 h-12 bg-gradient-to-r from-templeads-secondary/20 to-templeads-accent/20 rounded-md flex items-center justify-center mb-4">
        <div className="text-templeads-secondary">
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-templeads-primary text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-templeads-secondary uppercase tracking-wider">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-templeads-primary mt-2">What Sets Us Apart</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We bring a unique blend of technical expertise, creative thinking, and business acumen to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature 
            icon={<Lightbulb />}
            title="Cutting-edge Technology"
            description="We leverage the latest technologies and frameworks to build modern, future-proof digital solutions."
          />
          
          <Feature 
            icon={<Users />}
            title="Client-Centric Approach"
            description="We prioritize your business goals and user needs, ensuring solutions that deliver real value."
          />
          
          <Feature 
            icon={<Scale />}
            title="Scalable Solutions"
            description="Our solutions are designed to grow with your business, adapting to changing needs and requirements."
          />
          
          <Feature 
            icon={<Clock />}
            title="On-Time Delivery"
            description="We adhere to strict project timelines and maintain transparent communication throughout."
          />
        </div>
        
        <div className="mt-16 bg-templeads-primary rounded-2xl overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-white/80 mb-6">
                Partner with us to build innovative digital solutions that drive growth and deliver exceptional user experiences.
              </p>
              <div>
                <button className="bg-white text-templeads-primary font-medium py-3 px-6 rounded-lg hover:bg-templeads-secondary hover:text-white transition-colors">
                  Start Your Project
                </button>
              </div>
            </div>
            
            <div className="bg-templeads-secondary/20 p-8 md:p-12 hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-md"></div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-templeads-accent rounded-full"></div>
                      <p className="text-white">Agile Development Methodology</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-templeads-accent rounded-full"></div>
                      <p className="text-white">Dedicated Project Manager</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-templeads-accent rounded-full"></div>
                      <p className="text-white">Quality Assurance Testing</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-templeads-accent rounded-full"></div>
                      <p className="text-white">Post-Launch Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
