import Notification from '../components/Notification';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    isOpen: state.get('newMessage') || false,
    UserName: state.getIn('notification', 'UserName'),
    Message: state.getIn('notification', 'Message')
  }
}

const actionCreator = {
  closeNotification: () => {
    return {
      type: 'CLOSE_NOTIFICATION'
    }
  },
  replyNotification: (userName) => {
    return {
      type: 'REPLY_NOTIFICATION',
      userName: userName
    }
  }
}

export default connect(mapStateToProps, actionCreator)(Notification)
