import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        startTitle: 'Some start text',
        startDescription:
          'Want to be a pain in the cupidatat cillum has been criticized in the Duis et dolore magna flee produces no resultant pleasure.' +
          ' Excepteur blacks are cupidatat proident.',
        btnGetStarted: 'Get Started Now',
        btnWatch: 'Watch Video'
      }
    },
    he: {
      translation: {
        startTitle: 'Some start text',
        startDescription:
          'אני אפטר מדבריך לפחות מהגוף' +
          'נהגתי נבלה, לא אמצא נשמה' +
          'זה כואב, אוי, איך זה כואב והדם רותח' +
          'והבת כבר לא ישנה, פחות מילים, יותר פעולה',
        btnGetStarted: 'Get Started Now',
        btnWatch: 'Watch Video'
      }
    },
    fr: {
      translation: {
        startTitle: 'Certains textes de départ',
        startDescription:
          'Vouloir être une douleur dans le cupidatat cillum a été critiqué dans la fuite Duis et dolore magna ne produit' +
          'aucun plaisir résultant. Les noirs excepteur sont cupidatat généreux',
        btnGetStarted: 'Commencez maintenant',
        btnWatch: 'Regarder la vidéo'
      }
    },
    de: {
      translation: {
        startTitle: 'Einige Starttexte',
        startDescription:
          'Willst du ein Schmerz in der Cupidatat sein cillum wurde kritisiert, in der Duis et dolore magna fliehen produziert kein daraus resultierendes Vergnügen.' +
          ' Außergewöhnliche Schwarze sind Cupidata proident.',
        btnGetStarted: 'Jetzt loslegen',
        btnWatch: 'Schau Video'
      }
    },
    ru: {
      translation: {
        startTitle: 'Какой-то текст',
        startDescription:
          'Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации системы обученият, однако забывать, значительной степени обуславливает создание модели развития.',
        btnGetStarted: 'Попробовать сейчас',
        btnWatch: 'Смотреть видео'
      }
    }
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  }
});
export default i18next;
