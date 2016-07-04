import App from '../components/App';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    userList: state.get('userList'),
    currentChat: state.get('currentChat'),
    appTitle: state.get('appTitle')
  };
}

export default connect(mapStateToProps)(App);
