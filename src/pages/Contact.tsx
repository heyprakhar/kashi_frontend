import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';

const Contact: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Contact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Have questions or need support? Reach out to us and we’ll get back to you soon.
            </p>
            {/* Add contact form or details here */}
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Contact; 