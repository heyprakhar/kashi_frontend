// @ts-nocheck
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface BookingStepperProps {
  doctorName: string;
  onClose: () => void;
}

const BookingStepper: React.FC<BookingStepperProps> = ({ doctorName, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  // Mock patient number and time (replace with backend integration later)
  const patientNumber = 'P123456';
  const expectedTime = '10:30 AM';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="max-w-md w-full mx-auto px-4">
        <Card className="shadow-2xl relative">
          <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl w-10 h-10 flex items-center justify-center" onClick={onClose}>&times;</button>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
              Book Appointment
            </CardTitle>
          </CardHeader>
          <CardContent>
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-lg font-semibold mb-2">Doctor: <span className="text-teal-700 dark:text-teal-300">{doctorName}</span></div>
                  <div className="mb-4">Choose your appointment date:</div>
                  <div className="flex justify-center gap-4">
                    {[0, 1].map(i => {
                      const date = new Date();
                      date.setDate(date.getDate() + i);
                      const dateStr = date.toISOString().split('T')[0];
                      const displayDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                      const label = i === 0 ? `${displayDate} (Today)` : `${displayDate} (Tomorrow)`;
                      return (
                        <Button
                          key={dateStr}
                          variant={selectedDate === dateStr ? 'default' : 'outline'}
                          onClick={() => setSelectedDate(dateStr)}
                        >
                          {label}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 mt-4"
                    disabled={!selectedDate}
                    onClick={() => setStep(2)}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6 text-center">
                <div className="text-lg font-semibold mb-2 text-teal-700 dark:text-teal-300">Appointment Confirmed!</div>
                <div className="mb-2">Patient Number: <span className="font-mono text-base">{patientNumber}</span></div>
                <div className="mb-2">Expected Time: <span className="font-semibold">{expectedTime}</span></div>
                <div className="mb-2 text-gray-600 dark:text-gray-300 text-sm">You will receive a confirmation via email and SMS.</div>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 mt-2" onClick={onClose}>Close</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingStepper; 