
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CalendarDays, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format, addDays } from 'date-fns';
import { toast } from 'sonner';

const ScheduleMeetingButton: React.FC<{ className?: string }> = ({ className }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [topic, setTopic] = useState('');
  
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const currentDate = addDays(new Date(), i + 1);
    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    const displayDate = format(currentDate, 'EEEE, MMMM d, yyyy');
    return { value: formattedDate, label: displayDate };
  });
  
  const availableTimes = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
  ];
  
  const handleScheduleMeeting = () => {
    if (!name || !email || !date || !time || !topic) {
      toast.error('Please fill out all fields');
      return;
    }
    
    // Format the date and time for Google Calendar URL
    const selectedDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(selectedDateTime.getTime() + 30 * 60000); // 30 minutes later
    
    const formattedStart = format(selectedDateTime, "yyyyMMdd'T'HHmmss");
    const formattedEnd = format(endDateTime, "yyyyMMdd'T'HHmmss");
    
    // Create Google Calendar event link with Google Meet
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Meeting with ${name} - ${topic}`)}&dates=${formattedStart}/${formattedEnd}&details=${encodeURIComponent(`Meeting scheduled with ${name} (${email}) to discuss ${topic}.`)}&add=${encodeURIComponent('templeads@example.com')}&ctz=UTC&crm=AVAILABLE&add=virtualconference`;
    
    // Open the Google Calendar link in a new tab
    window.open(googleCalendarUrl, '_blank');
    
    toast.success('Meeting scheduled!', {
      description: `Your meeting is scheduled for ${format(selectedDateTime, 'MMMM d, yyyy')} at ${format(selectedDateTime, 'h:mm a')}`,
    });
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className={`border-white text-white hover:bg-white/10 flex items-center gap-2 ${className}`}
        >
          <CalendarDays size={18} /> Schedule a Call
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule a Google Meet Call</DialogTitle>
          <DialogDescription>
            Select a date and time for your consultation. We'll send you a Google Meet link.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="name">Your Name</Label>
            <Input 
              id="name" 
              placeholder="John Doe" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="johndoe@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Select onValueChange={setDate}>
              <SelectTrigger>
                <SelectValue placeholder="Select a date" />
              </SelectTrigger>
              <SelectContent>
                {availableDates.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="time">Preferred Time</Label>
            <Select onValueChange={setTime}>
              <SelectTrigger>
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <Label htmlFor="topic">Discussion Topic</Label>
            <Select onValueChange={setTopic}>
              <SelectTrigger>
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                <SelectItem value="web-development">Web Development</SelectItem>
                <SelectItem value="mobile-development">Mobile Development</SelectItem>
                <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                <SelectItem value="custom-software">Custom Software</SelectItem>
                <SelectItem value="general-inquiry">General Inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-between gap-3">
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancel</Button>
          </DialogClose>
          <Button 
            type="button" 
            className="bg-gradient-to-r from-templeads-secondary to-templeads-accent text-white"
            onClick={handleScheduleMeeting}
          >
            Schedule Meeting
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleMeetingButton;
