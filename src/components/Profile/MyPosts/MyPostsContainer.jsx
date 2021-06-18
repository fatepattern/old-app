import { connect } from "react-redux";
import {
  addPostActionCreator,
  setPostsActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts.jsx";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const updateNewPostText = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  };

  const setPosts = (posts) => {
    dispatch(setPostsActionCreator(posts));
  };

  return {
    addPost: addPost,
    updateNewPostText: updateNewPostText,
    setPosts: setPosts,
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
