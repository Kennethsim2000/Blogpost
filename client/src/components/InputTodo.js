import React, { Fragment, useState } from "react";

/*Contains input textbox. */
const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try{
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            window.location = "/"; //once response is sent, window refreshes and shows changes
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type = "text" 
                    className = "form-control"
                    value={description}
                    onChange={e=> setDescription(e.target.value)}
                />
                <button className="btn btn-success">Publish</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;