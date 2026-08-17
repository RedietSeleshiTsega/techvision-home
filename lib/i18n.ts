import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/messages/en.json';
import am from '@/messages/am.json';

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    am: { translation: am },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18next;