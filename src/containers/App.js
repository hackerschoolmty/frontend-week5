import App from '../components/App';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    userList: state.get('userList').toArray(),
    currentChat: state.get('currentChat'),
    chats: state.get('chats'),
    appTitle: state.get('appTitle')
  };
}

export default connect(mapStateToProps)(App);
