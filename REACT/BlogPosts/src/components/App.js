import './App.css';
import { useEffect, useState } from "react";
import Blogform from './BlogForm/Blogform';
import Blogposts from './Blogposts/Blogposts';
import Athentification from './Authentification/Authentification';

function App() {

  const [isEditing, setEditing] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);

  const [posts, setPosts] = useState(() => {
    const posts = JSON.parse(localStorage.getItem('posts'));
    if (!posts) {
      return [];
    }
    if (posts.length) {
      return posts;
    }
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  },
    [posts]
  );

  function editPost(id, newAuthor, newTitle, newText) {
    const editedPostList = posts.map((post) => {
      if(id == post.id) {
        return {... post, athor: newAuthor, title: newTitle, blogtext: newText}
      }
      return post;
    });
    setPosts(editedPostList);
  }

  return (
    <div className="container">
      <header className="App-header">
        <h1>WELCOME TO MY BLOG</h1>
      </header>
      <div className='wrapper'>
        <Athentification isLoggedIn={loginStatus => setLoginStatus(true)}/>
      </div>
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
