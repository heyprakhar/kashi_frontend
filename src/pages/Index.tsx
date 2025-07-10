
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeatureCards } from '@/components/FeatureCards';
import { AuthModal } from '@/components/AuthModal';
import { BookingSection } from '@/components/BookingSection';
import '@/lib/i18n';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <FeatureCards />
        <BookingSection />
      </div>
    </ThemeProvider>
  );
};

export default Index;
