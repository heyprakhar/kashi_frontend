
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose MediCare?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience healthcare booking like never before with our comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.key} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t(`features.${feature.key}`)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
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
