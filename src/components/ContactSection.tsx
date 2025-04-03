
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleServiceChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      service: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-templeads-secondary uppercase tracking-wider">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-templeads-primary mt-2">Get In Touch</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md h-full">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-templeads-secondary/10 rounded-full flex items-center justify-center text-templeads-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-templeads-primary">Our Location</h4>
                    <p className="text-gray-600 mt-1">123 Tech Park, Silicon Valley, CA 94025</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-templeads-secondary/10 rounded-full flex items-center justify-center text-templeads-secondary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-templeads-primary">Email</h4>
                    <p className="text-gray-600 mt-1">info@templeadsinfotech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-templeads-secondary/10 rounded-full flex items-center justify-center text-templeads-secondary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-templeads-primary">Phone</h4>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-templeads-secondary/10 rounded-full flex items-center justify-center text-templeads-secondary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-templeads-primary">Working Hours</h4>
                    <p className="text-gray-600 mt-1">Monday - Friday: 9am - 6pm</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="mt-8 rounded-lg overflow-hidden h-64 border border-gray-200">
                <iframe
                  title="Templeads Infotech Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639393158333!2d-122.08403502329146!3d37.4219999971861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
              <h4 className="text-xl font-bold text-templeads-primary mb-6">Send Us a Message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-gray-700 font-medium">Your Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-gray-700 font-medium">Service Inquiry</label>
                  <Select value={formData.service} onValueChange={handleServiceChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web Development</SelectItem>
                      <SelectItem value="mobile">Mobile App Development</SelectItem>
                      <SelectItem value="ai">AI Product Development</SelectItem>
                      <SelectItem value="ui-ux">UI/UX & Branding</SelectItem>
                      <SelectItem value="software">Software Solutions</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-gray-700 font-medium">Your Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
