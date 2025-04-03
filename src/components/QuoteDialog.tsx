
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuoteDialog = ({ open, onOpenChange }: QuoteDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

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
      serviceType: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated');
      }
      
      // Submit quote request
      const { error } = await supabase.from('quote_requests').insert({
        user_id: user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        message: formData.message
      });
      
      if (error) throw error;
      
      toast({
        title: "Quote request submitted",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      });
      
      onOpenChange(false);
    } catch (error: any) {
      toast({
        title: "Error submitting quote request",
        description: error.message || "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-templeads-primary">Get a Free Quote</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you with a custom quote for your project.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label htmlFor="name" className="text-gray-700 font-medium">Full Name</label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="text-gray-700 font-medium">Email Address</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="text-gray-700 font-medium">Phone (optional)</label>
            <Input
              id="phone"
              name="phone"
              placeholder="+1 (123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          
          <div>
            <label htmlFor="serviceType" className="text-gray-700 font-medium">Service Type</label>
            <Select value={formData.serviceType} onValueChange={handleServiceChange} required>
              <SelectTrigger className="mt-1 w-full">
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
          
          <div>
            <label htmlFor="message" className="text-gray-700 font-medium">Project Details</label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your project requirements..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>
          
          <div className="pt-2">
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white py-6"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
