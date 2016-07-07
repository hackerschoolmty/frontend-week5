import React from 'react';

class SideChat extends React.Component {
	constructor(props) {
		super(props);
		this.addUser = this.addUser.bind(this);
	}

	addUser() {
		this.props.addUser('newUser');
	}

	render() {
		return (
      <div className="col s12 m4 l3">
        <div className="card orange darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title" onClick={this.addUser} >Chats</span>
          </div>
          <div className="collection">
            {
              this.props.userList.map((user, index) => {
                return <a key={index} className="collection-item">{user}</a>
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
	addUser: React.PropTypes.func.isRequired
}

export default SideChat;
