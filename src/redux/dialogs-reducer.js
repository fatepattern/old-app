const CHANGEACTIVEUSER = 'CHANGEACTIVEUSER'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

export const changeActiveUserActionCreator = (idProp) => {
    return {type:CHANGEACTIVEUSER, id:idProp}
}

export const addNewMessageActionCreator = (message) => {
    return ({type:ADD_NEW_MESSAGE, text:message.text, id:message.id});
}

let initialState = {
    dialogs : [
        {id:0, name:'Dima'},
        {id:1, name:'Oleg'}
    ],

    messagesList : [
        [
            {id:0, message:'heey'},
            {id:1, message:'im Dima btw'}
        ],
        [
            {id:0, message:'Heey'},
            {id:1, message:'Im Oleg'}
        ]
    ],

    activeUser:-1
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGEACTIVEUSER : 
            let stateCopyUser = {...state};
            stateCopyUser.activeUser = action.id;
            return stateCopyUser;
        case ADD_NEW_MESSAGE : 
            let a = action.id;
            a = a === -1 ? 0 : a;
            let stateCopy = {...state};
            stateCopy.messagesList = [...state.messagesList];
            stateCopy.messagesList[a].push({id:2, message:action.text});
            return stateCopy;
        default :
            return state;
    } 
}