/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost(props) {

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
            body: body,
            author: author,
        };
        console.log(postData);
        // call onCancel so that the modal will close
        props.onCancel();
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
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Post</button>
            </p>
        </form>
    );
}

export default NewPost;