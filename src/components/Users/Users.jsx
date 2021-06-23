import axios from 'axios';
import React from 'react'
import s from './Users.module.css'

class Users extends React.Component {
    getUsers() {
        if (this.props.users.length === 0)
        axios.get('http://localhost:8080/api/getUsers')
        .then(response => {
            this.props.setUsers(response.data.users)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers.bind(this)}>Get Users</button>
                {
                    this.props.users.map((user) => (<div>
                        <snap className={s.users}><img src='https://ichef.bbci.co.uk/news/640/cpsprodpb/15C06/production/_109449098_catsstaring.jpg' alt={''}/></snap>
                        <snap>{user.name + ' ' + user.status + ' ' + user.location.country + ' ' + user.location.city}</snap>
                        <div>
                            {
                                user.followed ? (<button onClick={() => this.props.unfollow(user.id)}>UNFOLLOW</button>) :
                                (<button onClick={() => this.props.follow(user.id)}>FOLLOW</button>)
                            }
                        </div>
                        </div>))
                }
            </div>
        )
    }
}

export default Users;