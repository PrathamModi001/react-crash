/* eslint-disable no-unused-vars */
import classes from './PostsList.module.css';

import { useState } from 'react';
import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = () => {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [body, setBodyChange] = useState('React.js is so awesome');
    const [author, setAuthorChange] = useState('Patel');

    const bodyChangeHandler = (event) => {
        setBodyChange(event.target.value);
    }
    const authorChangeHandler = (event) => {
        setAuthorChange(event.target.value);
    }
    
    const hideModalHandler = () => {
        setModalIsVisible(false);
    }

    return (
        <div>
            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post name={author} content={body} />
                <Post name="Patel" content="No no Next.js is awesome" />
            </ul>
        </div>
    );
    
};

export default PostsList; // Ensure correct export
