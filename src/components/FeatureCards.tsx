
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, UserCheck, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Calendar,
    key: 'bookOnline',
    color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
  },
  {
    icon: UserCheck,
    key: 'verifiedDoctors',
    color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
  },
  {
    icon: Shield,
    key: 'securePlatform',
    color: 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400'
  }
];

export const FeatureCards: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
            {t('features.sectionTitle')}
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('features.sectionSubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.key} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6`}>
                    <Icon className="h-6 w-6 md:h-8 md:w-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-4">
                    {t(`features.${feature.key}`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {t(`features.${feature.key}Desc`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
