/* eslint-disable no-unused-vars */
import classes from './PostsList.module.css';

import React from 'react';
import Post from './Post';

const PostsList = () => {
    return (
        <div>
            <ul className={classes.posts}>
                <Post name="Modi" content="React.js is awesome"/>
                <Post name="Patel" content="No no Next.js is awesome"/>
            </ul>
        </div>
    );
};

export default PostsList; // Ensure correct export
