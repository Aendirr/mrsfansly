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
import { API_CONFIG, validateGoogleScriptURL } from '../../config/apiConfig';
import './ApplicationModal.css';

const ApplicationModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    instagram: '',
    twitter: '',
    reddit: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = t('applicationModal.firstNameRequired');
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = t('applicationModal.lastNameRequired');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('applicationModal.phoneRequired');
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = t('applicationModal.phoneInvalid');
    }

    if (!formData.email.trim()) {
      newErrors.email = t('applicationModal.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('applicationModal.emailInvalid');
    }

    // Sosyal medya hesapları opsiyonel validasyon
    if (formData.instagram.trim() && !/^[a-zA-Z0-9._]+$/.test(formData.instagram.trim())) {
      newErrors.instagram = t('applicationModal.instagramInvalid');
    }

    if (formData.twitter.trim() && !/^[a-zA-Z0-9_]+$/.test(formData.twitter.trim())) {
      newErrors.twitter = t('applicationModal.twitterInvalid');
    }

    if (formData.reddit.trim() && !/^[a-zA-Z0-9_-]+$/.test(formData.reddit.trim())) {
      newErrors.reddit = t('applicationModal.redditInvalid');
    }



    if (!formData.agreeTerms) {
      newErrors.agreeTerms = t('applicationModal.termsRequired');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {

        const scriptURL = API_CONFIG.GOOGLE_SCRIPT_URL;
        
        if (API_CONFIG.IS_DEVELOPMENT) {
          console.log('Development mode - Form data:', formData);
          console.log('Google Script URL:', scriptURL);
          
          if (!validateGoogleScriptURL(scriptURL)) {
            console.warn('⚠️ Google Apps Script URL henüz ayarlanmamış!');
            console.log('📋 Kurulum talimatları için: src/config/apiConfig.js dosyasına bakın');
          }
        }
        
        const response = await fetch(scriptURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          mode: 'no-cors'
        });

        alert(t('applicationModal.success'));
        console.log('Form submitted to Google Sheets:', formData);
        
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          instagram: '',
          twitter: '',
          reddit: '',
          agreeTerms: false
        });
        onClose();
        
      } catch (error) {
        console.error('Form submission error:', error);
        alert(t('applicationModal.error'));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{t('applicationModal.title')}</h2>
          <button className="modal-close" onClick={onClose} aria-label={t('applicationModal.close')}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">{t('applicationModal.firstName')}</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`form-input ${errors.firstName ? 'error' : ''}`}
              placeholder={t('applicationModal.firstName')}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">{t('applicationModal.lastName')}</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`form-input ${errors.lastName ? 'error' : ''}`}
              placeholder={t('applicationModal.lastName')}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">{t('applicationModal.phone')}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`form-input ${errors.phone ? 'error' : ''}`}
              placeholder={t('applicationModal.phone')}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">{t('applicationModal.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder={t('applicationModal.email')}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="instagram" className="form-label">{t('applicationModal.instagram')}</label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              value={formData.instagram}
              onChange={handleInputChange}
              className={`form-input ${errors.instagram ? 'error' : ''}`}
              placeholder="Instagram username"
            />
            {errors.instagram && <span className="error-message">{errors.instagram}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="twitter" className="form-label">{t('applicationModal.twitter')}</label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData.twitter}
              onChange={handleInputChange}
              className={`form-input ${errors.twitter ? 'error' : ''}`}
              placeholder={t('applicationModal.twitter')}
            />
            {errors.twitter && <span className="error-message">{errors.twitter}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="reddit" className="form-label">{t('applicationModal.reddit')}</label>
            <input
              type="text"
              id="reddit"
              name="reddit"
              value={formData.reddit}
              onChange={handleInputChange}
              className={`form-input ${errors.reddit ? 'error' : ''}`}
              placeholder={t('applicationModal.reddit')}
            />
            {errors.reddit && <span className="error-message">{errors.reddit}</span>}
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="checkbox-input"
              />
              <span className="checkbox-custom"></span>
              <span className="checkbox-text">
                {t('applicationModal.agreeTerms')}
                <a href="#privacy" className="privacy-link">{t('applicationModal.privacyPolicy')}</a>
                )
              </span>
            </label>
            {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
          </div>

          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                {t('applicationModal.submitting')}
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i>
                {t('applicationModal.submit')}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal; 