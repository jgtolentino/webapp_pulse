import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock, User, Briefcase, MessageSquare } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { trackConversionWithUTM } from "@/utils/utmTracker";

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    topic: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // In a real implementation, you'd send the appointment data to your backend
      // Here we're just simulating a successful submission
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Redirect to success page
      navigate("/appointment-success");
    } catch (err) {
      setLoading(false);
    }
  };

  // Generate next 14 days for date selection
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() === 0 || date.getDay() === 6) continue;
      
      const formattedDate = date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      });
      const dateValue = date.toISOString().split('T')[0];
      
      dates.push({ display: formattedDate, value: dateValue });
    }
    
    return dates;
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    
    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minutes of [0, 30]) {
        if (hour === endHour && minutes === 30) continue; // Skip 5:30 PM
        
        const time = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        const displayTime = `${hour % 12 || 12}:${minutes.toString().padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
        
        slots.push({ display: displayTime, value: time });
      }
    }
    
    return slots;
  };

  const dates = generateDates();
  const timeSlots = generateTimeSlots();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Book a Strategy Session</h1>
            <p className="text-theme-light/70 max-w-2xl mx-auto">
              Schedule a 30-minute one-on-one consultation with our AI experts to discuss your project needs and explore how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="bg-theme-darker p-8 rounded-lg shadow-lg border border-theme-darkgray/30">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-xl font-bold flex items-center">
                  <CalendarIcon className="mr-2" size={20} />
                  Select Date & Time
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-theme-light/80">
                      Select Date
                    </label>
                    <select 
                      className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                    >
                      <option value="">Choose a date</option>
                      {dates.map((date, index) => (
                        <option key={index} value={date.value}>
                          {date.display}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-theme-light/80">
                      Select Time
                    </label>
                    <select 
                      className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                    >
                      <option value="">Choose a time</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot.value}>
                          {slot.display}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-bold flex items-center">
                  <User className="mr-2" size={20} />
                  Your Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 text-theme-light/80">
                      Full Name*
                    </label>
                    <input 
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-theme-light/80">
                      Email Address*
                    </label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-theme-light/80">
                      Company
                    </label>
                    <input 
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-2 text-theme-light/80">
                      Phone Number
                    </label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-xl font-bold flex items-center">
                  <MessageSquare className="mr-2" size={20} />
                  Meeting Details
                </h2>
                
                <div>
                  <label className="block mb-2 text-theme-light/80">
                    What would you like to discuss?*
                  </label>
                  <select 
                    name="topic"
                    value={formData.topic}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="ai-strategy">AI Strategy</option>
                    <option value="implementation">Implementation Services</option>
                    <option value="custom-solution">Custom AI Solution</option>
                    <option value="pricing">Pricing & Packages</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block mb-2 text-theme-light/80">
                    Additional Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-theme-dark border border-theme-darkgray/50 rounded-md text-theme-light min-h-[100px]"
                    placeholder="Please share any specific questions or details you'd like to discuss..."
                  />
                </div>
              </div>
              
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="bg-theme-accent1 text-theme-darker hover:bg-theme-accent1/90 px-8 py-2 text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-theme-darker" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Book Appointment"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentBooking;