import "./posts.css"
import Post from "./Post";
import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "../EditTodo";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    /*This */
    const getPosts = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json()
            setPosts(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

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
                <Post post={post}/> 
                <div className="buttonPost">
                    <EditTodo todo={post}/> 
                    <button className="btn btn-danger" onClick={()=>deletePosts(post.todo_id)}>
                            Delete
                    </button>
                </div>
        
            </div>
        ))}
    </div>
    )
}

export default Posts
