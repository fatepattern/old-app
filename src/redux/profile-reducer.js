import axios from "axios";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SETPOSTS = 'SETPOSTS'
const ADD_LIKES = 'ADD_LIKES'

export const addPostActionCreator = (id) => {
    return {type: ADD_POST, id: id};
}

export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text};
}

export const setPostsActionCreator = (posts) => {
    return {type: SETPOSTS, posts: posts};
}

export const addLikesActionCreator = (id) => {
    return {type: ADD_LIKES, id: id.id}
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
            let a = [];
            for (let i = 0; i < state.posts.length; i++) {
                a.push(state.posts[i])
            }
            stateCopy2.posts = a;
            //let newLikes = 0;
            stateCopy2.posts[action.id] = {id: action.id, message: stateCopy2.posts[action.id].message, countLikes: stateCopy2.posts[action.id].countLikes + 1};
            //stateCopy2.posts[action.id].countLikes = newLikes;
            axios.post('http://localhost:8080/api/addLike', {like:{id:action.id, countLikes: stateCopy2.posts[action.id].countLikes}});
            return stateCopy2;
        default:
            return state;
    }
}