import React from 'react';

class NavBar extends React.Component {
	render() {
		return (
			<nav>
			  <div className="nav-wrapper red darken-1">
			    <a className="brand-logo right">React Basic</a>
			    <ul id="nav-mobile" className="left hide-on-med-and-down">
			      <li><a onClick={this.props.addUser}>Generar Nuevo Usuario</a></li>
			      <li><a onClick={this.props.createResponse}>Enviar Mensaje Chat</a></li>
			    </ul>
			  </div>
			</nav>
		);
	}
}

NavBar.propTypes = {
  addUser: React.PropTypes.func.isRequired,
  createResponse: React.PropTypes.func.isRequired
}

export default NavBar;
