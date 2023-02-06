import { useState } from "react";
import "./Blogform.css"

function Blogform(props) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [blogtext, setBlogtext] = useState('');

    const POST = {author, title, blogtext};

    const onSubmit = e => {
        e.preventDefault();
        props.addPost(POST);
        console.log(POST)
    }

    return (
        <form className="blogform" onSubmit={onSubmit}>
            <input type="text" placeholder="Author" onInput={e => setAuthor(e.target.value)}></input>
            <input type="text" placeholder="Title" onInput={e => setTitle(e.target.value)}></input>
            <input id="textarea" type="text" placeholder="Add text..." onInput={e => setBlogtext(e.target.value)}></input>
            <input type="submit" value="Post"></input>
        </form>
    );
}

export default Blogform;