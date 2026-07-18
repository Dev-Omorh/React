import Post from "./Post";

function PostList() {
  return (
    <>
      <ul>
        <Post author="Emmanuel" body="You can get it back from us" />
        <Post author="Maxilian" body="Check out the full course" />
      </ul>
    </>
  );
}

export default PostList;
