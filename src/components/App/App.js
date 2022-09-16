import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import Postfilter from "../PostFilter";
import PostList from "../PostList";
import SearchPanel from "../SearchPanel";
import "./App.css";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <Postfilter />
      </div>
      <PostList />
      <PostAddForm />
    </div>
  );
}

export default App;
