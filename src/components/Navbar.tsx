
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DarkModeToggle } from './DarkModeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'bookAppointment', href: '#booking' },
    { key: 'forDoctors', href: '#doctors' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-teal-100 dark:border-teal-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-teal-600" />
            <Link to="/">
              <span className="text-2xl font-extrabold tracking-widest text-teal-700 dark:text-teal-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                KASHI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/booking" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.bookAppointment')}
            </Link>
            <Link to="/doctors" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.forDoctors')}
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <DarkModeToggle />
            
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="text-teal-700 dark:text-teal-300">
                  {t('nav.login')}
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
                  {t('nav.signup')}
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-teal-100 dark:border-teal-800">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t('nav.home')}
              </Link>
              <Link to="/booking" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t('nav.bookAppointment')}
              </Link>
              <Link to="/doctors" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t('nav.forDoctors')}
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>
                {t('nav.contact')}
              </Link>
              <div className="border-t border-teal-100 dark:border-teal-800 pt-4 flex flex-col space-y-2">
                <Link to="/login">
                  <Button variant="ghost" size="sm" className="justify-start text-teal-700 dark:text-teal-300 w-full text-left">
                    {t('nav.login')}
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white w-full text-left">
                    {t('nav.signup')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
