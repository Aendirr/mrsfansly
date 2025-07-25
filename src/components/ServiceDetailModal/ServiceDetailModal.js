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
import './ServiceDetailModal.css';

const ServiceDetailModal = ({ isOpen, onClose, serviceData }) => {
  const { t } = useLanguage();
  
  if (!isOpen || !serviceData) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="service-detail-modal-overlay" onClick={handleBackdropClick}>
      <div className="service-detail-modal">
        <div className="service-detail-header">
          <div className="service-header-info">
            <div className="service-icon-large">
              {serviceData.icon}
            </div>
            <h3 className="service-detail-title">{serviceData.title}</h3>
          </div>
          <button className="service-detail-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="service-detail-content">
          <div className="service-overview">
            <h4>{t('serviceDetailModal.serviceDescription')}</h4>
            <p className="service-detailed-description">{serviceData.detailedDescription}</p>
          </div>

          <div className="service-features">
            <h4>{t('serviceDetailModal.featuresAdvantages')}</h4>
            <div className="features-grid">
              {serviceData.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <i className={feature.icon}></i>
                  <div>
                    <h5>{feature.title}</h5>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-benefits">
            <h4>{t('serviceDetailModal.benefitsWeProvide')}</h4>
            <div className="benefits-list">
              {serviceData.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <i className="fas fa-check-circle"></i>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="service-process">
            <h4>{t('serviceDetailModal.processMethodology')}</h4>
            <div className="process-steps">
              {serviceData.process.map((step, index) => (
                <div key={index} className="process-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h5>{step.title}</h5>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-stats">
            <h4>{t('serviceDetailModal.performanceStats')}</h4>
            <div className="stats-grid">
              {serviceData.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="service-cta">
            <div className="cta-content">
              <h4>{t('serviceDetailModal.wantThisService')}</h4>
              <p>{t('serviceDetailModal.applyNowDesc')}</p>
              <button className="service-cta-btn" onClick={onClose}>
                <i className="fas fa-rocket"></i>
                <span>{t('serviceDetailModal.applyNow')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal; 