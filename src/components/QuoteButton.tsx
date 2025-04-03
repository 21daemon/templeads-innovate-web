
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import QuoteDialog from "@/components/QuoteDialog";

interface QuoteButtonProps {
  className?: string;
  fullWidth?: boolean;
}

const QuoteButton = ({ className = "", fullWidth = false }: QuoteButtonProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (!user) {
      // If not authenticated, redirect to auth page
      navigate('/auth');
    } else {
      // If authenticated, open quote dialog
      setDialogOpen(true);
    }
  };
  
  return (
    <>
      <Button 
        onClick={handleClick}
        className={`${className} bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white hover:shadow-lg transition-all ${fullWidth ? 'w-full' : 'px-6'}`}
      >
        Get a Free Quote
      </Button>
      
      <QuoteDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </>
  );
};

export default QuoteButton;
