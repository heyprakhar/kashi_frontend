
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, User, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const doctors = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    specialty: 'Cardiologist',
    rating: 4.9,
    available: true,
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Dr. Arjun Mehra',
    specialty: 'Neurologist',
    rating: 4.8,
    available: true,
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Dr. Kavita Patel',
    specialty: 'Pediatrician',
    rating: 4.9,
    available: false,
    image: '/placeholder.svg'
  }
];

const timeSlots = [
  '09:00 AM', '09:30 AM',
  '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM',
  '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM'
];

export const BookingSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/booking');
  };

  return (
    <section id="booking" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('booking.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Choose your preferred date, time, and doctor
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Date Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-teal-600" />
                {t('booking.selectDate')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {[0, 1].map((i) => {
                  const date = new Date();
                  date.setDate(date.getDate() + i);
                  const dateStr = date.toISOString().split('T')[0];
                  const displayDate = date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  });
                  const label = i === 0 ? `${displayDate} (Today)` : `${displayDate} (Tomorrow)`;
                  return (
                    <Button
                      key={dateStr}
                      variant={selectedDate === dateStr ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedDate(dateStr)}
                      className={selectedDate === dateStr ? 'bg-teal-600 hover:bg-teal-700' : ''}
                    >
                      {label}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Time Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-teal-600" />
                {t('booking.selectTime')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                    className={selectedTime === time ? 'bg-teal-600 hover:bg-teal-700' : ''}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Doctor Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2 h-5 w-5 text-teal-600" />
                {t('booking.selectDoctor')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {doctors.map((doctor) => (
                  <div
                    key={doctor.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      selectedDoctor === doctor.id
                        ? 'border-teal-500 bg-teal-50 dark:bg-teal-900'
                        : 'border-gray-200 dark:border-gray-700 hover:border-teal-300'
                    } ${!doctor.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => doctor.available && setSelectedDoctor(doctor.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={doctor.image} alt={doctor.name} />
                        <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {doctor.name}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {doctor.specialty}
                        </p>
                        <div className="flex items-center mt-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
                            {doctor.rating}
                          </span>
                        </div>
                      </div>
                      <Badge variant={doctor.available ? 'default' : 'secondary'}>
                        {doctor.available ? t('booking.available') : t('booking.unavailable')}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Book Button */}
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3"
            disabled={!selectedDate || !selectedTime || !selectedDoctor}
            onClick={handleBookAppointment}
          >
            {t('booking.bookNow')}
          </Button>
        </div>
      </div>
    </section>
  );
};
