import React from "react";
import PostListItem from "../PostListItem";
import "./PostList.css";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLike }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <PostListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLike={() => onToggleLike(id)}
        />
      </li>
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
