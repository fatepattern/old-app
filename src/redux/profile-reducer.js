import axios from "axios";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SETPOSTS = 'SETPOSTS'
const ADD_LIKES = 'ADD_LIKES'

export const addPostActionCreator = () => {
    return {type: ADD_POST};
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text};
}

export const setPostsActionCreator = (posts) => {
    return {type: SETPOSTS, posts: posts};
}

export const addLikesActionCreator = () => {
    return {type: ADD_LIKES}
}

let initialState = {
    posts: [],

    newPostText: ''
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case (ADD_POST):
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push({id: stateCopy.posts.length, message: state.newPostText, countLikes: 0});
            axios.post('http://localhost:8080/api/addPost', {posts: stateCopy.posts});
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            let stateCopy1 = {...state};
            stateCopy1.newPostText = action.newPostText;
            return stateCopy1;
        case SETPOSTS:
            return {...state, posts: action.posts};
        case ADD_LIKES:
            let stateCopy2 = {...state};
            // let id = stateCopy2.posts.id;
            let newLikes = stateCopy2.posts[0].countLikes + 1;
            stateCopy2.posts[0].countLikes = newLikes;
            axios.post('http://localhost:8080/api/addLike', {countLikes: stateCopy2.posts.countLikes});
            return stateCopy2;
        default:
            return state;
    }
}