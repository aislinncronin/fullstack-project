import React from 'react';
import BookingIndexItem from './booking_index_item';
import { Link, withRouter } from 'react-router-dom';

class BookingIndex extends React.Component {

  componentDidMount() {
    this.props.fetchBookings();
  }

  renderBookings() {
    const bookings = Object.values(this.props.bookings);
    return bookings.map((booking, idx)=> {
      return <div key={`${idx}`} className="single-booking"><BookingIndexItem booking={booking} deleteBooking={this.props.deleteBooking} /></div>;
    });
  }

  render() {
    if (Object.keys(this.props.bookings).length === 0 && (this.props.currentUser)) {
      return(
      <div className="not-logged-in">
        You have no upcoming trips. <Link to="/search">Click here</Link> to search available homes and request to book!
      </div>
    );

    } else if (this.props.currentUser) {
      return(
        <div className="booking-index-container">
          <div className="booking-index">
            {this.renderBookings()}
          </div>
        </div>
      );
    } else {
      this.props.receiveCurrentModal("Log In");
      return <div className="not-logged-in">You must be logged in to view your bookings!</div>;
    }
  }
}
 export default withRouter(BookingIndex);
