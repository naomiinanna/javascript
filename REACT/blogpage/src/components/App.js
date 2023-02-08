import './App.css';
import { useEffect, useState } from "react";
import Blogform from './BlogForm/Blogform';
import Blogposts from './Blogposts/Blogposts';
import Athentification from './Authentification/Authentification';
import Colortheme from './Colortheme/Colortheme';

function App() {

  const [containerClassName, setContainerClassName] = useState(() => {
    const containerClassName = JSON.parse(localStorage.getItem('containerClassName'));
    return containerClassName;
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    if (!isLoggedIn) {
      return false;
    }
    return isLoggedIn;
  });

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

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  }, [isLoggedIn]
  );

  useEffect(() => {
    localStorage.setItem('containerClassName', JSON.stringify(containerClassName));
  }, [containerClassName]
  );

  function editPost(editedPost, newAuthor, newTitle, newText) {
    const editedPostList = posts.map((post, i) => {
      if (posts.indexOf(editedPost) == i) {
        return { ...post, author: newAuthor, title: newTitle, blogtext: newText }
      }
      return post;
    });
    setPosts(editedPostList);
  }




//container colortheme--dark
  return (
    <div className={containerClassName}>
      <header className="App-header">
        <h1>WELCOME TO MY BLOG</h1>
        <Colortheme containerClassName={containerClassName} setContainerClassName={setContainerClassName}/>
      </header>
      <div className='wrapper'>
        <Athentification isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div className='wrapper'>
        <Blogposts posts={posts} isLoggedIn={isLoggedIn} editPost={editPost} />
      </div>
      <div className='post__wrapper'>
        <Blogform addPost={post => setPosts([...posts, post])} isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}

export default App;
