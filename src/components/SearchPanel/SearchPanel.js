import React from "react";
import "./SearchPanel.css";

const SearchPanel = () => {
  return (
    <div>
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search by post"
      />
    </div>
  );
};

export default SearchPanel;
