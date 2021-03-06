import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = {currentUser: null};

const sessionReducer = (oldState = {currentUser: null}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser: action.currentUser});
    default:
      return oldState;
  }
};

export default sessionReducer;
