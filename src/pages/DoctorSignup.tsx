import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, User, Phone, Eye, EyeOff, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';

const DoctorSignup: React.FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [otpMethod, setOtpMethod] = useState<'email' | 'phone'>('email');
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState('');

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [clinicAdminId, setClinicAdminId] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleRequestOtp = () => {
    setOtpRequested(true);
    // Here you would call the backend to send the OTP
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would verify the OTP and sign the doctor up
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-md mx-auto px-4">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                  Doctor Signup
                </CardTitle>
              </CardHeader>
              <CardContent>
                {step === 'credentials' && (
                  <form className="space-y-6" onSubmit={handleNext}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-name">{t('auth.fullName')}</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="signup-name"
                            type="text"
                            placeholder="Dr. Arjun Mehra"
                            className="pl-10"
                            value={name}
                            onChange={e => setName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">{t('auth.email')}</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="signup-email"
                            type="email"
                            placeholder="doctor@example.com"
                            className="pl-10"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-phone">{t('auth.phone')}</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="signup-phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="pl-10"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">{t('auth.password')}</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="signup-password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="••••••••"
                            className="pl-10 pr-10"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="clinic-admin-id">Clinic Admin ID <span className="text-red-500">*</span></Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="clinic-admin-id"
                            type="text"
                            placeholder="Enter your Clinic Admin ID"
                            className="pl-10"
                            value={clinicAdminId}
                            onChange={e => setClinicAdminId(e.target.value)}
                            required
                          />
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          If you currently do not have an admin ID, you must create an admin account by signing up as an admin with different credentials. This admin account will be used to manage doctors in your respective clinic.
                        </div>
                      </div>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700" type="submit">
                        Next
                      </Button>
                    </div>
                  </form>
                )}
                {step === 'otp' && (
                  <form className="space-y-6" onSubmit={handleSignup}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Where do you want to receive the OTP?</Label>
                        <div className="flex space-x-6">
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="otp-email" name="otp-method" value="email" checked={otpMethod === 'email'} onChange={() => setOtpMethod('email')} />
                            <Label htmlFor="otp-email">Email</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="radio" id="otp-phone" name="otp-method" value="phone" checked={otpMethod === 'phone'} onChange={() => setOtpMethod('phone')} />
                            <Label htmlFor="otp-phone">Phone</Label>
                          </div>
                        </div>
                        <Button type="button" className="w-full bg-teal-600 hover:bg-teal-700 mt-2" onClick={handleRequestOtp} disabled={otpRequested}>
                          {otpRequested ? 'OTP Sent' : 'Request OTP'}
                        </Button>
                      </div>
                      {otpRequested && (
                        <div className="space-y-2">
                          <Label htmlFor="otp-input">Enter OTP</Label>
                          <Input
                            id="otp-input"
                            type="text"
                            placeholder="Enter the OTP"
                            value={otp}
                            onChange={e => setOtp(e.target.value)}
                          />
                        </div>
                      )}
                      <Button className="w-full bg-teal-600 hover:bg-teal-700" type="submit" disabled={!otpRequested || !otp}>
                        Sign Up
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default DoctorSignup; 