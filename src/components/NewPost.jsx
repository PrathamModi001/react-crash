/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import classes from './NewPost.module.css';

function NewPost(props) {

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                {/* set up event listener by doing onChange and getting its value by doing */}
                {/* event.target.value */}
                <textarea id="body" required rows={3} onChange={props.onBodyChange} />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required onChange={props.onAuthorChange}/>
            </p>
        </form>
    );
}

export default NewPost;