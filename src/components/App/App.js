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
        {
          label: "Going to Learn React JS",
          important: true,
          like: true,
          id: 1,
        },
        {
          label: "Lets  gooo guys!!!!!!",
          important: false,
          like: false,
          id: 2,
        },
        {
          label: "Hammaga salom Nima gaplar",
          important: false,
          like: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };

    this.maxL = 4;
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
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
  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      like: false,
      id: this.maxL++,
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return { data: newArr };
    });
  }

  onToggleImportant(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, important: !oldItem.important };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }

  onToggleLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, like: !oldItem.like };

      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }

  searchPost(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term) > -1;
    });
  }
  onUpdateSearch(term) {
    this.setState({ term });
  }

  onFilterSelect(filter) {
    this.setState({ filter });
  }

  filterPost(items, filter) {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  }
  render() {
    const { data, term, filter } = this.state;
    const liked = this.state.data.filter((item) => item.like).length;
    const visibelePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <div className="app">
        <AppHeader postL={this.state.data.length} liked={liked} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <Postfilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <PostList
          posts={visibelePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm addItem={this.addItem} />
      </div>
    );
  }
}
