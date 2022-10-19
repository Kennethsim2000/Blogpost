import "./post.css";
import Blog from "../assets/Blog.jpg";


const Post = ({post}) => {
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
