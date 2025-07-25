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
import './Footer.css';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('footer.services'), href: '#services' },
    { name: t('nav.models'), href: '#models' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const services = [
    { name: t('gridSection.items.0.title'), href: '#about' },
    { name: t('gridSection.items.1.title'), href: '#about' },
    { name: t('gridSection.items.3.title'), href: '#about' },
    { name: t('gridSection.items.7.title'), href: '#about' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            <div className="footer-column">
              <div className="footer-logo">
                <img
                  src="/assets/of.ico"
                  alt="MrsFans Agency Logo"
                  className="footer-logo-icon"
                />
                <span className="footer-logo-text">{t('siteName')}</span>
              </div>
              <p className="footer-description">
                {t('footer.description')}
              </p>
              <div className="footer-contact">
                <a href="mailto:info@mrfansagency.com" className="contact-item contact-link">
                  <i className="fas fa-envelope"></i>
                  <span>info@mrfansagency.com</span>
                </a>
                <a href="https://wa.me/447868019817" className="contact-item contact-link" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-phone"></i>
                  <span>+44 7868019817</span>
                </a>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>İstanbul, Türkiye</span>
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">{t('footer.quickLinks')}</h3>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      className="footer-link"
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">{t('footer.services')}</h3>
              <ul className="footer-links">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      className="footer-link"
                      onClick={() => handleLinkClick(service.href)}
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Follow Us</h3>
              <div className="footer-social">
                <a
                  href={t('socialMedia.instagram')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link instagram"
                  aria-label="Instagram"
                >
                  <img
                    src="/assets/social/instagram.webp"
                    alt="Instagram"
                  />
                  <span>Instagram</span>
                </a>
                <a
                  href={t('socialMedia.twitter')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link twitter"
                  aria-label="Twitter"
                >
                  <img
                    src="/assets/social/twitter.png"
                    alt="Twitter"
                  />
                  <span>Twitter</span>
                </a>
                <a
                  href={t('socialMedia.youtube')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link youtube"
                  aria-label="YouTube"
                >
                  <img
                    src="/assets/social/youtube.png"
                    alt="YouTube"
                  />
                  <span>YouTube</span>
                </a>
              </div>

              <div className="newsletter">
                <h4 className="newsletter-title">{t('footer.newsletter')}</h4>
                <p className="newsletter-text">
                  {t('footer.newsletterText')}
                </p>
                <div className="newsletter-form">
                  <input
                    type="email"
                    placeholder={t('footer.newsletterPlaceholder')}
                    className="newsletter-input"
                  />
                  <button className="newsletter-btn">
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p>&copy; {currentYear} {t('siteName')}. {t('footer.copyright')}</p>
            </div>
            <div className="footer-bottom-right">
              <button className="footer-bottom-link">{t('footer.privacyPolicy')}</button>
              <button className="footer-bottom-link">{t('footer.termsOfService')}</button>
              <button className="footer-bottom-link">{t('footer.dmca')}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 