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
import './BottomSection.css';

const BottomSection = ({ onOpenModal }) => {
  const { t } = useLanguage();

  return (
    <section className="bottom-section" id="contact">
      <div className="container">
        <div className="bottom-content">
          <h2 className="bottom-heading">
            {t('bottomSection.heading')}
          </h2>
          
          <p className="bottom-text">
            {t('bottomSection.text')}
          </p>

          <div className="bottom-cta">
            <button className="contact-btn" onClick={onOpenModal}>
              {t('nav.contact')}
            </button>
            <button className="info-btn" onClick={onOpenModal}>
              {t('nav.about')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection; 