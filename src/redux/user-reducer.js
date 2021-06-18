const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let usersPage = {
    users : [
        
    ],

    usersNumber:0
}

const usersReducer = (state = usersPage, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {...state, users:state.users.map((user) => user.id === action.id ? {...user, followed:true} : user)}
        }
        case UNFOLLOW: {
            return {...state, users:state.users.map((user) => user.id === action.id ? {...user, followed:false} : user)}
        }
        case SETUSERS: {
            return {...state, users:action.users, usersNumber:action.users.lenght}
        }
        default:return state;
    }
}

export const followActionCreator = (props) => {
    return {
        type:FOLLOW,
        id:props
    }
}

export const unfollowActionCreator = (props) => {
    return {
        type:UNFOLLOW,
        id:props
    }
}

export const setUsersActionCreator = (props) => {
    return {
        type:SETUSERS,
        users:props
    }
}

export default usersReducer;