import React from 'react';
import NavBar from './NavBar';
import ChatTable from '../containers/ChatTable';
import { generateResponse, generateNewUser } from '../utils/chatHelper';
import SideChat from '../containers/SideChat';
import Notification from '../containers/Notification';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = props;
		this.createUser = this.createUser.bind(this);
		this.createResponse = this.createResponse.bind(this);
		this.sendChat = this.sendChat.bind(this);
		this.switchUser = this.switchUser.bind(this);
	}

	createUser() {
		generateNewUser().then((user) => {
			this.props.addUser(user);
		});
	}

	createResponse() {
		generateResponse(this.state.currentChat).then((msg) => {
			let newMsgList = this.state.chats[this.state.currentChat].messageList.slice();
			newMsgList.push(msg);
			const chatObj = Object.assign(this.state.chats[this.state.currentChat], {messageList: newMsgList});
			let newCurrentChat = {};
			newCurrentChat[this.state.currentChat] = chatObj;
			const newChats = Object.assign(this.state.chats, newCurrentChat);
			this.setState({chats: newChats});
		});
	}

	sendChat(msg) {
		let newMsgList = this.state.chats[this.state.currentChat].messageList.slice();
		newMsgList.push(msg);
		const chatObj = Object.assign(this.state.chats[this.state.currentChat], {messageList: newMsgList});
		let newCurrentChat = {};
		newCurrentChat[this.state.currentChat] = chatObj;
		const newChats = Object.assign(this.state.chats, newCurrentChat);
		this.setState({chats: newChats});
	}

	switchUser(username) {
		if (this.state.chats[username]) {
			this.setState({currentChat: username});
		} else {
			let newCurrentChat = {};
			newCurrentChat[username] = {userName: username, messageList: []};
			const newChats = Object.assign(this.state.chats, newCurrentChat);
			this.setState({currentChat: username, chats: newChats});
		}
	}

	render() {
		const { changeTitle, switchUser, sendChat, createResponse, createUser } = this;
		return (
			<div className="container">
				<Notification />
				<NavBar {...this.state} createResponse={createResponse} createUser={createUser} />
				<div className="row">
		      <SideChat />
					<ChatTable />
		    </div>
			</div>
		);
	}
}

export default App;
