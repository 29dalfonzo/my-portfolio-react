import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          hello: 'Hello World',
          //Navbar
          works: 'Works',
          skills: 'Skills',

          //About
          hi: "Hi!, I'm Daniel.",
          about: "I'm a web developer, passionate about programming and tech. I like to learn new things and share my knowledge with others. I'm currently working as a freelancer and I'm looking for new opportunities to work with great people and projects.",
          contact: "Contact me",
          seeMyWork: "See my work",

          //Projects
          appsBuilded: "Apps I've Built",
          appPresentation: "This is a list of apps I've built in the past for practice and works.",

          //Skills
          skills_1: "Skills &amp; Technologies",
          skillPresentation: "Since my beginnings I have been inclined towards frontend development, but I love supporting and learning backend, I really like working with the Javascript programming language. I love learning new technologies and developing applications with them"

        }
      },
      es: {
        translation: {
          hello: 'Hola Mundo',
          //Navbar
          works: 'Trabajos',
          skills: 'Habilidades',

          //About
          hi: "Hola!, Soy Daniel.",
          about: 'Soy un desarrollador web, apasionado por la tecnología y la programación. Me gusta aprender cosas nuevas y compartir mi conocimiento con otros. Actualmente trabajo como freelancer y estoy en la busqueda de nuevas oportunidades de trabajo junto a buenas personas y proyectos',
          contact: "Contáctame",
          seeMyWork: "Ver mi trabajo",

          //Projects
          appsBuilded: "Aplicaciones desarrolladas",
          appPresentation: "Esta es una lista de aplicaciones que he desarrollado en el pasado a modo de práctica y trabajo.",

          //skills
          skills_1: "Habilidades y Tecnologías",
          skillPresentation: 'Desde mis inicios me incliné por el desarrollo frontend, pero me encanta apoyar y aprender en el backend, me gusta mucho trabajar con el lenguaje de programación Javascript. Me encanta aprender nuevas tecnologías y desarrollar aplicaciones con ellas.',
        }
      }
    }
  });

export default i18n;
