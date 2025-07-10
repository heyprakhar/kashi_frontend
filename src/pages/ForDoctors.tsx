import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const ForDoctors: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              For Doctors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join KASHI to reach more patients, manage appointments efficiently, and grow your practice with our secure, user-friendly platform. Enjoy features like real-time booking, patient management, and access to a large patient base.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">Expand Your Reach</h3>
                  <p className="text-gray-700 dark:text-gray-200">Connect with new patients looking for trusted doctors in their area.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">Easy Scheduling</h3>
                  <p className="text-gray-700 dark:text-gray-200">Manage appointments with a simple, intuitive interface and real-time updates.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">Secure Platform</h3>
                  <p className="text-gray-700 dark:text-gray-200">All patient data and communications are encrypted and secure.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-teal-700 dark:text-teal-300 mb-2">Analytics & Feedback</h3>
                  <p className="text-gray-700 dark:text-gray-200">Access valuable insights and patient feedback to improve your practice.</p>
                </CardContent>
              </Card>
            </div>
            <Link to="/signup/doctor">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-md transition-colors">
                Join KASHI as a Doctor
              </button>
            </Link>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default ForDoctors; 