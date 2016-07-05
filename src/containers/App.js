import App from '../components/App';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    userList: state.userList,
    currentChat: state.currentChat,
    chats: state.chats,
    appTitle: state.appTitle
  };
}

export default connect(mapStateToProps)(App);
