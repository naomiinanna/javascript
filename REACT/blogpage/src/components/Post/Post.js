import { useState }  from 'react';
import './Post.css';

import Blogform from "../BlogForm/Blogform";


function Post(props) {

    const [isEditing, setIsEditing] = useState(false);

    return (
        <>
            {
                isEditing ?

                    <Blogform post={props.post} isLoggedIn={props.isLoggedIn} setIsEditing={setIsEditing} isEditing={isEditing} editPost={props.editPost} />
                    :
                    <>
                        <p className="author">{props.post.author}</p>
                        <h1 className="title">{props.post.title}</h1>
                        <p className="blogtext">{props.post.blogtext}</p>
                        {props.isLoggedIn ?
                        <>
                            <button type="button" onClick={e => setIsEditing(true)}>EDIT</button>
                            
                        </>
                            : ""}
                    </>
            }
        </>
    );
}

export default Post;