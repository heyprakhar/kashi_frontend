import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-teal-100 dark:border-teal-800 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-2xl font-extrabold tracking-widest text-teal-700 dark:text-teal-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Kaashvi
          </span>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">&copy; {new Date().getFullYear()} Kaashvi. All rights reserved.</p>
        </div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-medium transition-colors">Home</Link>
          <Link to="/booking" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-medium transition-colors">Book Appointment</Link>
          <Link to="/doctors" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-medium transition-colors">For Doctors</Link>
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm font-medium transition-colors">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer; 