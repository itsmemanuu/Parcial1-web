import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector) 
    .use(initReactI18next)
    .init({
        lng: 'en',
        resources: {
            en: {
                translation: {
                    login: "Login",
                    email: "Email",
                    enotvalid: "Email is not valid",
                    password: "Password",
                    pnotvalid: "Password is not 8 characters long",
                    submit: "Submit",
                    cycling: "Cycling",
                    running: "Running",
                    swimming: "Swimming",
                    cyclingSesh: "Cycling Session",
                    runningSesh: "Running Session",
                    swimmingSesh: "Swimming Session",
                    tour: "Tour around the Bay of"
                }
            },
            es: {
                translation: {
                    login: "Iniciar sesión",
                    email: "Correo electrónico",
                    enotvalid: "El correo electrónico no es válido",
                    password: "Contraseña",
                    pnotvalid: "La contraseña no tiene 8 caracteres",
                    submit: "Enviar",
                    cycling: "Ciclismo",
                    running: "Correr",
                    swimming: "Natación",
                    cyclingSesh: "Sesión de ciclismo",
                    runningSesh: "Sesión de correr",
                    swimmingSesh: "Sesión de natación",
                    tour: "Recorrido alrededor de la Bahía de"
                }
            },
            fallbackLng: 'en',
            interpolation: {
                escapeValue: false
            },
            detection: {
                order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
                caches: []
            }
        }
    });

export default i18n;