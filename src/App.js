/**
 * Copyright 2025 aendirr
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */


import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ServicesGrid from './components/ServicesGrid/ServicesGrid';
import ModelsSection from './components/ModelsSection/ModelsSection';
import BottomSection from './components/BottomSection/BottomSection';
import Footer from './components/Footer/Footer';
import ApplicationModal from './components/ApplicationModal/ApplicationModal';
import AboutModal from './components/AboutModal/AboutModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAboutModal = () => setIsAboutModalOpen(true);
  const closeAboutModal = () => setIsAboutModalOpen(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <Navbar 
            onOpenModal={openModal} 
            onOpenAboutModal={openAboutModal} 
          />
          
          <main>
            <HeroSection onOpenModal={openModal} />
            
            <ServicesGrid />
            
            <ModelsSection />
            
            <BottomSection onOpenModal={openModal} />
          </main>

          <Footer />

          <ApplicationModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
          />

          <AboutModal 
            isOpen={isAboutModalOpen} 
            onClose={closeAboutModal}
            onOpenApplicationModal={openModal}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App; 