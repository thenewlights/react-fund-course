import React, { useState } from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: 'Description' },
    { id: 2, title: "Javascript 2", body: 'Description' },
    { id: 3, title: "Javascript 3", body: 'Description' },
  ])
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} posts={posts} title={'Посты про JS'} />
    </div>
  );
}

export default App;
