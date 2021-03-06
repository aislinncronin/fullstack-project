import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKINGS,
  REMOVE_BOOKING }
  from '../actions/booking_actions';
import { merge } from 'lodash';

const bookingsReducer = (oldState = {}, action) => {
   
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;
    case RECEIVE_BOOKING:
      return merge({}, oldState, {[action.booking.id]:action.booking});
    case REMOVE_BOOKING:
      let newState = merge({}, oldState);
      delete newState[action.id];
      return newState;
    default:
      return oldState;

  }
};

export default bookingsReducer;
