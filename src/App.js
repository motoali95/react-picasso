import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PostList from './components/PostList'
import PostDetails from "./components/PostDetails";
import Header from "./components/Header";

import './styles/App.scss'
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      setPosts(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PostList posts={posts} fetchData={fetchData} />} />
        <Route path="/post/:postId" element={<PostDetails posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
