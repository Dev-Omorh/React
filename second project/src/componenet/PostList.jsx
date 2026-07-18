import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./Post.module.css";
import { useState } from "react";

function PostList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.post}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Maxilian" body="Check out the full course" />
      </ul>
    </>
  );
}

export default PostList;
