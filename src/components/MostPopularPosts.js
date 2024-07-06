import React from 'react';
import { Carousel } from 'antd';
import '../assets/styles/HomePage.css'; // Assuming this file contains necessary styles

const posts = [
  {
    author: "Hasan",
    title: "Customize your WooCommerce store with countless design",
    date: "2021-02-01",
    readTime: "10 min read",
    image: require("../assets/images/posts/posts_banner.jpg"),
  },
  {
    author: "Jowel",
    title: "With WooLentor's drag-and-drop interface for creating",
    date: "2021-01-02",
    readTime: "10 min read",
    image: require("../assets/images/posts/posts_banner.jpg"),
  },
  {
    author: "nvt",
    title: "With WooLentor's drag-and-drop interface for creating",
    date: "2021-01-02",
    readTime: "10 min read",
    image: require("../assets/images/posts/posts_banner.jpg"),
  },
  {
    author: "dannh",
    title: "With WooLentor's drag-and-drop interface for creating",
    date: "2021-01-02",
    readTime: "10 min read",
    image: require("../assets/images/posts/posts_banner.jpg"),
  },
  // Add more posts as needed
];

const MostPopularPosts = () => {
  return (
    <div className="most-popular-posts custom-padding">
      <h2>Most Popular</h2>
      <Carousel autoplay={true} slidesToShow={3} slidesToScroll={1}>
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <img src={post.image} alt={post.title} />
            <div className="post-content">
              <p>By <span className="author">{post.author}</span></p>
              <h3>{post.title}</h3>
              <p>{post.date} • {post.readTime}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MostPopularPosts;
