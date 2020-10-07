import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    default: 'en',
    en: {
        "home": {
            "welcome": "Welcome.",
            "select_exercise": "Please select an exercise from the list."
        }
    },
    fr: {
        "home": {
            "welcome": "Bienvenue",
            "select_exercise": "Ceci est une vue test"
        }
    }
};

export const lang = (value) => {
    console.log(value);

    return value
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
