
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
        securePlatformDesc: 'Your data is protected and secure',
        sectionTitle: 'Why Choose Kaashvi?',
        sectionSubtitle: 'Experience healthcare booking like never before with our comprehensive platform'
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
        unavailable: 'Unavailable',
        instructionsTitle: 'How to Book an Appointment',
        step1Title: 'Step 1: Choose State',
        step1Desc: 'Select your state from the list to begin the booking process.',
        step2Title: 'Step 2: Choose District',
        step2Desc: 'Pick your district to narrow down the available doctors.',
        step3Title: 'Step 3: Choose Doctor',
        step3Desc: 'Browse and select a doctor from the available options.',
        step4Title: 'Step 4: Make Payment',
        step4Desc: 'Pay using any of the provided payment methods to confirm your appointment.',
        step5Title: 'Step 5: Confirmation & Notifications',
        step5Desc: 'Your appointment will be booked. You will receive a confirmation via email and SMS. It will also be displayed on the website.',
        continue: 'Continue',
        searchDoctors: 'Search Doctors',
        searchPlaceholder: 'Type doctor or specialty...',
        noResults: 'No results found.'
      },
      footer: {
        brand: 'Kaashvi',
        copyright: 'All rights reserved.',
        home: 'Home',
        bookAppointment: 'Book Appointment',
        forDoctors: 'For Doctors',
        contact: 'Contact'
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
        securePlatformDesc: 'आपका डेटा सुरक्षित और संरक्षित है',
        sectionTitle: 'काश्वी क्यों चुनें?',
        sectionSubtitle: 'हमारे व्यापक प्लेटफ़ॉर्म के साथ पहले कभी न देखी गई स्वास्थ्य देखभाल बुकिंग का अनुभव करें'
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
        unavailable: 'अनुपलब्ध',
        instructionsTitle: 'अपॉइंटमेंट बुक करने के चरण',
        step1Title: 'चरण 1: राज्य चुनें',
        step1Desc: 'बुकिंग प्रक्रिया शुरू करने के लिए अपनी राज्य चुनें।',
        step2Title: 'चरण 2: जिला चुनें',
        step2Desc: 'उपलब्ध डॉक्टरों को सीमित करने के लिए अपना जिला चुनें।',
        step3Title: 'चरण 3: डॉक्टर चुनें',
        step3Desc: 'उपलब्ध विकल्पों में से डॉक्टर चुनें।',
        step4Title: 'चरण 4: भुगतान करें',
        step4Desc: 'अपॉइंटमेंट की पुष्टि के लिए किसी भी दिए गए भुगतान विधि का उपयोग करें।',
        step5Title: 'चरण 5: पुष्टि और सूचनाएँ',
        step5Desc: 'आपका अपॉइंटमेंट बुक हो जाएगा। आपको ईमेल और एसएमएस के माध्यम से पुष्टि प्राप्त होगी। वेबसाइट पर भी दिखाई देगा।',
        continue: 'आगे बढ़ें',
        searchDoctors: 'डॉक्टर खोजें',
        searchPlaceholder: 'डॉक्टर या विशेषज्ञता टाइप करें...',
        noResults: 'कोई परिणाम नहीं मिला।'
      },
      footer: {
        brand: 'KAASHVI',
        copyright: 'सर्वाधिकार सुरक्षित।',
        home: 'मुख्य पृष्ठ',
        bookAppointment: 'अपॉइंटमेंट बुक करें',
        forDoctors: 'डॉक्टरों के लिए',
        contact: 'संपर्क'
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
