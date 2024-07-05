// src/components/FeaturedPosts.js

import React from 'react';
import { Row, Col, Carousel } from 'antd';
import '../assets/styles/HomePage.css'; // File CSS để tùy chỉnh style

const posts = [
  {
    title: "Tưng Bừng Mừng Đại Lễ 30/04 – 01/05, Vulcano Tung Nhiều Deal Hấp Dẫn Không Thể Bỏ Lỡ",
    date: "18.04.2024",
    image: "/path/to/your/banner1.jpg",
    description: "Chào mừng ngày Giải phóng miền Nam thống nhất đất nước 30/4 và ngày Quốc tế Lao động 01/05, Vulcano gửi đến quý khách hàng chương trình khuyến mãi “Siêu...",
  },
  {
    title: "Top 11+ áo sơ mi nam trung niên cao cấp từ các thương hiệu nổi tiếng",
    date: "02.03.2024",
    image: "/path/to/your/banner2.jpg",
  },
  {
    title: "Shop áo sơ mi nam họa tiết đẹp, địa chỉ các showroom thời trang nam cao cấp",
    date: "27.02.2024",
    image: "/path/to/your/banner3.jpg",
  },
  {
    title: "CHÍNH SÁCH ĐỔI HÀNG MIỄN PHÍ TRONG VÒNG 90 NGÀY",
    date: "25.08.2023",
    image: "/path/to/your/banner4.jpg",
  },
];

const FeaturedPosts = () => {
  return (
    <div className="featured-posts">
      <Row gutter={16}>
        <Col span={16}>
          <h2>Bài viết nổi bật</h2>
          <Carousel autoplay>
            {posts.map((post, index) => (
              <div key={index} className="carousel-slide">
                <img src={post.image} alt={post.title} />
                <div className="carousel-content">
                  <h3>{post.title}</h3>
                  <p>{post.date}</p>
                  <p>{post.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </Col>
        <Col span={8}>
          <h2>Xem nhiều nhất</h2>
          <div className="most-viewed">
            {posts.slice(1).map((post, index) => (
              <div key={index} className="most-viewed-item">
                <img src={post.image} alt={post.title} />
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturedPosts;
