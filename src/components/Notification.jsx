import React from 'react';

class Notification extends React.Component {
  render() {
    const {
      isOpen,
      UserName,
      Message,
      closeNotification,
      replyNotification
    } = this.props;
    const styles = {
      display: isOpen ? 'block' : 'none'
    };
    return (
      <div style={styles}>
        <div>{UserName}</div>
        <div>{Message}</div>
        <div>
          <button onClick={closeNotification}></button>
          <button onClick={replyNotification.bind(this, UserName)}></button>
        </div>
      </div>
    )
  }
}

const { string, func, bool } = React.PropTypes;

Notification.propTypes = {
  isOpen: bool,
  UserName: string.isRequired,
  Message: string.isRequired,
  closeNotification: func.isRequired,
  replyNotification: func.isRequired
}

export default Notification;
