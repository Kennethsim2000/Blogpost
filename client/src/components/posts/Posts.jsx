import "./posts.css"
import Post from "./Post";
import React, { Fragment, useEffect, useState } from "react";


const Posts = () => {
    /*Posts has a posts state, using setPosts to set it */
    const [posts, setPosts] = useState([]);

    /*This retrieves from the database and sets the currentState*/
    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setPosts(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    /*Delete posts that is given to the child component(post) */
    const deletePosts = async id => {
        try{
            const deletePost = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setPosts(posts.filter(todo => todo.todo_id !== id))
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(()=> { 
        getPosts();
    }, []);

    return (
    <div className="posts">
        {posts.map(post => (
            <div>
                <Post post = {post} deletePosts = {deletePosts}/> 
            </div>
        ))}
    </div>
    )
}

export default Posts
