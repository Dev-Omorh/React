import classes from "./Post.module.css";

function Post(props) {
  return (
    <div>
      <div>
        <p className={classes.post}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
      </div>
    </div>
  );
}

export default Post;
