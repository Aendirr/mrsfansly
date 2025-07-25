/**
 * Copyright 2025 aendirr
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

function SEOManager({ page }) {
  const [metaData, setMetaData] = useState({});
  const [analyticsId, setAnalyticsId] = useState(null);
  const [scripts, setScripts] = useState([]);

  useEffect(() => {
    fetch('/meta.json')
      .then((res) => res.json())
      .then((data) => {
        setAnalyticsId(data.analyticsId || null);
        setScripts(data.scripts || []);
        setMetaData(data[page] || {});
      })
      .catch((err) => console.error('Meta JSON yüklenemedi:', err));
  }, [page]);

  return (
    <Helmet>
      {/* ✅ Sayfa Başlığı ve Temel Meta */}
      {metaData.title && <title>{metaData.title}</title>}
      {metaData.description && <meta name="description" content={metaData.description} />}
      {metaData.keywords && <meta name="keywords" content={metaData.keywords} />}
      {metaData.canonical && <link rel="canonical" href={metaData.canonical} />}
      {metaData.robots && <meta name="robots" content={metaData.robots} />}
      {metaData.author && <meta name="author" content={metaData.author} />}
      {metaData.publisher && <meta name="publisher" content={metaData.publisher} />}

      {/* ✅ Open Graph */}
      {Object.entries(metaData)
        .filter(([key]) => key.startsWith('og:'))
        .map(([key, value]) => (
          <meta key={key} property={key} content={value} />
        ))}

      {/* ✅ Twitter */}
      {Object.entries(metaData)
        .filter(([key]) => key.startsWith('twitter:'))
        .map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}

      {/* ✅ Google Analytics */}
      {analyticsId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${analyticsId}');
              `
            }}
          />
        </>
      )}
    </Helmet>
  );
}

function App() {
  const currentPage = 'home'; // İleride Router ile dinamik hale getirilebilir
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openAboutModal = () => setIsAboutModalOpen(true);
  const closeAboutModal = () => setIsAboutModalOpen(false);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <div className="App">
            {/* ✅ SEO Manager */}
            <SEOManager page={currentPage} />

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
    </HelmetProvider>
  );
}

export default App;