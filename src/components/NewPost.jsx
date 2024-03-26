/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './NewPost.module.css';

function NewPost({ onCancel , onAddPost }) {

    const [body, setBodyChange] = useState('React.js is so awesome');
    const [author, setAuthorChange] = useState('Patel');

    const bodyChangeHandler = (event) => {
        setBodyChange(event.target.value);
    }
    const authorChangeHandler = (event) => {
        setAuthorChange(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const postData = {
            id: uuidv4(), // Generate a unique identifier
            body: body,
            author: author,
        };
        console.log(postData);
        onAddPost(postData)
        // call onCancel so that the modal will close
        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="body">Text</label>
                {/* set up event listener by doing onChange and getting its value by doing */}
                {/* event.target.value */}
                <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={authorChangeHandler} />
            </p>
            <p className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Add Post</button>
            </p>
        </form>
    );
}

export default NewPost;