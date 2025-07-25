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
import ModelDetailModal from '../ModelDetailModal/ModelDetailModal';
import './ModelsSection.css';

const ModelsSection = () => {
  const { t } = useLanguage();
  const [selectedModel, setSelectedModel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const models = t('models');

  const handleModelClick = (model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModel(null);
  };

  return (
    <section id="models" className="models-section">
      <div className="container">
        <div className="models-content">
          <h2 className="models-heading">
            {t('modelsSection.heading')}
          </h2>
          
          <p className="models-description">
            {t('modelsSection.description')}
          </p>

          <div className="models-grid">
            {models.map((model, index) => (
              <div 
                key={index} 
                className="model-card clickable"
                onClick={() => handleModelClick(model)}
              >
                <div className="model-image-wrapper">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="model-image"
                    loading="lazy"
                  />
                  <div className="model-overlay">
                    <div className="model-info">
                      <h3 className="model-name">{model.name}</h3>
                      <p className="model-description">{model.description}</p>
                      <div className="click-hint">
                        <i className="fas fa-eye"></i>
                        <span>{t('modelsSection.clickHint')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ModelDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        modelData={selectedModel}
      />
    </section>
  );
};

export default ModelsSection; 