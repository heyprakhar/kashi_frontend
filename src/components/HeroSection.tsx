
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-teal-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('hero.bookNow')}
                </Button>
              </Link>
              <div className="flex items-center space-x-2 text-teal-600 dark:text-teal-400">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{t('hero.available')}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">10k+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">98%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Secure & Verified</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">All doctors are licensed</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-teal-50 dark:bg-teal-900 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Dr. Sarah Johnson</span>
                  <span className="text-xs text-teal-600 dark:text-teal-400">Available</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-teal-50 dark:bg-teal-900 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Dr. Michael Chen</span>
                  <span className="text-xs text-teal-600 dark:text-teal-400">Available</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Dr. Emily Davis</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Busy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
