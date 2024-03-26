/* eslint-disable no-unused-vars */
import classes from './PostsList.module.css';

import { useState } from 'react';
import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = (props) => {


    return (
        <div>
            {props.isPosting && (
                <Modal onClose={props.onStopPosting}>
                    <NewPost
                        onCancel={props.onStopPosting} />
                </Modal>
            )}
            <ul className={classes.posts}>
            </ul>
        </div>
    );

};

export default PostsList; // Ensure correct export
