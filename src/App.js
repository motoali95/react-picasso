import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PostList from './components/PostList'
import PostDetails from "./components/PostDetails";
import Header from "./components/Header";

import './styles/App.scss'
import axios from "axios";


const App = () => {
  const [posts, setPosts] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://64a177210079ce56e2db1781.mockapi.io/picasso"
  //     );
  //     const data = await response.json();
  //     setPosts(data);
  //     // console.log(data);
  //   } catch (error) {
  //     console.error("Ошибка загрузки данных:", error);
  //   }
  // };


  const fetchData = () =>{
        axios
      .get(
        `https://64a177210079ce56e2db1781.mockapi.io/picasso`
      )
      .then((res) => {
        setPosts(res.data);
      });
  };



  useEffect(() => {

    fetchData();
  },[]);
  // console.log(posts);

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<PostList posts={posts} fetchData={fetchData} />} />
        <Route path="/post/:postId" element={<PostDetails posts={posts} fetchData={fetchData} />} />
      </Routes>
    </BrowserRouter>
   
  );
};

export default App;
