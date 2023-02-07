import './Blogposts.css';
import Post from '../Post/Post';

function Blogposts(props) {
    return (
        <ul className='blogposts'>
            {props.posts.map((value, i) => <li key={i}>
                <Post author={value.author} title={value.title} blogtext={value.blogtext}/>
                <button type="button" onClick={() => props.setEditing(true)}>EDIT</button>
            </li>)}
        </ul>
    );
}

export default Blogposts;