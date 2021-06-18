import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/user-reducer";
import Users from "./Users";

const { connect } = require("react-redux");

const mapStateToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    const follow = (props) => {
        dispatch(followActionCreator(props))
    }

    const unfollow = (props) => {
        dispatch(unfollowActionCreator(props))
    }

    const setUsers = (props) => {
        dispatch(setUsersActionCreator(props))
    }

    return {
        follow:follow,
        unfollow:unfollow,
        setUsers:setUsers
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer