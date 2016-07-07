import React from 'react';
import NavBar from '../components/NavBar';
import ChatTable from './ChatTable';
import SideChat from './SideChat';
import Notification from './Notification';

class App extends React.Component {

	render() {
		return (
			<div className="container">
				<Notification />
				<div className="row">
		      <SideChat />
					<ChatTable />
		    </div>
			</div>
		);
	}
}

export default App;
