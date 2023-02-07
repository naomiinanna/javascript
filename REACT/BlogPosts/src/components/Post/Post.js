//import './Post.css';

function Post(props) {
    return (
        <>
            <p className="author">{props.author}</p>
            <h1 className="title">{props.title}</h1>
            <p className="blogtext">{props.blogtext}</p>
        </>
    );
}

export default Post;