import {LOGOUT, LOGIN, GET_USER} from '../types';
export function clearUser() {
  return {
    type: LOGOUT,
  };
}
export function setUser(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}
export function getUser() {
  return {
    type: GET_USER,
  };
}
