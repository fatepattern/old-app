import { connect } from 'react-redux';
import { addNewMessageActionCreator, changeActiveUserActionCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
  return {
    dialogs:state.dialogsPage.dialogs,
    messagesList:state.dialogsPage.messagesList,
    activeUser:state.dialogsPage.activeUser
  }
}
const mapDispatchToProps = (dispatch) => {
  const addNewMessage = (props1) => {
    dispatch(addNewMessageActionCreator({text:props1.message, id:props1.activeUser}))
  }

  const changeActiveUser = (activeUserId) => {
    dispatch(changeActiveUserActionCreator(activeUserId))
  }
  return {
    addNewMessage:addNewMessage,
    changeActiveUser:changeActiveUser
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;