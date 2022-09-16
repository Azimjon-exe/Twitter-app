import React from "react";
import PostListItem from "../PostListItem";
import "./PostList.css";

const PostList = ({ posts, onDelete }) => {
  return (
    <ul className="app-list list-group-item">
      {posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <PostListItem key={id} {...itemProps} onDelete={() => onDelete(id)} />
        );
      })}
    </ul>
  );
};

export default PostList;
