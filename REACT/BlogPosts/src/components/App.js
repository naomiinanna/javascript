import './App.css';
import { useState } from "react";
import Blogform from './BlogForm/Blogform';
import Blogposts from './Blogposts/Blogposts';

function App() {

  const [posts, setPosts] = useState([]);

  return (
    <div className="container">
      <header className="App-header">
        <h1>WELCOME TO MY BLOG</h1>
      </header>
      <div className='wrapper'>
        <Blogposts posts={posts}/>
      </div>
      <div className='post__wrapper'>
        <Blogform addPost={post => setPosts([...posts, post])}
        />
      </div>
    </div>
  );
}

export default App;
