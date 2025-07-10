import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { BookingSection } from '@/components/BookingSection';

const Booking: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <BookingSection />
      </div>
    </ThemeProvider>
  );
};

export default Booking; 