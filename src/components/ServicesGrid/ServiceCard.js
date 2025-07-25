/**
 * Copyright 2025 aendirr
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */


import React, { useRef, useState, useEffect } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ item, onServiceClick }) => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleCardClick = (e) => {
    e.preventDefault();
    if (onServiceClick) {
      onServiceClick(item);
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleTouchStart = () => {
    setIsHovering(true);
  };

  // Video otomatik olarak oynatılsın
  useEffect(() => {
    if (videoRef.current && item.videoUrl) {
      videoRef.current.play().catch(e => console.log('Video play error:', e));
    }
  }, [item.videoUrl]);

  const handleTouchEnd = () => {
    // Touch event'lerini kaldırıyoruz, video sürekli oynayacak
  };



  return (
    <div 
      className={`service-card clickable ${item.videoUrl ? 'has-video' : ''} ${isHovering ? 'video-playing' : ''}`}
      onClick={handleCardClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick(e);
        }
      }}
    >

      {item.videoUrl && (
        <div className="service-card-video">
          <video
            ref={videoRef}
            className="background-video"
            muted
            loop
            autoPlay
            preload="auto"
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="false"
          >
            <source src={item.videoUrl} type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
      )}


      <div className="service-card-content">
        <div className="service-icon">
          {item.icon}
        </div>
        
        <h3 className="service-title">
          {item.title}
        </h3>
        
        <p className="service-description">
          {item.description}
        </p>

        <div className="service-click-hint">
          <i className="fas fa-info-circle"></i>
          <span>Detayları Görüntüle</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 