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
import { useLanguage } from '../../contexts/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getCurrentLanguageName = () => {
    return t(`languageSwitcher.${currentLanguage}`);
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-switcher-button"
        onClick={toggleDropdown}
        aria-label="Change language"
      >
        <span className="language-flag">
          {currentLanguage === 'tr' ? '🇹🇷' : '🇺🇸'}
        </span>
        <span className="language-text">{getCurrentLanguageName()}</span>
        <i className={`fas fa-chevron-down ${isOpen ? 'rotated' : ''}`}></i>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          <button
            className={`language-option ${currentLanguage === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('en')}
          >
            <span className="language-flag">🇺🇸</span>
            <span className="language-text">{t('languageSwitcher.en')}</span>
          </button>
          <button
            className={`language-option ${currentLanguage === 'tr' ? 'active' : ''}`}
            onClick={() => handleLanguageChange('tr')}
          >
            <span className="language-flag">🇹🇷</span>
            <span className="language-text">{t('languageSwitcher.tr')}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 