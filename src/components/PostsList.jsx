/* eslint-disable no-unused-vars */
import classes from './PostsList.module.css';

import { useState } from 'react';
import React from 'react';
import Post from './Post';
import NewPost from './NewPost';

const PostsList = () => {
    const [body, setBodyChange] = useState('React.js is so awesome');
    const [author, setAuthorChange] = useState('Patel');

    const bodyChangeHandler = (event) => {
        setBodyChange(event.target.value);
    }
    const authorChangeHandler = (event) => {
        setAuthorChange(event.target.value);
    }

    return (
        <div>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
            <ul className={classes.posts}>
                <Post name={author} content={body}/>
                <Post name="Patel" content="No no Next.js is awesome"/>
            </ul>
        </div>
    );
};

export default PostsList; // Ensure correct export
