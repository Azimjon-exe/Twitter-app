import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLike,
      important,
      like,
    } = this.props;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <div className={classNames}>
        <span className="app-list-item-label">{label}</span>
        <div className="d-flex justify-content-center align-items center">
          <button
            type="button"
            className="btn-star btn btn-secondary text-light m-3 btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button
            onClick={onDelete}
            type="button"
            className="btn-trash btn btn-danger m-3 btn-sm"
          >
            <i className="fa fa-trash"></i>
          </button>
          <i onClick={onToggleLike} className="fa fa-heart m-3"></i>
        </div>
      </div>
    );
  }
}
