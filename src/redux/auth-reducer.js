import axios from "axios";

const SEND_DATA = 'SEND_DATA'
const SET_ID = 'SET_ID'

export const sendDataActionCreator = (data) => {
    return {
        type: SEND_DATA,
        login: data.login,
        password: data.password
    };
}

export const setIdActionCreator = (data) => {
    return {
        type: SET_ID,
        login: data.login,
        password: data.password,
        //userId: data.userId
    }
}

let initialState = {
    isAuth: true,
    login: null,
    userId: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case (SEND_DATA):
        case (SET_ID):
            //state.isAuth:true
        default:
            return state;
    }
}