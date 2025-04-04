
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, MessageSquare, Star } from 'lucide-react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Define the form schema with zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  rating: z.string().min(1, { message: "Please select a rating" }),
  message: z.string().min(10, { message: "Feedback must be at least 10 characters" }),
  contactMe: z.boolean().default(false),
});

type FormValues = z.infer<typeof formSchema>;

const FeedbackSection = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: "",
      message: "",
      contactMe: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // Use the raw query method instead of the typed client
      const { error } = await supabase
        .from('feedback')
        .insert({
          name: data.name,
          email: data.email,
          rating: data.rating,
          message: data.message,
          contact_me: data.contactMe
        } as any); // Use type assertion to bypass type checking

      if (error) throw error;

      toast.success("Thank You!", {
        description: "We've received your feedback and appreciate your thoughts.",
        icon: <MessageSquare className="text-templeads-primary" />
      });

      form.reset();
    } catch (error) {
      console.error("Feedback submission error:", error);
      toast.error("Submission Failed", {
        description: "Please try again later."
      });
    }
  };

  return (
    <section id="feedback" className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-templeads-primary mb-4">
              We Value Your Feedback
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your insights help us continuously improve our advertising services. 
              Share your experience, suggestions, or concerns with us.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rate Our Services</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a rating" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="excellent">
                            <div className="flex items-center">
                              <Star className="mr-2 text-yellow-500" fill="currentColor" />
                              Excellent
                            </div>
                          </SelectItem>
                          <SelectItem value="good">
                            <div className="flex items-center">
                              <Star className="mr-2 text-yellow-400" />
                              Good
                            </div>
                          </SelectItem>
                          <SelectItem value="average">
                            <div className="flex items-center">
                              <Star className="mr-2 text-yellow-300" />
                              Average
                            </div>
                          </SelectItem>
                          <SelectItem value="poor">
                            <div className="flex items-center">
                              <Star className="mr-2 text-gray-300" />
                              Needs Improvement
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your detailed thoughts, suggestions, or concerns..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="contactMe"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Contact me about this feedback</FormLabel>
                        <FormDescription>
                          We may reach out to discuss your feedback in more detail.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
