
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeedbackForm from '@/components/FeedbackForm';

const Feedback = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-10">
            <div className="flex flex-col items-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">We Value Your Feedback</h1>
              <p className="text-center text-muted-foreground max-w-2xl">
                Your insights help us improve our advertising services. Please take a moment to share your thoughts with us.
              </p>
            </div>
            
            <FeedbackForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
