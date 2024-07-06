import React from 'react';
import { Layout } from 'antd';
import AppHeader from './components/Header';
import BannerCarousel from './components/BannerCarousel';
import MostPopularPosts from './components/MostPopularPosts';
import './App.css'; // Bạn có thể sử dụng file CSS này để tùy chỉnh style

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content style={{ padding: '0 0px', marginTop: '0px' }}>
        <BannerCarousel />
        <MostPopularPosts />
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>My Blog ©2024 Created by Me</Footer>
    </Layout>
  );
}

export default App;
