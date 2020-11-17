import {LOGIN, LOGOUT} from '../types';

let initialState = {isLoggedIn: false, loading: false, user: {}};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, user: action.payload};
    case LOGOUT:
      return {...state, user: {}};
    default:
      return {...state};
  }
};
