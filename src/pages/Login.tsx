import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, Eye, EyeOff, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navbar } from '@/components/Navbar';

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('patient');
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [otpMethod, setOtpMethod] = useState<'email' | 'phone'>('email');
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState('');

  // Form state (for demonstration, not hooked up to backend)
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleRequestOtp = () => {
    setOtpRequested(true);
    // Here you would call the backend to send the OTP
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would verify the OTP and log the user in
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
                  {t('auth.loginTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {step === 'credentials' && (
                  <form className="space-y-6" onSubmit={handleNext}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">{t('auth.email')}</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="login-email"
                            type="email"
                            placeholder="john@example.com"
                            className="pl-10"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="login-phone">{t('auth.phone')}</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="login-phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="pl-10"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="login-password">{t('auth.password')}</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="login-password"
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
                      <RadioGroup value={userType} onValueChange={setUserType} className="flex space-x-6">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="patient" id="patient-login" />
                          <Label htmlFor="patient-login">{t('auth.patient')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="doctor" id="doctor-login" />
                          <Label htmlFor="doctor-login">{t('auth.doctor')}</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="admin" id="admin-login" />
                          <Label htmlFor="admin-login">Admin</Label>
                        </div>
                      </RadioGroup>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Normal users should choose <span className="font-semibold">Patient</span> while creating an account or signing in.
                      </div>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700" type="submit">
                        Next
                      </Button>
                    </div>
                  </form>
                )}
                {step === 'otp' && (
                  <form className="space-y-6" onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Where do you want to receive the OTP?</Label>
                        <RadioGroup value={otpMethod} onValueChange={v => setOtpMethod(v as 'email' | 'phone')} className="flex space-x-6">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="otp-email" />
                            <Label htmlFor="otp-email">Email</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="otp-phone" />
                            <Label htmlFor="otp-phone">Phone</Label>
                          </div>
                        </RadioGroup>
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
                        Login
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

export default Login; 