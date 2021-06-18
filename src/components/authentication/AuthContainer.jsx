import axios from "axios";
import { sendDataActionCreator, setIdActionCreator } from "../../redux/auth-reducer";

const { connect } = require("react-redux");
const { Auth } = require("./Auth");

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendData: ((data) => {
            axios.post('http://localhost:8080/api/auth', { data })
                .then(response => {
                    dispatch(setIdActionCreator({
                        login: data.login,
                        password: data.password,
                        //userId: response.id
                    }))
                    dispatch(sendDataActionCreator(data));
                })
    })
    }
}

export const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth)