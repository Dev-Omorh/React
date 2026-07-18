import classes from "./Post.module.css";

function Post(props) {
  return (
    <div>
      <li>
        <p className={classes.post}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </li>
    </div>
  );
}

export default Post;
