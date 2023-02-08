import './Blogposts.css';
import Post from '../Post/Post';


function Blogposts(props) {

    function deletePost(postToDelete) {
        const newPostList = props.posts.map((post, i) => {
          if (props.posts.indexOf(postToDelete) == i) {
            props.posts.splice(i, 1);
            return newPostList;
          }
          props.setPosts(newPostList);
        });
        console.log(props.posts);

      }

    return (
        <ul className='blogposts'>
            {props.posts.map((post, i) => <li key={i}>
                <Post post={post} isLoggedIn={props.isLoggedIn} editPost={props.editPost} />
                <input type="button" onClick={e => deletePost(post)} value="DELETE"></input>
            </li>)}
        </ul>
    );
}

export default Blogposts;