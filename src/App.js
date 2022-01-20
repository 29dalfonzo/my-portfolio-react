import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
//import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import {useTranslation, Trans} from 'react-i18next';

export default function App() {
  const {t} = useTranslation()

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
