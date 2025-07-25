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
import './TextSlider.css';

const TextSlider = () => {
  const { t } = useLanguage();
  const messages = t('sliderMessages');
  const duplicatedMessages = [...messages, ...messages];

  return (
    <div className="text-slider">
      <div className="slider-container">
        <div className="slider-track">
          {duplicatedMessages.map((message, index) => (
            <div key={index} className="slide-item">
              <span className="slide-text">{message}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextSlider; 