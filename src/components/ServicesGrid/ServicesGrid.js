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
import ServiceCard from './ServiceCard';
import ServiceDetailModal from '../ServiceDetailModal/ServiceDetailModal';
import './ServicesGrid.css';

const ServicesGrid = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="about" className="services-grid-section">
      <div className="container">
        <div className="services-grid">
          {t('gridSection.items').map((item) => (
            <ServiceCard 
              key={item.id} 
              item={item}
              onServiceClick={handleServiceClick}
            />
          ))}
        </div>
      </div>

      <ServiceDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        serviceData={selectedService}
      />
    </section>
  );
};

export default ServicesGrid; 