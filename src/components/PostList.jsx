import React from "react";

import { Link } from "react-router-dom";
import '../styles/PostList.scss'

const PostList = ({ posts, fetchData }) => {



  if (!posts || posts.length === 0) {
    return <p>Нет данных о постах</p>;
  }


  return (
    <div className="postlist">
      <h1>Список постов</h1>
      <ul>
        {posts.map((e) => (
          <li key={e.id}>
            <strong>{e.title}</strong>
            <p>{e.body.substring(0, 20)}...</p>
            <Link to={`/post/${e.id}`}>
              <button>просмотр</button>
            </Link>
          </li>
        ))}
      </ul>
  
    </div>
  );
};

export default PostList;
