import React from 'react'
import { Route } from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from './dialogitem/DialogItem.jsx'
import Message from './message/Message.jsx'

const Dialogs = (props) => {
    let dialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} changeActiveUser={props.changeActiveUser}/>)
    let messagesLists = props.messagesList.map(m => m.map(k => <Message message={k.message} />))

    let newMessage = React.createRef();

    let addNewMessage = () => {
      props.addNewMessage({message:newMessage.current.value, activeUser:props.activeUser});
      newMessage.current.value = '';
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
              {dialogs}
            </div>
            <div className={s.messages}>
              <Route exact path='/dialogs' component={() => messagesLists[0]} />
              <Route path={'/dialogs/' + props.activeUser} component={() => messagesLists[props.activeUser]} />
              <textarea ref={newMessage}></textarea>
              <button onClick={addNewMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;