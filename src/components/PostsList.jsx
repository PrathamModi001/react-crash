/* eslint-disable no-unused-vars */
import classes from './PostsList.module.css';

import { useEffect, useState } from 'react';
import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = (props) => {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    // when we want some change in data that is not ui related and might need in future
    // for example GET req to server, we use useEffect
    useEffect(() => {
        async function fetchPosts() {
            setIsFetching(true);
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            setPosts(data.posts);
            setIsFetching(false);
        }
        fetchPosts();
        // dont need any dependency, so empty array
    }, [])

    function addPostsHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        })

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

            {!isFetching && posts.length === 0 && <p>No posts yet. Start the conversation!</p>}

            {!isFetching && posts.length > 0 && <ul className={classes.posts}>
                {posts.map((post) => (
                    <Post key={post.id} body={post.body} author={post.author} />
                ))}
            </ul>}
            {isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading...</p>
                </div>
            )}
        </div>
    );
};


export default PostsList; // Ensure correct export
