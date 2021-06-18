import axios from "axios";
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.jsx";

const MyPosts = (props) => {
  let posts = props.posts.map((post) => (
    <Post
      message={post.message}
      countLikes={post.countLikes}
      countDislikes={post.countDislikes}
    />
  ));

  let newPostElement = React.createRef();



  const addPost = () => {
    props.addPost();
  };

  const updateNewPostText = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  if (props.posts.length === 0) {
    axios.get("http://localhost:8080/api/setPosts").then((response) => {
      props.setPosts(response.data.posts);
    });
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={updateNewPostText}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>new post</button>
        </div>
      </div>
      <div className={s.item}>{posts}</div>
    </div>
  );
};

export default MyPosts;
