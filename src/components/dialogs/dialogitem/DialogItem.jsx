import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
  let changeActiveUser = () => {
    props.changeActiveUser(props.id)
  }

    return (
      <div className={s.dialog}>
        <img src ='https://www.wisst-ihr-noch.de/wp-content/uploads/2019/01/b-seltsame-barbie-puppen.jpg' alt=''/>
        <NavLink to={'/dialogs/' + props.id} activeClassName={s.active1} onClick={changeActiveUser}> {props.name} </NavLink>
      </div>
    )
}

export default DialogItem