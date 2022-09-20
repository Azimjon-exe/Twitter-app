import React from "react";
import "./PostAddForm.css";

export default class PostAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.onValChange = this.onValChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onValChange(e) {
    this.setState({ text: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({ text: "" });
  }
  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What are you thinking about?"
          className="form-control new-post-label"
          onChange={this.onValChange}
          value={this.state.text}
        />
        <button type="submit" className="btn btn-outline-secondary">
          Add post
        </button>
      </form>
    );
  }
}
