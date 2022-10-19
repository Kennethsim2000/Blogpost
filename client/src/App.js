import React, { Fragment } from "react";
import './App.css';

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
import TopBar from "./components/topbar/TopBar";
import Header from "./components/header/Header.jsx";
import Posts from "./components/posts/Posts.jsx";

function App() {
  return (
    <Fragment>
      <TopBar/>
      <div className="container">
        <Header/>
        <InputTodo/>
        <Posts/>  
        {/* <ListTodos /> */}
      </div>
    </Fragment>
  );
    
  
}

export default App;
