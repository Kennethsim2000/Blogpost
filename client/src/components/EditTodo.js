import React, { Fragment, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./edit.css"

/*EditTodo is rendered as the edit icon in Post */
const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setDescription(todo.description);
    setShow(true);
  }

  //edit description function

  const updateDescription = async e =>{
    e.preventDefault();
    try{
        const body = { description };
        const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(body)
        })

        window.location = "/"; //this refreshes the window after the update

    } catch(err) {
        console.error(err.message);
    }
  }
    return (
        <Fragment>
            <i className="editIcon fa-solid fa-pen-to-square" onClick={handleShow}></i>
      

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" className="form-control" value={description} 
                    onChange={e=>setDescription(e.target.value)}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={e => updateDescription(e)}>
                        Save Changes
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
                    
        </Fragment>
    );
};

export default EditTodo;