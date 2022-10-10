import React, { Fragment, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

/*EditTodo is rendered in the ListTodo class */
const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Button variant="warning" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body><input type="text" className="form-control"/></Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" onClick={handleClose}>
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