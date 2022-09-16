import React from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import Postfilter from "../PostFilter";
import PostList from "../PostList";
import SearchPanel from "../SearchPanel";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: "Going to Learn React JS", important: true, id: "ab" },
        { label: "Lets  gooo", important: false, id: "ac" },
        { label: "Hi", important: false, id: "ad" },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
  }
  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const befor = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...befor, ...after];
      return {
        data: newArr,
      };
    });
  }
  render() {
    return (
      <div className="app">
        <AppHeader postL={this.state.data.length} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <Postfilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm />
      </div>
    );
  }
}
