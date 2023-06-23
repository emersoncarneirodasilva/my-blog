import React from "react";
import { Link } from "react-router-dom";

//CSS
import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdby}>{post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => {
          console.log(tag);
          return (
            <p key={tag}>
              <span>#</span>
              {tag}
            </p>
          );
        })}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
