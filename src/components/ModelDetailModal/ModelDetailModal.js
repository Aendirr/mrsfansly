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
import './ModelDetailModal.css';

const ModelDetailModal = ({ isOpen, onClose, modelData }) => {
  const { t } = useLanguage();
  
  if (!isOpen || !modelData) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="model-detail-modal-overlay" onClick={handleBackdropClick}>
      <div className="model-detail-modal">
        <div className="model-detail-header">
          <h3 className="model-detail-title">{modelData.name} - {t('modelDetailModal.title')}</h3>
          <button className="model-detail-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="model-detail-content">
          <div className="model-profile-section">
            <div className="model-profile-image">
              <img 
                src={modelData.image} 
                alt={modelData.name}
                className="profile-img"
              />
              <div className="status-badge">
                <i className="fas fa-star"></i>
                <span>{t('modelDetailModal.activeModel')}</span>
              </div>
            </div>

            <div className="model-info">
              <h4>{t('modelDetailModal.about')}</h4>
              <p className="model-bio">{modelData.bio}</p>
              
              <div className="model-stats">
                <div className="stat-item">
                  <div className="stat-number">{modelData.stats.experience}</div>
                  <div className="stat-label">{t('modelDetailModal.experience')}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{modelData.stats.followers}</div>
                  <div className="stat-label">{t('modelDetailModal.followers')}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">{modelData.stats.rating}</div>
                  <div className="stat-label">{t('modelDetailModal.rating')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="achievements-section">
            <h4>{t('modelDetailModal.achievements')}</h4>
            <div className="achievements-grid">
              {modelData.achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <i className={achievement.icon}></i>
                  <div>
                    <h5>{achievement.title}</h5>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="earnings-section">
            <h4>{t('modelDetailModal.earningsPerformance')}</h4>
            <div className="earnings-stats">
              <div className="earning-item">
                <div className="earning-number">{modelData.earnings.monthly}</div>
                <div className="earning-label">{t('modelDetailModal.monthlyEarnings')}</div>
              </div>
              <div className="earning-item">
                <div className="earning-number">{modelData.earnings.total}</div>
                <div className="earning-label">{t('modelDetailModal.totalEarnings')}</div>
              </div>
              <div className="earning-item">
                <div className="earning-number">{modelData.earnings.growth}</div>
                <div className="earning-label">{t('modelDetailModal.growthRate')}</div>
              </div>
            </div>
          </div>

          <div className="social-links-section">
            <h4>{t('modelDetailModal.socialMediaPlatforms')}</h4>
            <div className="social-links-grid">
              <button 
                className="social-link instagram"
                onClick={() => handleSocialClick(modelData.socialLinks.instagram)}
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </button>
              <button 
                className="social-link twitter"
                onClick={() => handleSocialClick(modelData.socialLinks.twitter)}
              >
                <i className="fab fa-twitter"></i>
                <span>Twitter</span>
              </button>
              <button 
                className="social-link tiktok"
                onClick={() => handleSocialClick(modelData.socialLinks.tiktok)}
              >
                <i className="fab fa-tiktok"></i>
                <span>TikTok</span>
              </button>
              <button 
                className="social-link onlyfans"
                onClick={() => handleSocialClick(modelData.socialLinks.onlyfans)}
              >
                <i className="fas fa-crown"></i>
                <span>OnlyFans</span>
              </button>
            </div>
          </div>

          <div className="model-cta-section">
            <button 
              className="model-onlyfans-btn"
              onClick={() => handleSocialClick(modelData.socialLinks.onlyfans)}
            >
              <i className="fas fa-crown"></i>
              <span>{t('modelDetailModal.viewOnlyFansProfile')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetailModal; 