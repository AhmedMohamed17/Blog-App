import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";
const PostDetail = () => {
  return (
    <section>
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm primary">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title ! </h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>lorem ya fnan</p>
        <p>lorem ya ahmadan</p>
        <p>lorem ya asnan</p>
        <p>gowa el div</p>
      </div>
    </section>
  );
};

export default PostDetail;
