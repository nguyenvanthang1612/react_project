import React from 'react';
import { Carousel } from 'antd';
import '../assets/styles/HomePage.css'; // File CSS để tùy chỉnh style cho carousel

const BannerCarousel = () => {
  return (
    <Carousel autoplay>
      <div className="carousel-slide">
        <img src={require('../assets/images/cover.png')} alt="Banner 1" />
      </div>
      <div className="carousel-slide">
        <img src={require('../assets/images/cover.png')} alt="Banner 2" />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;