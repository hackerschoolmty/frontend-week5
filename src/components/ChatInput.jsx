import React from 'react';

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const val = this.refs.textInput.value;
    if (val && val.length > 0) {
      const chatMessage = {
        userName: 'You',
        message: val
      }
      this.props.onSubmit(chatMessage);
      this.refs.textInput.value = null;
    }
  }

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.onSubmit}>
          <div className="input-field col s10">
            <input type="text" ref="textInput" />
          </div>
          <div className="input-field col s2">
            <button type="submit" className="waves-effect waves-light btn">Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}

ChatInput.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}

export default ChatInput;
