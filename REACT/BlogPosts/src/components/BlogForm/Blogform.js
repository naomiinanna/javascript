import { useState } from "react";
import "./Blogform.css";

function Blogform(props) {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [blogtext, setBlogtext] = useState('');

    const POST = {id, author, title, blogtext};

    const onSubmit = e => {
        e.preventDefault();
        setId();
        props.addPost(POST);
        //eingabe leeren
    }

    return (
        <form className="blogform" onSubmit={onSubmit}>
            <input type="text" placeholder="Author" onInput={e => setAuthor(e.target.value)}></input>
            <input type="text" placeholder="Title" onInput={e => setTitle(e.target.value.toUpperCase())}></input>
            <textarea id="textarea" type="text" placeholder="Add text..." onInput={e => setBlogtext(e.target.value)}></textarea>
            <input type="submit" value="Post"></input>
        </form>
    );
}

export default Blogform;