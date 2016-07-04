import React from 'react';
import NavBar from './NavBar';
import ChatTable from './ChatTable';
import SideChat from './SideChat';

class App extends React.Component {

	render() {
		return (
			<div className="container">
				<NavBar {...this.props} />
				<div className="row">
		      <SideChat {...this.props} />
		      <ChatTable  {...this.props} />
		    </div>
			</div>
		);
	}
}

export default App;
