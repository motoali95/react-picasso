import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PostDetails.scss";

const PostDetails = ({ posts, fetchData }) => {
  const { postId } = useParams();
  console.log(postId);

  const post = posts.find((post) => post.id.toString() === postId);
  if (!post) {

    return <p>Пост не найден</p>;
  }

  return (
    <div className="post_details">
      <h1>{post.title}</h1>
      <div className="post_box">
        <p>{post.body}</p>
        <p>
          <strong>ID:</strong> {post.id}
        </p>
        <p>
          <strong>Дата:</strong> {post.date}
        </p>
        <div className="buttons">
          <Link to={"/"}>
            <button>назад</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
