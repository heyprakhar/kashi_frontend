import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { BookingSection } from '@/components/BookingSection';
import BookingInstructions from './BookingInstructions';
import Footer from '@/components/Footer';

const Booking: React.FC = () => {
  const [showInstructions, setShowInstructions] = React.useState(true);
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col min-h-screen">
        <Navbar />
        {showInstructions ? (
          <BookingInstructions onContinue={() => setShowInstructions(false)} />
        ) : (
          <BookingSection />
        )}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Booking; 