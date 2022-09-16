import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import Postfilter from "../PostFilter";
import PostList from "../PostList";
import SearchPanel from "../SearchPanel";
import "./App.css";

function App() {
  const data = [
    { label: "Going to Learn React JS", important: true, id: "ab" },
    { label: "Lets  gooo", important: false, id: "ac" },
    { label: "Hi", important: false, id: "ad" },
  ];
  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <Postfilter />
      </div>
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
}

export default App;
