/* eslint-disable react/prop-types */
import classes from './Post.module.css'

function Post(props) {
    return(
        <li className={classes.post}>
            <p>{props.name}</p>
            <p>{props.body}</p>
        </li>
    )
}

export default Post