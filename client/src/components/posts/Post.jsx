import "./post.css";
import Blog from "../assets/Blog.jpg";
import EditTodo from "../EditTodo";

const Post = ({post, deletePosts}) => {


    return (
    <div className="post">
        <img
            className="postImg"
            src={Blog}
            alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
                <EditTodo todo={post}/> 
                <i class="trashIcon fa-sharp fa-solid fa-trash" onClick={()=>deletePosts(post.todo_id)}></i>
            </div>
            <span className="postTitle">Lorem Ipsum</span>
            {/* <hr /> */}
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            {post.description}
        </p>

    </div>
  );
}

export default Post
