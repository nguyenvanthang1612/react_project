import React from 'react';
import { Layout, Menu, Input } from 'antd';
import '../assets/styles/Header.css'; // Bạn có thể sử dụng file CSS này để tùy chỉnh style

const { Header } = Layout;
const { Search } = Input;

const AppHeader = () => {
  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: 1 }}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Blog</Menu.Item>
      </Menu>
      <Search
        placeholder="Search..."
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </Header>
  );
};

export default AppHeader;
