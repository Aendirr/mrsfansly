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
import { useLanguage } from '../../contexts/LanguageContext';
import { useTheme } from '../../contexts/ThemeContext';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Navbar.css';

const Navbar = ({ onOpenModal, onOpenAboutModal }) => {
  const { t } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMenuClick = (link) => {
    if (link.startsWith('#')) {
      scrollToSection(link);
    } else {
      window.open(link, '_blank');
    }
  };

  const handleAboutClick = () => {
    if (onOpenAboutModal) {
      onOpenAboutModal();
    } else {
      scrollToSection('#about');
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClick = (link) => {
    if (link.startsWith('#')) {
      scrollToSection(link);
    } else if (link === 'about') {
      handleAboutClick();
      return;
    } else {
      window.open(link, '_blank');
    }
    setIsMobileMenuOpen(false);
  };

  const handleMobileCTAClick = () => {
    onOpenModal();
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img 
              src="/assets/of.ico" 
              alt="MrsFans Agency Logo" 
              className="logo-icon"
            />
            <span className="logo-text">{t('siteName')}</span>
          </div>

          <div className="navbar-menu">
            <button 
              className="menu-item"
              onClick={handleAboutClick}
            >
              {t('nav.about')}
            </button>
            <button 
              className="menu-item"
              onClick={() => handleMenuClick('#models')}
            >
              {t('nav.models')}
            </button>
            <button 
              className="menu-item"
              onClick={() => handleMenuClick('#contact')}
            >
              {t('nav.contact')}
            </button>
          </div>

          <div className="navbar-right">
            <div className="social-icons">
              <a 
                href={t('socialMedia.instagram')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <img 
                  src="/assets/social/instagram.webp" 
                  alt="Instagram" 
                  className="social-icon-img"
                />
              </a>
              <a 
                href={t('socialMedia.twitter')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon twitter"
                aria-label="Twitter"
              >
                <img 
                  src="/assets/social/twitter.png" 
                  alt="Twitter" 
                  className="social-icon-img"
                />
              </a>
              <a 
                href={t('socialMedia.youtube')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon youtube"
                aria-label="YouTube"
              >
                <img 
                  src="/assets/social/youtube.png" 
                  alt="YouTube" 
                  className="social-icon-img"
                />
              </a>
            </div>

            <LanguageSwitcher />

            <button 
              className="theme-toggle-navbar" 
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Light moda geç' : 'Dark moda geç'}
              title={isDarkMode ? 'Light Tema' : 'Dark Tema'}
            >
              <span className="theme-toggle-icon">
                {isDarkMode ? (
                  <i className="fa-regular fa-sun"></i>
                ) : (
                  <i className="fa-regular fa-moon"></i>
                )}
              </span>
            </button>
          </div>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Menüyü aç/kapat"
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>

        <div 
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>      
          <div className="mobile-menu-content">
            <div className="mobile-menu-items">
              <button 
                className="mobile-menu-item"
                onClick={() => handleMobileMenuClick('about')}
              >
                <i className="fas fa-info-circle" style={{marginRight: '0.75rem', color: 'var(--baby-blue)'}}></i>
                {t('nav.about')}
              </button>
              <button 
                className="mobile-menu-item"
                onClick={() => handleMobileMenuClick('#models')}
              >
                <i className="fas fa-users" style={{marginRight: '0.75rem', color: 'var(--baby-blue)'}}></i>
                {t('nav.models')}
              </button>
              <button 
                className="mobile-menu-item"
                onClick={() => handleMobileMenuClick('#contact')}
              >
                <i className="fas fa-envelope" style={{marginRight: '0.75rem', color: 'var(--baby-blue)'}}></i>
                {t('nav.contact')}
              </button>
            </div>

            <div className="mobile-menu-social">
              <h4>Follow Us</h4>
              <div className="mobile-social-links">
                <a 
                  href={t('socialMedia.instagram')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-social-link instagram"
                  onClick={() => setIsMobileMenuOpen(false)}
                  title="Instagram"
                >
                  <img src="/assets/social/instagram.webp" alt="Instagram" />
                </a>
                <a 
                  href={t('socialMedia.twitter')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-social-link twitter"
                  onClick={() => setIsMobileMenuOpen(false)}
                  title="Twitter"
                >
                  <img src="/assets/social/twitter.png" alt="Twitter" />
                </a>
                <a 
                  href={t('socialMedia.youtube')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mobile-social-link youtube"
                  onClick={() => setIsMobileMenuOpen(false)}
                  title="YouTube"
                >
                  <img src="/assets/social/youtube.png" alt="YouTube" />
                </a>
              </div>
            </div>

            <div className="mobile-menu-actions">
              <button 
                className="mobile-cta-btn"
                onClick={handleMobileCTAClick}
              >
                {t('nav.apply')}
              </button>
              
              <button 
                className="mobile-theme-toggle" 
                onClick={() => {
                  toggleTheme();
                  setIsMobileMenuOpen(false);
                }}
                aria-label={isDarkMode ? 'Light moda geç' : 'Dark moda geç'}
              >
                <span className="mobile-theme-icon">
                  {isDarkMode ? (
                    <i className="fa-regular fa-sun"></i>
                  ) : (
                    <i className="fa-regular fa-moon"></i>
                  )}
                </span>
                <span>{isDarkMode ? 'Light Tema' : 'Dark Tema'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 