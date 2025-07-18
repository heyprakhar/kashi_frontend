
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Stethoscope, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DarkModeToggle } from './DarkModeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import BookingStepper from './BookingStepper';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  // Track if popover should stay open due to input focus
  const [searchPopoverForceOpen, setSearchPopoverForceOpen] = useState(false);
  const [bookingDoctor, setBookingDoctor] = useState<string | null>(null);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'bookAppointment', href: '#booking' },
    { key: 'forDoctors', href: '#doctors' },
    { key: 'contact', href: '#contact' }
  ];

  const doctorSuggestions = [
    { name: 'Dr. Priya Sharma', specialty: 'Dermatology' },
    { name: 'Dr. Arjun Mehra', specialty: 'Ophthalmology' }
  ];

  const filteredSuggestions = doctorSuggestions.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Remove separate popovers for mobile and desktop, use one search button and popover
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 768;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-teal-100 dark:border-teal-800 sticky top-0 z-50 pt-[env(safe-area-inset-top,2.5rem)] md:pt-0">
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 xs:h-15 sm:h-16 flex-nowrap overflow-x-auto gap-1 xs:gap-2 sm:gap-4">
          {/* Logo Row */}
          <div className="flex items-center min-w-0 flex-shrink-1 flex-grow md:w-auto">
            <div className="flex items-center space-x-1 xs:space-x-2 min-w-0">
              <Stethoscope className="h-7 w-7 xs:h-8 xs:w-8 text-teal-600" />
              <Link to="/">
                <span className="text-xl xs:text-2xl font-extrabold tracking-widest text-teal-700 dark:text-teal-300 truncate" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Kaashvi
                </span>
              </Link>
            </div>
          </div>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center md:space-x-6 lg:space-x-8 flex-shrink-0">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/booking" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              {t('nav.bookAppointment')}
            </Link>
            <Link to="/doctors" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              {t('nav.forDoctors')}
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 px-2 lg:px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              {t('nav.contact')}
            </Link>
          </div>
          {/* Controls */}
          <div className="flex items-center gap-1 xs:gap-2 flex-shrink-0 flex-wrap">
            {/* Single Search Button for all viewports */}
            <Popover open={searchOpen || searchPopoverForceOpen} onOpenChange={(open) => {
              if (!open && searchPopoverForceOpen) return;
              setSearchOpen(open);
            }}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Search" className="h-8 w-8 xs:h-9 xs:w-9">
                  <Search className="h-4 w-4 xs:h-5 xs:w-5 text-teal-700 dark:text-teal-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" sideOffset={8} className="w-60 xs:w-72" onOpenAutoFocus={e => {
                e.preventDefault();
                setTimeout(() => searchInputRef.current?.focus(), 0);
              }}>
                <div className="mb-2 font-semibold text-gray-900 dark:text-white">{t('booking.searchDoctors')}</div>
                <Input
                  ref={searchInputRef}
                  placeholder={t('booking.searchPlaceholder')}
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="mb-3"
                  onFocus={() => setSearchPopoverForceOpen(true)}
                  onBlur={() => setTimeout(() => setSearchPopoverForceOpen(false), 150)}
                />
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((doc, idx) => (
                      <li key={idx} className="py-2 flex flex-col cursor-pointer hover:bg-teal-50 dark:hover:bg-teal-900 rounded px-2" onClick={() => { setBookingDoctor(doc.name); setSearchOpen(false); setSearchPopoverForceOpen(false); }}>
                        <span className="font-medium text-teal-700 dark:text-teal-300">{doc.name}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{doc.specialty}</span>
                      </li>
                    ))
                  ) : (
                    <li className="py-2 text-gray-500 dark:text-gray-400 text-sm">{t('booking.noResults')}</li>
                  )}
                </ul>
              </PopoverContent>
            </Popover>
            <LanguageSwitcher />
            <DarkModeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8 xs:h-9 xs:w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4 xs:h-5 xs:w-5" /> : <Menu className="h-4 w-4 xs:h-5 xs:w-5" />}
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
      {bookingDoctor && (
        <BookingStepper doctorName={bookingDoctor} onClose={() => setBookingDoctor(null)} />
      )}
    </nav>
  );
};
