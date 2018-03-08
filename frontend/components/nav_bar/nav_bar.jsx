import React from "react";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return(
      <div className="nav-bar">
        <div className="nav-bar-left">
          <img
            className="logo"
            src="https://d3ui957tjb5bqd.cloudfront.net/uploads/2015/09/airbnb-2.jpg"
          />
        </div>
        <div className="nav-bar-right">
          <button
            className="modal-button"
            type="submit"
            onClick={this.handleSubmit}
          >
            Logout
          </button>
          <img
            className="profile-image"
            src="https://www.cabe-africa.org/wp-content/uploads/2012/01/1.png"
          />
        </div>
      </div>
    );
  }
}