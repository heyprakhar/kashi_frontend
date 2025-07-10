import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface BookingInstructionsProps {
  onContinue: () => void;
}

const BookingInstructions: React.FC<BookingInstructionsProps> = ({ onContinue }) => {
  const { t } = useTranslation();
  const steps = [
    {
      title: t('booking.step1Title'),
      description: t('booking.step1Desc')
    },
    {
      title: t('booking.step2Title'),
      description: t('booking.step2Desc')
    },
    {
      title: t('booking.step3Title'),
      description: t('booking.step3Desc')
    },
    {
      title: t('booking.step4Title'),
      description: t('booking.step4Desc')
    },
    {
      title: t('booking.step5Title'),
      description: t('booking.step5Desc')
    }
  ];
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
              {t('booking.instructionsTitle')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <Card key={idx} className="bg-white dark:bg-gray-900 border border-teal-100 dark:border-teal-800">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-teal-700 dark:text-teal-300">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 text-base">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
              <div className="text-center pt-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3" onClick={onContinue}>
                  {t('booking.continue')}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingInstructions; 