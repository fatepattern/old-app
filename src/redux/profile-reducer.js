import axios from "axios";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SETPOSTS = 'SETPOSTS'

export const addPostActionCreator = () => {
    return { type: ADD_POST };
}

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newPostText: text };
}

export const setPostsActionCreator = (posts) => {
    return { type: SETPOSTS, posts:posts };
}

let initialState = {
    posts:[

    ],

    newPostText: ''
}

export const profileReducer = (state = initialState, action) => {
    debugger;
    
    switch (action.type) {
        case (ADD_POST):
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push({ id: 2, message: state.newPostText, countLikes: 0, countDislikes: 0 });
            axios.post('http://localhost:8080/api/addPost', { posts:stateCopy.posts })
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT:
            let stateCopy1 = { ...state };
            stateCopy1.newPostText = action.newPostText;
            return stateCopy1;
        case SETPOSTS:
            return { ...state, posts:action.posts }
        default:
            return state;
    }
}