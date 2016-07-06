import ChatTable from '../components/ChatTable';
import chatActions from '../actions/chatActions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const currentChat = state.get('currentChat');
  return {
    userName : currentChat,
    messageList : state.getIn(['chats', currentChat]) ?
            state.getIn(['chats', currentChat]).toArray() : []
  }
}

export default connect(mapStateToProps, chatActions)(ChatTable);
