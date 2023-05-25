import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HOME_EN from '~/locales/en/home.json';
import MOVIE_EN from '~/locales/en/movie.json';
import HOME_VI from '~/locales/vi/home.json';
import MOVIE_VI from '~/locales/vi/movie.json';

export const locales = {
  en: 'English',
  vi: 'Tiếng Anh',
} as const;

export const resources = {
  en: {
    home: HOME_EN,
    movie: MOVIE_EN,
  },
  vi: {
    home: HOME_VI,
    movie: MOVIE_VI,
  },
};

export const defaultNS = 'home';

i18next.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home', 'movie'],
  fallbackLng: 'vi',
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});
