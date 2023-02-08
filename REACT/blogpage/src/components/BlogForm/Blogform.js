import { useState } from "react";
import "./Blogform.css";

function Blogform(props) {
    let post = {author: "", title: "", blogtext: ""};
    if(props.post) {
        post = props.post;
    }
    const [title, setTitle] = useState(post.title);
    const [author, setAuthor] = useState(post.author);
    const [blogtext, setBlogtext] = useState(post.blogtext);

    const onSubmit = e => {
        e.preventDefault();
        if(props.isEditing) {
            props.editPost(post, author, title, blogtext);
            props.setIsEditing(false);
        }else{
            props.addPost({title: title, author: author, blogtext: blogtext});
        }
        setTitle("");
        setAuthor("");
        setBlogtext("");
    }



    return (
        <>
            {
                props.isLoggedIn ?

                    <form className="blogform" onSubmit={onSubmit}>
                        <input type="text" onInput={e => setAuthor(e.target.value)} value={author} placeholder="Author"></input>
                        <input type="text" onInput={e => setTitle(e.target.value.toUpperCase())} value={title} placeholder="Title" ></input>
                        <textarea id="textarea" onInput={e => setBlogtext(e.target.value)} value={blogtext} type="text" placeholder="Add text..." ></textarea>

                        {props.isEditing ?
                            <input type="submit" value="Save"></input>
                            :
                            <input type="submit" value="Post"></input>
                        }
                    </form>
                    : ""
            }
        </>
    );
}

export default Blogform;