import SideChat from '../components/SideChat';
import userListActions from '../actions/userListActions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    userList: state.get('userList').toArray()
  };
}


export default connect(mapStateToProps, userListActions)(SideChat);
