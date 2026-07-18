import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <>
      <form className={classes.form}>
        <p>
          <label htmlFor="">Text</label>
          <textarea
            name="name"
            id="body"
            required
            rows={3}
            onChange={props.onBodyChange}
          />
        </p>

        <p>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            id="name"
            required
            onChange={props.onAuthorChange}
          />
        </p>
      </form>
    </>
  );
}

export default NewPost;
