
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BookingStepper from './BookingStepper';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [bookingDoctor, setBookingDoctor] = useState<string | null>(null);

  return (
    <section id="home" className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg w-full sm:w-auto">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('hero.bookNow')}
                </Button>
              </Link>
              <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400 justify-center sm:justify-start">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{t('hero.available')}</span>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">500+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">10k+</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">98%</div>
                <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>
          {/* Right Content - Illustration */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 md:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Secure & Verified</h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">All doctors are licensed</p>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <button
                  className="flex items-center justify-between w-full p-2 sm:p-3 bg-teal-50 dark:bg-teal-900 rounded-lg text-left hover:bg-teal-100 dark:hover:bg-teal-800 transition"
                  onClick={() => setBookingDoctor('Dr. Sarah Johnson')}
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Dr. Sarah Johnson</span>
                  <span className="text-xs text-teal-600 dark:text-teal-400">Available</span>
                </button>
                <button
                  className="flex items-center justify-between w-full p-2 sm:p-3 bg-teal-50 dark:bg-teal-900 rounded-lg text-left hover:bg-teal-100 dark:hover:bg-teal-800 transition"
                  onClick={() => setBookingDoctor('Dr. Michael Chen')}
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Dr. Michael Chen</span>
                  <span className="text-xs text-teal-600 dark:text-teal-400">Available</span>
                </button>
                <button
                  className="flex items-center justify-between w-full p-2 sm:p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-left cursor-not-allowed opacity-60"
                  disabled
                >
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">Dr. Emily Davis</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Busy</span>
                </button>
              </div>
            </div>
            {bookingDoctor && (
              <BookingStepper doctorName={bookingDoctor} onClose={() => setBookingDoctor(null)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
