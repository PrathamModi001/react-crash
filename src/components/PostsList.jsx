/* eslint-disable no-unused-vars */
import classes from './PostsList.module.css';

import { useState } from 'react';
import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = (props) => {
    const [posts, setPosts] = useState([]);

    function addPostsHandler(postData) {
        setPosts((prevPosts) => {
            return [postData, ...prevPosts];
        });
    }

    return (
        <div>
            {props.isPosting && (
                <Modal onClose={props.onStopPosting}>
                    <NewPost onCancel={props.onStopPosting} onAddPost={addPostsHandler} />
                </Modal>
            )}
            {posts.length === 0 && <p>No posts yet. Start the conversation!</p>}
            {posts.length > 0 && <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post key={post.id} body={post.body} author={post.author} />
                ))}
            </ul>}
        </div>
    );
};


export default PostsList; // Ensure correct export
