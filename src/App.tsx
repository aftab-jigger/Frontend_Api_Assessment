import { useState } from "react";
import "./App.css";
import PostList from "./components/posts/PostList";
import PostForm from "./components/posts/PostForm";

const App = () => {
  const [showPostCreateForm, setShowPostCreateForm] = useState(false);

  const handleFormShow = () => {
    setShowPostCreateForm((prevState) => !prevState);
  };

  return (
    <div className="container mt-5">
      {showPostCreateForm ? (
        <PostForm onClick={handleFormShow} />
      ) : (
        <PostList onClick={handleFormShow} />
      )}
    </div>
  );
};

export default App;
