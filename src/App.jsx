import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Awards from "./components/AchievementShowCse";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { ToastContainer } from 'react-toastify';

import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Awards />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
