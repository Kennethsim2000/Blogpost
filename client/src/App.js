import React, { Fragment } from "react";
import './App.css';

//components
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";
import TopBar from "./components/topbar/TopBar";

function App() {
  return (
    <Fragment>
      <TopBar/>
      <div className="container">
        <InputTodo/>  
        <ListTodos />
      </div>
    </Fragment>
  );
    
  
}

export default App;
