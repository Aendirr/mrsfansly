/**
 * Copyright 2025 aendirr
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */


import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import TextSlider from '../TextSlider/TextSlider';
import './HeroSection.css';

const HeroSection = ({ onOpenModal }) => {
  const { t } = useLanguage();

  const handleCTAClick = (e) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal();
    } else {
      const element = document.querySelector(t('hero.ctaButton.link'));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeVideoId("https://assets.mrgambcommunity.com/mrfansvideo/31.mp4");

  return (
    <section className="hero-section">
      <div className="hero-video-container">
        <video 
          className="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
          webkit-playsinline="true"
          x5-playsinline="true"
          x5-video-player-type="h5"
          x5-video-player-fullscreen="false"
          poster="/images/hero-poster.jpg"
        >
          <source src="https://assets.mrgambcommunity.com/mrfansvideo/31.mp4" type="video/mp4" />
          Tarayıcınız video oynatmayı desteklemiyor.
        </video>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="container">
          <div className="hero-text">
            <h1 className="hero-heading">
              {t('hero.mainHeading')}
              <br />
              <span className="hero-subheading">{t('hero.subHeading')}</span>
            </h1>
            
            <p className="hero-description">
              {t('hero.description')}
            </p>

            <button 
              className="hero-cta"
              onClick={handleCTAClick}
            >
              
              {t('hero.ctaButton.text')}
            </button>
          </div>
        </div>
      </div>

      <TextSlider />
    </section>
  );
};

export default HeroSection; 