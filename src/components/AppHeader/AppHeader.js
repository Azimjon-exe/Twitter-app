import React from "react";
import "./AppHeader.css";

const AppHeader = ({ postL, liked }) => {
  return (
    <div className="app-header d-flex">
      <h1>Azimjon Akbarjonov</h1>
      <h2>
        {postL} posts, Like {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
