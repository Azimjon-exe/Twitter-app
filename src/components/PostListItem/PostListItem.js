import React from "react";
import "./PostListItem.css";

export default class PostListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false,
    };
    this.onImportant = this.onImportant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImportant() {
    this.setState(({ important }) => ({ important: !important }));
  }
  onLike() {
    this.setState(({ like }) => ({ like: !like }));
  }
  render() {
    const { label, onDelete } = this.props;
    const { important, like } = this.state;
    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }
    if (like) {
      classNames += " like";
    }
    return (
      <li className={classNames}>
        <span className="app-list-item-label">{label}</span>
        <div className="d-flex justify-content-center align-items center">
          <button
            type="button"
            className="btn-star btn btn-secondary text-light m-3 btn-sm"
            onClick={this.onImportant}
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
          <i onClick={this.onLike} className="fa fa-heart m-3"></i>
        </div>
      </li>
    );
  }
}
