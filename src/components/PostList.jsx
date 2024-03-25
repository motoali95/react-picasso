import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import "../styles/PostList.scss";
import axios from "axios";

const PostList = ({ fetchData }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      setPosts([...posts, ...response.data]);
      setPage(page + 1);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div className="postlist">
      <h1>Список постов</h1>
      <InfiniteScroll
        dataLength={posts.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Загрузка...</h4>}
      >
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body.substring(0, 20)}...</p>
              <Link to={`/post/${post.id}`}>
                <button>просмотр</button>
              </Link>
            </li>
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
};

export default PostList;
