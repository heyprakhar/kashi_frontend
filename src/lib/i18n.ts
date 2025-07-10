
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        bookAppointment: 'Book Appointment',
        forDoctors: 'For Doctors',
        contact: 'Contact',
        login: 'Login',
        signup: 'Sign Up'
      },
      hero: {
        title: 'Your Health, Our Priority',
        subtitle: 'Book appointments with verified doctors instantly',
        bookNow: 'Book Appointment Now',
        available: '24/7 Available'
      },
      features: {
        bookOnline: 'Book Online',
        bookOnlineDesc: 'Schedule appointments anytime, anywhere',
        verifiedDoctors: 'Verified Doctors',
        verifiedDoctorsDesc: 'All doctors are verified and licensed',
        securePlatform: 'Secure Platform',
        securePlatformDesc: 'Your data is protected and secure'
      },
      auth: {
        loginTitle: 'Welcome Back',
        signupTitle: 'Create Account',
        email: 'Email Address',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        fullName: 'Full Name',
        phone: 'Phone Number',
        patient: 'Patient',
        doctor: 'Doctor',
        loginBtn: 'Sign In',
        signupBtn: 'Create Account',
        switchToSignup: "Don't have an account? Sign up",
        switchToLogin: 'Already have an account? Sign in'
      },
      booking: {
        title: 'Book Your Appointment',
        selectDate: 'Select Date',
        selectTime: 'Select Time',
        selectDoctor: 'Choose Your Doctor',
        bookNow: 'Book Now',
        available: 'Available',
        unavailable: 'Unavailable'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'मुख्य पृष्ठ',
        bookAppointment: 'अपॉइंटमेंट बुक करें',
        forDoctors: 'डॉक्टरों के लिए',
        contact: 'संपर्क',
        login: 'लॉगिन',
        signup: 'साइन अप'
      },
      hero: {
        title: 'आपका स्वास्थ्य, हमारी प्राथमिकता',
        subtitle: 'सत्यापित डॉक्टरों के साथ तुरंत अपॉइंटमेंट बुक करें',
        bookNow: 'अभी अपॉइंटमेंट बुक करें',
        available: '24/7 उपलब्ध'
      },
      features: {
        bookOnline: 'ऑनलाइन बुक करें',
        bookOnlineDesc: 'कभी भी, कहीं भी अपॉइंटमेंट शेड्यूल करें',
        verifiedDoctors: 'सत्यापित डॉक्टर',
        verifiedDoctorsDesc: 'सभी डॉक्टर सत्यापित और लाइसेंसीकृत हैं',
        securePlatform: 'सुरक्षित प्लेटफॉर्म',
        securePlatformDesc: 'आपका डेटा सुरक्षित और संरक्षित है'
      },
      auth: {
        loginTitle: 'वापसी पर स्वागत है',
        signupTitle: 'खाता बनाएं',
        email: 'ईमेल पता',
        password: 'पासवर्ड',
        confirmPassword: 'पासवर्ड की पुष्टि करें',
        fullName: 'पूरा नाम',
        phone: 'फोन नंबर',
        patient: 'मरीज़',
        doctor: 'डॉक्टर',
        loginBtn: 'साइन इन',
        signupBtn: 'खाता बनाएं',
        switchToSignup: 'खाता नहीं है? साइन अप करें',
        switchToLogin: 'पहले से खाता है? साइन इन करें'
      },
      booking: {
        title: 'अपना अपॉइंटमेंट बुक करें',
        selectDate: 'तारीख चुनें',
        selectTime: 'समय चुनें',
        selectDoctor: 'अपना डॉक्टर चुनें',
        bookNow: 'अभी बुक करें',
        available: 'उपलब्ध',
        unavailable: 'अनुपलब्ध'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
