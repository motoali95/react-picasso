import React, { useState } from "react";
import Modal from "./AddPostModal";

import { Link } from "react-router-dom";
import axios from "axios";
import '../styles/PostList.scss'

const PostList = ({ posts, fetchData }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [inputPostName, setInputPostName] = useState("");
  const [inputPostDescription, setInputPostDescription] = useState("");
  const [inputPostdate, setInputPostDate] = useState("");
  // const [inputPostId, setInputPostId] = useState();

  const postNameInputChange = (event) => {
    setInputPostName(event.target.value);
  };
  const postDescriptionInputChange = (event) => {
    setInputPostDescription(event.target.value);
  };
  const postDateInputChange = (event) => {
    setInputPostDate(event.target.value);
  };

  // inputPostId = setInputPostId(inputPostId + 1);
  // console.log(inputPostId);

  if (!posts || posts.length === 0) {
    return <p>Нет данных о постах</p>;
  }

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setInputPostName("");
    setInputPostDescription("");
    setInputPostDate("");
  };

  const apiUrl = "https://64a177210079ce56e2db1781.mockapi.io/picasso";

  const postForm = {
    title: inputPostName,
    description: inputPostDescription,
    date: inputPostdate,
  };

  const pushData = () => {
    axios
      .post(apiUrl, postForm)
      .then((response) => {
        console.log("Ответ от сервера:", response.data);
        
      })
      .catch((error) => {
        console.error("Ошибка отправки запроса:", error);
      });
    closeModal();
    fetchData();
  };

  return (
    <div className="postlist">
      <h1>Список постов</h1>
      <ul>
        {posts.map((e) => (
          <li key={e.id}>
            <strong>{e.title}</strong>
            <p>{e.description.substring(0, 20)}...</p>
            <Link to={`/post/${e.id}`}>
              <button>просмотр</button>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => openModal()}>добавить пост</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>добавление нового поста</h1>
        <form action="" method="post">
          
            
            <input
              value={inputPostName}
              onChange={postNameInputChange}
              placeholder="Название поста:"
              type="text"
            />
          
            
            {/* <input
            id="description"
              value={inputPostDescription}
              onChange={postDescriptionInputChange}
              placeholder="Описание поста:"
              type="text"
            /> */}
            <textarea value={inputPostDescription}
              onChange={postDescriptionInputChange}
              placeholder="Описание поста:"
              type="text" name="description" id="description" cols="10" rows="10"></textarea>
          
            
            <input
              value={inputPostdate}
              onChange={postDateInputChange}
              placeholder="Дата добавления:"
              type="text"
            />
          
        </form>
        <div className="buttons">
        <button onClick={() => pushData()}>добавить</button>
        <button onClick={() => closeModal()}>закрыть</button>
        </div>
      </Modal>
    </div>
  );
};

export default PostList;
