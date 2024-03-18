import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/PostDetails.scss";

const PostDetails = ({ posts, fetchData }) => {
  const { postId } = useParams();
  console.log(postId);

  const post = posts.find((post) => post.id.toString() === postId);
  if (!post) {

    return <p>Пост не найден</p>;
  }

  const apiUrl = "https://64a177210079ce56e2db1781.mockapi.io/picasso";
  const objectIdToDelete = post.id;

  const deletePost = () => {
    axios
      .delete(`${apiUrl}/${objectIdToDelete}`)
      .then((response) => {
        console.log("Объект успешно удален:", response.data);
      })
      .catch((error) => {
        console.error("Ошибка удаления объекта:", error);
      });
    fetchData();
  };

  return (
    <div className="post_details">
      <h1>{post.title}</h1>
      <div className="post_box">
        <p>{post.description}</p>
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
          <Link to={"/"}>
            <button onClick={deletePost}>delete</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
