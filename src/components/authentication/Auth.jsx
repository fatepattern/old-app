import React from 'react'

export const Auth = (props) => {
    let login = React.createRef();

    let password = React.createRef();

    let sendData = () => {
        props.sendData({
            login:login.current.value,
            password:password.current.value
        })
    }

    return (
        <div>
            <div>
         <label>Login</label>
         </div>
            <div>
            <textarea ref={login}></textarea>
            </div>
            <div>
            <label>Password</label>
            </div>
            <div>
            <textarea ref={password}></textarea>
            </div>
            <div>
            <button onClick={sendData}>Login</button>
            </div>
        </div>
    )
}