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
      <div className="row" style={styles}>
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{UserName}</span>
              <p>{Message}</p>
            </div>
            <div className="card-action">
              <a onClick={closeNotification}>Close Notification</a>
              <a onClick={replyNotification.bind(this, UserName)}>Reply Notification</a>
            </div>
          </div>
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
