import React from 'react';
import ChatInput from './ChatInput';

class ChatTable extends React.Component {
	render() {
		if (this.props.messageList <= 0) {
			return null;
		}
		return (
      <div className="col s12 m8 l9">
        <div className="card hoverable indigo darken-4">
          <div className="card-content white-text left-align">
            <span className="card-title">{`${this.props.userName}'s Chat`}</span>
          </div>
          <div className="card">
            {
              this.props.messageList.map((msg, index) => {
								const classes = `card-content ${msg.userName === 'You' ? 'right-align' : 'left-align'}`;
								return (
									<div key={index} className={classes}>
										<div className="chip">
											<b>{msg.userName}: </b>
											<text>{msg.message}</text>
										</div>
									</div>
								)
              })
            }
            <div className="card-action">
              <ChatInput
								onSubmit={this.props.sendChat}
							/>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

ChatTable.propTypes = {
  userName: React.PropTypes.string.isRequired,
  messageList: React.PropTypes.array.isRequired,
	sendChat: React.PropTypes.func.isRequired
}

export default ChatTable;
