import React from 'react';
import { Link } from 'react-router';

class SideChat extends React.Component {
	render() {
		return (
      <div className="col s12 m4 l3">
        <div className="card orange darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">Chats</span>
          </div>
          <div className="collection">
            {
              this.props.userList.map((user, index) => {
                return (
                  <Link
                    to={`/chat/${user}`}
                    key={index}
                    className="collection-item"
                    >{user}
                  </Link>
                )
              })
            }
          </div>
        </div>
      </div>
		);
	}
}

SideChat.propTypes = {
  userList: React.PropTypes.array.isRequired,
	selectChat: React.PropTypes.func.isRequired
}

export default SideChat;
