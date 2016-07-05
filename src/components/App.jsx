import React from 'react';
import NavBar from './NavBar';
import ChatTable from './ChatTable';
import { generateResponse, generateNewUser } from '../utils/chatHelper';
import SideChat from './SideChat';

const initialState = {
	userList: [],
	currentChat: null,
	chats: [],
	appTitle: 'React Chat'
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialState;
		this.createUser = this.createUser.bind(this);
		this.createResponse = this.createResponse.bind(this);
		this.sendChat = this.sendChat.bind(this);
		this.switchUser = this.switchUser.bind(this);
	}

	createUser() {
		generateNewUser().then((user) => {
			let newUserList = this.state.userList.slice();
			newUserList.push(user);
			this.setState({userList: newUserList});
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
				<NavBar {...this.state} createResponse={createResponse} createUser={createUser} />
				<div className="row">
		      <SideChat {...this.state} switchUser={switchUser} />
					{
						this.state.chats[this.state.currentChat] ?
							<ChatTable
								{...this.state.chats[this.state.currentChat]}
							 	sendChat={sendChat}
							/>
						:
							null
					}
		    </div>
			</div>
		);
	}
}

export default App;
