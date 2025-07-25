/**
 * Copyright 2025 aendirr
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */


import React, { useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './AboutModal.css';

const AboutModal = ({ isOpen, onClose, onOpenApplicationModal }) => {
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCTAClick = () => {
    onClose();
    if (onOpenApplicationModal) {
      onOpenApplicationModal();
    }
  };

  return (
    <div className="about-modal-overlay" onClick={handleBackdropClick}>
      <div className="about-modal-container">
        <div className="about-modal-header">
          <h2 className="about-modal-title">{t('aboutModal.title')}</h2>
          <button 
            className="about-modal-close"
            onClick={onClose}
            aria-label={t('aboutModal.closeLabel')}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="about-modal-content">
          <div className="about-section">
            <div className="about-hero">
              <h3>MrsFans Agency</h3>
              <p className="about-subtitle">
                {t('aboutModal.subtitle')}
              </p>
            </div>

            <div className="about-description">
              <p>
                {t('aboutModal.description')}
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">47</div>
                <div className="stat-label">{t('aboutModal.successfulModels')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$5M+</div>
                <div className="stat-label">{t('aboutModal.totalRevenue')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">93%</div>
                <div className="stat-label">{t('aboutModal.customerSatisfaction')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">{t('aboutModal.supportService')}</div>
              </div>
            </div>

            <div className="about-services">
              <h4>{t('aboutModal.whatWeOffer')}</h4>
              <div className="services-grid">
                <div className="service-item">
                  <i className="fas fa-users"></i>
                  <h5>{t('aboutModal.professionalManagement')}</h5>
                  <p>{t('aboutModal.professionalManagementDesc')}</p>
                </div>
                <div className="service-item">
                  <i className="fas fa-camera"></i>
                  <h5>{t('aboutModal.contentProduction')}</h5>
                  <p>{t('aboutModal.contentProductionDesc')}</p>
                </div>
                <div className="service-item">
                  <i className="fas fa-chart-line"></i>
                  <h5>{t('aboutModal.marketingStrategy')}</h5>
                  <p>{t('aboutModal.marketingStrategyDesc')}</p>
                </div>
                <div className="service-item">
                  <i className="fas fa-shield-alt"></i>
                  <h5>{t('aboutModal.dmcaProtection')}</h5>
                  <p>{t('aboutModal.dmcaProtectionDesc')}</p>
                </div>
              </div>
            </div>

            <div className="about-mission">
              <h4>{t('aboutModal.mission')}</h4>
              <p>
                {t('aboutModal.missionText')}
              </p>
            </div>

            <div className="about-values">
              <h4>{t('aboutModal.values')}</h4>
              <div className="values-list">
                <div className="value-item">
                  <i className="fas fa-handshake"></i>
                  <span>{t('aboutModal.reliability')}</span>
                </div>
                <div className="value-item">
                  <i className="fas fa-eye"></i>
                  <span>{t('aboutModal.transparency')}</span>
                </div>
                <div className="value-item">
                  <i className="fas fa-trophy"></i>
                  <span>{t('aboutModal.successOriented')}</span>
                </div>
                <div className="value-item">
                  <i className="fas fa-heart"></i>
                  <span>{t('aboutModal.customerSatisfactionValue')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-modal-footer">
          <button 
            className="about-cta-button"
            onClick={handleCTAClick}
          >
            {t('aboutModal.applyNow')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal; 